import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { fireDB } from '../../fireabase/FirebaseConfig';
import Navbar from '../../components/navbar/Navbar';

function UserMarkAddress() {
    const { id } = useParams();
    const [addressArray, setAddressArray] = useState([]);

    useEffect(() => {
        const getUserAddress = async (id) => {
            try {
                const q = query(
                    collection(fireDB, 'address'),
                    where('productid', '==', id)
                );
        
                const querySnapshot = await getDocs(q);
                const addressArray = [];
                querySnapshot.forEach((doc) => {
                    addressArray.push({ ...doc.data(), id: doc.id });
                });
        
                setAddressArray(addressArray);
            } catch (error) {
                console.error('Error fetching address information:', error);
                toast.error('An error occurred while fetching address information.');
            }
        };
        
        getUserAddress(id);
    }, [id]);

    return (
        <>
        <Navbar></Navbar>
        <div className="bg-gray-200 min-h-screen">
            <div className="container mx-auto py-12">
                <h1 className="text-3xl font-bold mb-6 text-center">Arriving Visits</h1>
                {addressArray.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Render address information */}
                        {addressArray.map((address) => (
                            <div key={address.id} className="bg-white rounded-lg shadow-md p-6">
                                <h2 className="text-lg font-semibold mb-4">{address.title}</h2>
                                <p className="text-gray-600 mb-2"><span className="font-semibold">Name:</span> {address.name}</p>
                                <p className="text-gray-600 mb-2"><span className="font-semibold">Phone Number:</span> {address.phonenumber}</p>
                                <p className="text-gray-600 mb-2"><span className="font-semibold">Visit Date:</span> {address.visitdate}</p>
                                <p className="text-gray-600 mb-2"><span className="font-semibold">Expected Price:</span> {address.expectedprice}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-gray-600 text-lg"> No Visit found!</p>
                )}
            </div>
        </div>
        </>
    );
}

export default UserMarkAddress;
