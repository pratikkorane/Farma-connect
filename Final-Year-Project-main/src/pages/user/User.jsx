import React, { useContext, useEffect, useState } from 'react';

import Layout from '../../components/layout/Layout';
import myContext from '../../context/data/myContext';
import { useDispatch, useSelector } from 'react-redux';
import HeroSection from '../../components/heroSection/HeroSection';
import ProductCard from '../../components/productCard/ProductCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-regular-svg-icons';


import { Link } from 'react-router-dom';

import { Timestamp, addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, orderBy, query, setDoc, where } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { fireDB } from '../../fireabase/FirebaseConfig';

function User() {
  const [product, setProduct, updateProduct] = useState([]);
  const context = useContext(myContext);
  const { mode, addedProducts, getUserProducts, deleteProduct, edithandle } = context;

  useEffect(() => {
    setProduct(addedProducts);
  }, [addedProducts]);

  const DeleteProduct = async (e) => {
    e.preventDefault();
    const productId = e.currentTarget.dataset.productid;
    try {
      await deleteDoc(doc(fireDB, "products", productId));
      toast.success("Product deleted successfully!");
    } catch (error) {
      console.error("Error deleting product: ", error);
      toast.error("An error occurred while deleting the product.");
    }
  };

  return (
    <Layout>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-8 md:py-16 mx-auto ">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-10">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>Your Products</h1>
            <div className="h-1 w-20 bg-pink-600 rounded"></div>
          </div>

          <div className="flex flex-wrap -m-4">
            {product.map((item, index) => {
                const { title, price, description, imageUrl, productid } = item;
                return (
                  <div key={index} className="p-4 md:w-1/4 drop-shadow-lg ">
                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-lg  bg-gray-200">
                      <div className="flex justify-center cursor-pointer">
                        <img className="rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110 duration-300 ease-in-out" src={imageUrl} alt="blog" />
                      </div>
                   
                      <div className="p-5 border-t-2">
                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Farma-Connect</h2>
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{title}</h1>
                        <p className="leading-relaxed mb-3">₹{price}/box</p>
                        <div className="flex gap-2 cursor-pointer text-black">
                          <div onClick={() => window.location.href = `/useradress/${productid}`} >
                          <FontAwesomeIcon icon={faComment} />
                          </div>
                          <Link to={'/updateproduct'}>
                            <div onClick={() => edithandle(item)}  >
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                              </svg>
                            </div>
                          </Link>
                         
                            <div onClick={() => deleteProduct(item)}  >
                             
                         
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                            </svg>
                            </div>
                         
                          
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
          </div>
        </div>
      </section >
    </Layout>
  );
}

export default User;
