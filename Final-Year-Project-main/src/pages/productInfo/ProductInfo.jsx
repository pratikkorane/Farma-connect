import React, { useContext, useEffect, useState } from 'react';
import Layout from '../../components/layout/Layout';
import myContext from '../../context/data/myContext';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { doc, getDoc, collection, addDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { addToCart } from '../../redux/cartSlice.jsx';
import { fireDB } from '../../fireabase/FirebaseConfig';
import { Link } from 'react-router-dom';


function ProductInfo() {
    const context = useContext(myContext);
    const { loading, setLoading, user } = context;

    const [products, setProducts] = useState('');
    const [finalPrice, setFinalPrice] = useState('');
    const [marketerName, setmarketerName] = useState('');
    const [isInputOpen, setIsInputOpen] = useState(false);
    const params = useParams();

    const getProductData = async () => {
        setLoading(true);
        try {
            const productTemp = await getDoc(doc(fireDB, "products", params.id));
            setProducts(productTemp.data());
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        getProductData();
    }, []);




    const toggleInput = () => {
        setIsInputOpen(!isInputOpen);
    };

    const createOrder = async () => {
        try {
            if (!products) {
                throw new Error('Product data not available');
            }
    
           
            const orderData = {
                finalPrice: finalPrice, 
                imageURL: products.imageUrl,
                productID: products.productid,
                userName:products.userName,
                MarketerName:marketerName
            };
            await addDoc(collection(fireDB, "ordersss"), orderData);
            toast.success('Order created successfully!');
        } catch (error) {
            console.error('Error creating order:', error);
            toast.error('An error occurred while creating the order.');
        }
    };
    
    return (
        <Layout>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-10 mx-auto">
                    {products &&
                        <div className="lg:w-4/5 mx-auto flex flex-wrap">
                            <img
                                alt="ecommerce"
                                className="lg:w-1/3 w-full lg:h-auto object-cover object-center rounded"
                                src={products.imageUrl}
                            />
                            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                                <h2 className="text-sm title-font text-gray-500 tracking-widest">
                                    Variety
                                </h2>
                                <h1 className="text-gray-900 text-3xl title-font font-bold mb-6">
                                    {products.title}
                                </h1>
                                <h1 className="text-sm title-font text-black-600 tracking-widest font-bold">
                                    Contact:
                                </h1>
                                <p className='font-bold'>
                                    {products.category}
                                </p>
                                <h1 className="text-sm title-font text-black-600 tracking-widest font-bold">
                                    Address
                                </h1>
                                <p className="leading-relaxed border-b-3 mb-1 pb-1   font-medium">
                                    {products.description}
                                </p>
                                <h1 className="text-sm title-font text-black-600 tracking-widest font-bold">
                                    Expected Price
                                </h1>
                                <p className="leading-relaxed border-b-3 mb-2 pb-4 font-medium">
                                   Rs. {products.price}
                                </p>
                                <p className="leading-relaxed border-b-2 mb-6 pb-5 font-bold">
                                    No of trees: {products.trees}
                                </p>
                              
                                {isInputOpen ? (
                                    <div className="flex items-center mb-4">
                                        <input
                                            type="number"
                                            className="mr-2 border rounded-sm p-1"
                                            placeholder="Enter final price"
                                            value={finalPrice}
                                            onChange={(e) => setFinalPrice(e.target.value)}
                                        />
                                         <input
                                            type="text"
                                            className="mr-2 border rounded-sm p-1"
                                            placeholder="Your Name"
                                            value={marketerName}
                                            onChange={(e) => setmarketerName(e.target.value)}
                                        />
                                        <button onClick={createOrder} className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                                            Confirm
                                        </button>
                                        <button onClick={toggleInput} className="flex ml-auto text-white bg-gray-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded">
                                            Cancel
                                        </button>
                                    </div>
                                ) : (
                                    <button onClick={toggleInput} className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                                        Buy Now
                                    </button>
                                )}
                               
                                <div className="flex">
                                  <Link to={`/addressinfo/${products.productid}`}>
                                        <button className='bg-gray-300 px-5 py-2 rounded-xl'>Visit</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </section>
        </Layout>
    );
}

export default ProductInfo;
