import React, { useEffect, useState } from 'react';
import { fireDB } from '../../../fireabase/FirebaseConfig';
import { getDoc, doc,query,collection,where,orderBy,getDocs } from 'firebase/firestore';
import { useParams } from 'react-router';

function VisitPlacesData() {
    const params = useParams();
    const [uservisit, setuservisit] = useState([]);
    const [products, setProducts] = useState(null);

    useEffect(() => {
        const getProductData = async () => {
            try {
                if (products && products.productid) {
                    const productTemp = await getDoc(doc(fireDB, "products", products.productid));
                    setProducts(productTemp.data());
                }
            } catch (error) {
                console.error('Error fetching product data:', error);
            }
        };

        getProductData();
    }, [products]); 
console.log(products)

    useEffect(() => {
        const getVisitData = async () => {
            try {
                const currentUser = JSON.parse(localStorage.getItem("user"));
                if (currentUser) {
                    const userId = currentUser.user.uid;
                   
                    const q = query(
                        collection(fireDB, 'address'),
                        where('userId', '==', userId),
                        orderBy('visitdate')
                    );

                    const querySnapshot = await getDocs(q);
                    let visitArray = [];
                    querySnapshot.forEach((doc) => {
                        visitArray.push({ ...doc.data(), id: doc.id });
                    });
                    setuservisit(visitArray);
                }
            } catch (error) {
                console.error('Error fetching visit data:', error);
            }
        };

        getVisitData();
    }, []);

    return (
        <div className="container mx-auto py-8">
            <h2 className="text-3xl font-bold text-center mb-8">Visit Places Data</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {uservisit.map(({ name, visitdate }, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg border border-gray-200 p-6">
                        <h3 className="text-xl font-semibold mb-4">{name}</h3>
                        <h3 className="text-xl font-semibold mb-4">{visitdate}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default VisitPlacesData;
