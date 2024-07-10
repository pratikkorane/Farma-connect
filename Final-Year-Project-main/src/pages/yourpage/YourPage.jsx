import React from 'react';
import AddressInfoPage from '../order/AddressInfoPage';

const YourPage = () => {
  const addressInfo = {
    name: 'John Doe',
    address: '123 Main St, City, Country',
    pincode: '12345',
    phoneNumber: '+1234567890',
    date: 'Mar 18, 2024', // Example date format
  };

  return (
    <div>
      <AddressInfoPage addressInfo={addressInfo} />
    </div>
  );
};

export default YourPage;
