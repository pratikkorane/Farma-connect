import React, { useContext } from 'react';
import myContext from '../../../context/data/myContext';
import { BsBrightnessAltLow } from 'react-icons/bs';


function testproduct() {
    const context = useContext(myContext);
    const { products, setProducts, addProduct } = context;
    
    const cardStyle = {
        backgroundImage: 'url("https://images.pexels.com/photos/39511/purple-grapes-vineyard-napa-valley-napa-vineyard-39511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', // Replace with the actual path to your image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        
        borderRadius: '10px',
        // hey i am prathamesh mali we are here for u  same as the lateral movement
      };

    return (

        
        <div style={cardStyle}>

            <div className='flex justify-center items-center h-screen'>
                <div className='bg-green-500 p-10 rounded-xl'>
                    <div className="mb-4">
                        <h1 className='text-center text-black text-xl font-bold'>Add Product</h1>
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
                            className='bg-gray-600 px-3 py-2 w-full rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Address'
                        />
                    </div>
                    <div className='flex justify-center mb-3'>
    <button
        onClick={() => {
            const phoneNumberRegex = /^[0-9]{10}$/;
            if (phoneNumberRegex.test(products.category)) {
                addProduct();
            } else {
                alert("Please enter a valid 10-digit phone number.");
            }
        }}
        className='bg-yellow-200 w-full text-black font-bold px-3 py-2 rounded-lg'>
        Add Product
    </button>
</div>
                </div>
            </div>
        </div>
        
    )
}

export default  testproduct;
