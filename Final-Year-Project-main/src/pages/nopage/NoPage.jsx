import React from 'react'
import { useSelector } from 'react-redux';
import { useState,useEffect } from 'react';
import { toast } from 'react-toastify';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { fireDB } from '../../fireabase/FirebaseConfig';

function NoPage() {

  const [addressArray, setAddressArray] = useState([]);

  useEffect(() => {
      const getMarketorders = async () => {
          try {
              const q = query(
                  collection(fireDB, 'ordersss'),
                  
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
      
      getMarketorders();
  }, []);
  return (

    <div>
         {addressArray.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Render address information */}
                        {addressArray.map((order) => (
                            <div  className="bg-white rounded-lg shadow-md p-6">
                                <h2 className="text-lg font-semibold mb-4">{order.FinalPrice}</h2>
                                <p className="text-gray-600 mb-2"><span className="font-semibold">Name:</span> {}</p>
                                <p className="text-gray-600 mb-2"><span className="font-semibold">Phone Number:</span> {order.imageURL}</p>
                                <p className="text-gray-600 mb-2"><span className="font-semibold">Visit Date:</span> {order.imageURL}</p>
                                <p className="text-gray-600 mb-2"><span className="font-semibold">Expected Price:</span> {order.imageURL}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-gray-600 text-lg">Better luck next time! No addresses found.</p>
                )}
      
     NoPage</div>
  )
}

export default NoPage