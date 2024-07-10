// ProductIdContext.js
import React, { createContext, useState } from 'react';

const ProductIdContext = createContext();

export const ProductIdProvider = ({ children }) => {
  const [productId, setProductId] = useState(null);

  return (
    <ProductIdContext.Provider value={{ productId, setProductId }}>
      {children}
    </ProductIdContext.Provider>
  );
};

export default ProductIdContext;
