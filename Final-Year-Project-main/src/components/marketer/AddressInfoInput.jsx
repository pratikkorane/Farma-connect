import React, { useContext, useEffect, useState } from 'react';
import myContext from '../../context/data/myContext';
import Navbar from '../navbar/Navbar';
import { useParams } from 'react-router';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddAddressInfo() {
    const context = useContext(myContext);
    const { addressinfo, setAddressinfo, addAddressInfo } = context;
    const { id } = useParams();

    const cardStyle = {
        backgroundImage: 'url("https://images.pexels.com/photos/39511/purple-grapes-vineyard-napa-valley-napa-vineyard-39511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '10px',
    };

    useEffect(() => {
        setAddressinfo({ ...addressinfo, productid: id });
        console.log(id)
    }, []);

    const handleSubmit = () => {
      
        if (!addressinfo.name || !addressinfo.phonenumber || !addressinfo.visitdate || !addressinfo.expectedprice) {
            toast.error('Please fill in all fields.');
            return;
        }

        const phonePattern = /^[0-9]{10}$/;
        if (!phonePattern.test(addressinfo.phonenumber)) {
            toast.error('Please enter a valid phone number.');
            return;
        }

     
        addAddressInfo(id);

       
        setAddressinfo({
            name: '',
            phonenumber: '',
            visitdate: '',
            expectedprice: ''
        });
    };

    return (
        <>
            <Navbar />
            <div style={cardStyle}>
                <div className='flex justify-center items-center h-screen'>
                    <div className='bg-green-500 p-10 rounded-xl'>
                        <div className="mb-4">
                            <h1 className='text-center text-black text-xl font-bold'>Plane Visit</h1>
                        </div>

                        <div className="mb-4">
                            <input
                                type="text"
                                value={addressinfo.name}
                                onChange={(e) => setAddressinfo({ ...addressinfo, name: e.target.value })}
                                name='name'
                                className='bg-gray-600 px-3 py-2 w-full rounded-lg text-white placeholder:text-gray-200 outline-none'
                                placeholder='Your Name'
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="text"
                                value={addressinfo.phonenumber}
                                onChange={(e) => setAddressinfo({ ...addressinfo, phonenumber: e.target.value })}
                                name='phonenumber'
                                className='bg-gray-600 px-3 py-2 w-full rounded-lg text-white placeholder:text-gray-200 outline-none'
                                placeholder='Phone Number'
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="date"
                                value={addressinfo.visitdate}
                                onChange={(e) => setAddressinfo({ ...addressinfo, visitdate: e.target.value })}
                                name='visitdate'
                                className='bg-gray-600 px-3 py-2 w-full rounded-lg text-white placeholder:text-gray-200 outline-none'
                                placeholder='Expected Price'
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="text"
                                value={addressinfo.expectedprice}
                                onChange={(e) => setAddressinfo({ ...addressinfo, expectedprice: e.target.value })}
                                name='expectedprice'
                                className='bg-gray-600 px-3 py-2 w-full rounded-lg text-white placeholder:text-gray-200 outline-none'
                                placeholder='Expected Price'
                            />
                        </div>
                        <div className='flex justify-center mb-3'>
                            <button
                                onClick={handleSubmit}
                                className='bg-yellow-200 w-full text-black font-bold px-3 py-2 rounded-lg'>
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddAddressInfo;
