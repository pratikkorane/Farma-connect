import React from 'react';
import { useState,useEffect } from 'react';
import { fireDB } from '../../../fireabase/FirebaseConfig';
import { doc, getDocs, collection, addDoc,query } from 'firebase/firestore';
import { toast } from 'react-toastify'; 
const GrapesPrices = () => {

  const [marketarray, setmarketarray] = useState([]);

  useEffect(() => {
      const getMarketprices = async () => {
          try {
              const q = query(
                  collection(fireDB, 'marketPrices'),
                  
              );
      
              const querySnapshot = await getDocs(q);
              const addressArray = [];
              querySnapshot.forEach((doc) => {
                  addressArray.push({ ...doc.data(), id: doc.id });
              });
      
              setmarketarray(addressArray);
          } catch (error) {
              console.error('Error fetching address information:', error);
              toast.error('An error occurred while fetching address information.');
          }
      };
      
      getMarketprices();
  }, []);
  console.log(marketarray)
  return(
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Grapes Market  Prices</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {marketarray.map(({cityName, lowPrice, midPrice, highPrice }, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg border border-gray-200 p-6">
            <h3 className="text-xl font-semibold mb-4">{cityName}</h3>
            <div className="flex flex-col space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Low Quality:</span>
                <span className="text-blue-500 font-semibold">Rs{lowPrice}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Medium Quality:</span>
                <span className="text-blue-500 font-semibold">Rs{midPrice}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">High Quality:</span>
                <span className="text-blue-500 font-semibold">Rs{highPrice}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GrapesPrices;
