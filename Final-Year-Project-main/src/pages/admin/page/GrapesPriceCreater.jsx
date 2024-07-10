import React, { useState } from 'react';
import { doc, setDoc } from 'firebase/firestore';
import { fireDB } from '../../../fireabase/FirebaseConfig';

function GrapesPriceCreater() {
    const [cityName, setCityName] = useState('');
    const [highPrice, setHighPrice] = useState('');
    const [lowPrice, setLowPrice] = useState('');
    const [midPrice, setMidPrice] = useState('');

    const addMarketPrice = async () => {
        try {
            const marketPriceRef = doc(fireDB, 'marketPrices', cityName);
            await setDoc(marketPriceRef, {
                cityName: cityName,
                highPrice: parseInt(highPrice), 
                lowPrice: parseInt(lowPrice),   
                midPrice: parseInt(midPrice)    
            });
            console.log('Market price added successfully!');
        } catch (error) {
            console.error('Error adding market price:', error);
        }
    };

    const updateMarketPrice = async () => {
        try {
            const marketPriceRef = doc(fireDB, 'marketPrices', cityName);
            await setDoc(marketPriceRef, {
                cityName: cityName,
                highPrice: parseInt(highPrice), 
                lowPrice: parseInt(lowPrice),   
                midPrice: parseInt(midPrice)    
            }, { merge: true }); 
            console.log('Market price updated successfully!');
        } catch (error) {
            console.error('Error updating market price:', error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addMarketPrice();
    };

    return (
        <form onSubmit={handleSubmit} className="bg-gray-100 p-4 rounded-md shadow-md">
            <div className="mb-4">
                <label htmlFor="cityName" className="block text-gray-700 font-bold mb-2">City Name:</label>
                <input
                    type="text"
                    id="cityName"
                    value={cityName}
                    onChange={(e) => setCityName(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-indigo-500"
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="highPrice" className="block text-gray-700 font-bold mb-2">High Price:</label>
                <input
                    type="number"
                    id="highPrice"
                    value={highPrice}
                    onChange={(e) => setHighPrice(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-indigo-500"
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="lowPrice" className="block text-gray-700 font-bold mb-2">Low Price:</label>
                <input
                    type="number"
                    id="lowPrice"
                    value={lowPrice}
                    onChange={(e) => setLowPrice(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-indigo-500"
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="midPrice" className="block text-gray-700 font-bold mb-2">Mid Price:</label>
                <input
                    type="number"
                    id="midPrice"
                    value={midPrice}
                    onChange={(e) => setMidPrice(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-indigo-500"
                    required
                />
            </div>
            <button type="submit" className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600">Add Market Price</button>
            <button onClick={updateMarketPrice} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 ml-2">Update Market Price</button>
        </form>
    );
};

export default GrapesPriceCreater;
