import React, { useEffect, useState } from 'react'
import MyContext from './myContext'
import { Timestamp, addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, orderBy, query, setDoc, where} from 'firebase/firestore';
import { toast } from 'react-toastify';
import { fireDB } from '../../fireabase/FirebaseConfig';

function myState(props) {
    const [user, setUser] = useState([]);
    const [mode, setMode] = useState('dark');

    const toggleMode = () => {
        if (mode === 'light') {
            setMode('dark');
            document.body.style.backgroundColor = "rgb(17, 24, 39)"
        }
        else {
            setMode('light');
            document.body.style.backgroundColor = "white"
        }
    }

    const [loading, setLoading] = useState(false);

    const [products, setProducts] = useState({
        title: null,
        price: null,
        imageUrl: null,
        category: null,
        description: null,
        userName:null,
        time: Timestamp.now(),
        userId: null,
        productid:null,
        date: new Date().toLocaleString(
            "en-US",
            {
                month: "short",
                day: "2-digit",
                year: "numeric",
            }
        )
    });






    const addProduct = async () => {

        if (products.title == null || products.price == null || products.imageUrl == null || products.category == null || products.description == null) {
            return toast.error("all fields are required")
        }

        setLoading(true)

        try {
            const currentUser = JSON.parse(localStorage.getItem("user"));

            const userId = currentUser.user.uid;

            const generateRandomNumber = () => {
                return Math.floor(100000 + Math.random() * 900000);
            };
        
            const productId = generateRandomNumber();
            
            const productData = {
                ...products,
                userId: userId,
                productid:productId
             
                
            };

            const productRef = collection(fireDB, 'products');
            await addDoc(productRef, productData)
            toast.success("Add product successfully");
          
            getProductData();
            setLoading(false)
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
        

    }

    const [product, setProduct] = useState([]);

    const getProductData = async () => {

        setLoading(true)

        try {
            const q = query(
                collection(fireDB, 'products'),
                orderBy('time')
            );

            const data = onSnapshot(q, (QuerySnapshot) => {
                let productArray = [];
                QuerySnapshot.forEach((doc) => {
                    productArray.push({ ...doc.data(), id: doc.id });
                });
                setProduct(productArray);
                setLoading(false)
            });

            return () => data;

        } catch (error) {
            console.log(error)
            setLoading(false)
        }

    }

    useEffect(() => {
        getProductData();
        getUserProducts();
    }, []);

    // update product function

    const edithandle = (item) => {
        setProducts(item)
    }

    





    const updateProduct = async () => {
        setLoading(true)
        try {

            await setDoc(doc(fireDB, 'products', products.id), products)
            toast.success("Product Updated successfully")
            setTimeout(() => {
                window.location.href = '/dashboard'
            }, 800);
            getProductData();
            setLoading(false)

        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    // delete product

    const deleteProduct = async (item) => {
        setLoading(true)
        try {
            await deleteDoc(doc(fireDB, 'products', item.id))
            toast.success('Product Deleted successfully')
            getProductData();
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }


    const [order, setOrder] = useState([]);

    const getOrderData = async () => {
        setLoading(true)
        try {
            const result = await getDocs(collection(fireDB, "order"))
            const ordersArray = [];
            result.forEach((doc) => {
                ordersArray.push(doc.data());
                setLoading(false)
            });
            setOrder(ordersArray);
            // console.log(ordersArray)
            setLoading(false);
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }


    const [addedProducts, setUserAddedProducts] = useState([]);

    const getUserProducts = async () => {
        setLoading(true);
        try {
            const currentUser = JSON.parse(localStorage.getItem("user"));
            if (currentUser) {
                const userId = currentUser.user.uid;
                const q = query(
                    collection(fireDB, 'products'),
                    where('userId', '==', userId),
                    orderBy('time')
                );
    
                const querySnapshot = await getDocs(q);
                let productArray = [];
                querySnapshot.forEach((doc) => {
                    productArray.push({ ...doc.data(), id: doc.id });
                });
                setUserAddedProducts(productArray)
                setLoading(false);
                
                return productArray; // Return the product array
            }
        } catch (error) {
            console.log(error);
            setLoading(false);
            return []; // Return an empty array if there's an error
        }
    }
    

    const [productaddress, setproductaddress] = useState([]);

    const getUseraddress = async (id) => {
        setLoading(true);
        try {
            const currentUser = JSON.parse(localStorage.getItem("address"));
            if (currentUser) {
                const userId = currentUser.user.uid;
                const q = query(
                    collection(fireDB, 'address'),
                    where('productid', '==', id),
                    orderBy('time')
                );
    
                const querySnapshot = await getDocs(q);
                let productAr = [];
                querySnapshot.forEach((doc) => {
                    productAr.push({ ...doc.data(), id: doc.id });
                });
                setproductaddress(productAr)
                console.log(productaddress)
                console.log("fuction called")
                setLoading(false);
                
                return productAr; // Return the product array
            }
        } catch (error) {
            console.log(error);
            setLoading(false);
            return []; // Return an empty array if there's an error
        }
    }

    const getUserData = async () => {
        setLoading(true)
        try {
            const result = await getDocs(collection(fireDB, "users"))
            const usersArray = [];
            result.forEach((doc) => {
                usersArray.push(doc.data());
                setLoading(false)
            });
            setUser(usersArray);
            setLoading(false);
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    useEffect(() => {
        getOrderData();
        getUserData();
    }, []);


    const [addressinfo, setAddressinfo] = useState({
        title: '',
        name: '',
        phonenumber: '',
        visitdate: '',
        expectedprice: '',
        time: Timestamp.now(),
        productid:'',
        userId: '', // Initialize userId with an empty string
        date: new Date().toLocaleString(
            "en-US",
            {
                month: "short",
                day: "2-digit",
                year: "numeric",
            }
        )
    });
    
    const addAddressInfo = async ( productid) => {
        if (addressinfo.title === '' || addressinfo.name === '' || addressinfo.phonenumber === '' || addressinfo.visitdate === '' || addressinfo.expectedprice === ''|| addressinfo.productid =='') {
            return toast.error("all fields are required");
        }
    
        setLoading(true);
    
        try {
            const currentUser = JSON.parse(localStorage.getItem("user"));
            const userId = currentUser.user.uid;
            const addressData = { ...addressinfo, userId,productid }; // Include userId in addressData
    
            const addressRef = collection(fireDB, 'address');
            await addDoc(addressRef, addressData);
            // console.log(addressData)
            toast.success(" Visit Data sent Succesfully");
            
              
            getAddressInfo();
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }
    
    const getAddressInfo = async () => {
        setLoading(true);

        try {
            const q = query(
                collection(fireDB, 'address'),
                orderBy('time')
            );

            const data = onSnapshot(q, (QuerySnapshot) => {
                let addressArray = [];
                QuerySnapshot.forEach((doc) => {
                    addressArray.push({ ...doc.data(), id: doc.id });
                });
                setAddressinfo(addressArray);
                setLoading(false);
            });

            return () => data;
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    useEffect(() => {
        getAddressInfo();
    }, []);

    const updateAddressInfo = async () => {
        setLoading(true);
        try {
            await setDoc(doc(fireDB, 'address', addressinfo.id), addressinfo);
            toast.success("Address info updated successfully");
            setTimeout(() => {
                window.location.href = '/dashboard';
            }, 800);
            getAddressInfo();
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    const deleteAddressInfo = async (item) => {
        setLoading(true);
        try {
            await deleteDoc(doc(fireDB, 'address', item.id));
            toast.success('Address info deleted successfully');
            getAddressInfo();
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    useEffect(() => {
        getProductData();
        getUserProducts();
    }, []);

    const [searchkey, setSearchkey] = useState('')
    const [filterType, setFilterType] = useState('')
    const [filterPrice, setFilterPrice] = useState('')

    return (
        <MyContext.Provider value={{
            mode, toggleMode, loading, setLoading,
            products, setProducts, addProduct, product,
            edithandle, updateProduct, deleteProduct, order,
            user, searchkey, setSearchkey, filterType, setFilterType,
            filterPrice, setFilterPrice, addedProducts, getUserProducts, getAddressInfo, addAddressInfo,
            addressinfo, setAddressinfo, updateAddressInfo, deleteAddressInfo,productaddress,setproductaddress,getUseraddress
        }}>
            {props.children}
        </MyContext.Provider>
    )
}

export default myState