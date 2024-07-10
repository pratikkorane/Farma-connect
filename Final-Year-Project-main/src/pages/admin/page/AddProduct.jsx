import React, { useContext } from 'react';
import myContext from '../../../context/data/myContext';
import { BsBrightnessAltLow } from 'react-icons/bs';
import HeroSection from '../../../components/heroSection/HeroSection';
import Navbar from '../../../components/navbar/Navbar';

function AddProduct() {
    const context = useContext(myContext);
    const { products, setProducts, addProduct } = context;
    
   
   
    const cardStyle = {
        backgroundImage: 'url("https://images.pexels.com/photos/39511/purple-grapes-vineyard-napa-valley-napa-vineyard-39511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '10px',
      };

    return (
        <>
            <Navbar/>
            <div style={cardStyle}>
                <div className='flex justify-center items-center h-screen my-7 py-4'>
                    <div className='bg-green-500 px-10 py-5 rounded-xl my-3'>
                        <div className="mb-4">
                            <h1 className='text-center text-black text-xl font-bold'>Add Product</h1>
                        </div>
                        <div className="mb-4">
                            <input
                                type="text"
                                value={products.userName}
                                onChange={(e) => setProducts({ ...products, userName: e.target.value })}
                                name='userName'
                                className='bg-gray-600 px-3 py-2 w-full rounded-lg text-white placeholder:text-gray-200 outline-none'
                                placeholder='Your Name'
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="text"
                                value={products.title}
                                onChange={(e) => setProducts({ ...products, title: e.target.value })}
                                name='title'
                                className='bg-gray-600 px-3 py-2 w-full rounded-lg text-white placeholder:text-gray-200 outline-none'
                                placeholder='Product Variety'
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="text"
                                value={products.price}
                                onChange={(e) => setProducts({ ...products, price: e.target.value })}
                                name='price'
                                className='bg-gray-600 px-3 py-2 w-full rounded-lg text-white placeholder:text-gray-200 outline-none'
                                placeholder='Expected Price'
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="text"
                                value={products.trees}
                                onChange={(e) => setProducts({ ...products, trees: e.target.value })}
                                name='trees'
                                className='bg-gray-600 px-3 py-2 w-full rounded-lg text-white placeholder:text-gray-200 outline-none'
                                placeholder='No of trees'
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="text"
                                value={products.imageUrl}
                                onChange={(e) => setProducts({ ...products, imageUrl: e.target.value })}
                                name='imageurl'
                                className='bg-gray-600 px-3 py-2 w-full rounded-lg text-white placeholder:text-gray-200 outline-none'
                                placeholder='Product imageUrl'
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="text"
                                value={products.category}
                                onChange={(e) => setProducts({ ...products, category: e.target.value })}
                                name='category'
                                className='bg-gray-600 px-3 py-2 w-full rounded-lg text-white placeholder:text-gray-200 outline-none'
                                placeholder='Mobile number'
                                pattern="[0-9]{10}"
                                title="Please enter a 10-digit phone number"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <textarea
                                cols="30"
                                rows="10"
                                name='description'
                                value={products.description}
                                onChange={(e) => setProducts({ ...products, description: e.target.value })}
                                className='bg-gray-600 px-3 py-2 w-full h-36 rounded-lg text-white placeholder:text-gray-200 outline-none'
                                placeholder='Address'
                            />
                        </div>
                        <div className='flex justify-center mb-3'>
                            <button
                                onClick={() => {
                                 
                                    addProduct();
                                    setTimeout(() => {
                                        window.location.href = '/'
                                    }, 950);
                                }}
                                className='bg-yellow-200 w-full text-black font-bold px-3 py-2 rounded-lg'>
                                Add Product
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddProduct;
