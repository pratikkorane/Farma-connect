import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { fireDB } from '../../fireabase/FirebaseConfig';

const GetContacts = () => {
    const [contactdata, setContactData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(fireDB, 'Contactsus'));
                const contactsData = [];
              
                setContactData(contactsData);
            } catch (error) {
                console.error('Error fetching contacts:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="grid grid-cols-3 gap-4">
            {contactdata.map((contact) => (
                <div  className="bg-white shadow-md rounded p-4">
                    <h2 className="text-lg font-bold">{contact.Name}</h2>
                    <p>Email: {contact.email}</p>
                    <p>Message: {contact.message}</p>
                </div>
            ))}
        </div>
    );
};

export default GetContacts;
