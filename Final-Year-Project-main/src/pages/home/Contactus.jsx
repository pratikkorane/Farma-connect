import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import { toast } from 'react-toastify';
import { doc, setDoc } from 'firebase/firestore';
import { fireDB } from '../../fireabase/FirebaseConfig';
const ContactUs = () => {

    const [Name, setName] = useState('');
    const [email, setemail] = useState('');
    const [message, setmessage] = useState('');
  

    const sendContact = async () => {
        try {
            const marketPriceRef = doc(fireDB, 'Contactus');
            await setDoc(marketPriceRef, {
                Name: Name,
             
                email: email,  
              message: message    
            });
            console.log('Contact details send successfully' );
            toast.success("Message sent successfully!")
        } catch (error) {
            console.error('Error during Contact :', error);
        }
    };

    

   

   

    const handleSubmit = (e) => {
        e.preventDefault();
       sendContact();
      
    };

    return (
        <>
        <Navbar></Navbar>
        <div className="flex justify-center items-center h-screen">
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/2">
                <h2 className="text-2xl mb-6">Contact Us</h2>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        type="text"
                        placeholder="Your Name"
                        name="name"
                        value={Name}
                        onChange={(e)=>{setName(e.target.value)}}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder="Your Email"
                        name="email"
                        value={email}
                        onChange={(e)=>{setemail(e.target.value)}}
                        required
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                        Message
                    </label>
                    <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="message"
                        placeholder="Your Message"
                        name="message"
                        value={message}
                        onChange={(e)=>{setmessage(e.target.value)}}
                        required
                    ></textarea>
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
        </>
    );
};

export default ContactUs;
