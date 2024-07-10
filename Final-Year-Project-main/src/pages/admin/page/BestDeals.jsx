import React, { useContext, useEffect, useState } from 'react';
import { collection, getDocs, query } from 'firebase/firestore';
import { fireDB } from '../../../fireabase/FirebaseConfig';

const BestDeals = () => {
    const [bestDealsArray, setBestDealsArray] = useState([]);

    useEffect(() => {
        const fetchBestDeals = async () => {
            try {
                const q = query(collection(fireDB, 'BestDeals'));
                const querySnapshot = await getDocs(q);
                const deals = [];
                querySnapshot.forEach((doc) => {
                    deals.push({ ...doc.data(), id: doc.id });
                });
                setBestDealsArray(deals);
            } catch (error) {
                console.error('Error fetching best deals:', error);
            }
        };
        fetchBestDeals();
    }, []);

    return (
        <div className="container mx-auto px-0 py-8">
        <div className="flex flex-wrap justify-center">
          {bestDealsArray.length > 0 ? (
            bestDealsArray.map((deal) => (
              <div key={deal.id} className="max-w-lg mx-2 my-4 overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-blue-400">
                <img src={deal.imageURL} alt="Product" className="w-full h-64 object-cover rounded-t-lg" />
                <div className="px-4 py-4">
                  <h2 className="text-lg font-semibold mb-2">{deal.productName}</h2>
                  <p className="text-gray-600 mb-2">Final Price: ₹{deal.finalPrice}</p>
                  <p className="text-gray-600 mb-2">User: {deal.userName}</p>
                  <p className="text-gray-600 mb-2">Marketer Name: {deal.MarketerName}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600 text-lg">No best deals available</p>
          )}
        </div>
      </div>
      
    
    
    );
};

export default BestDeals;
