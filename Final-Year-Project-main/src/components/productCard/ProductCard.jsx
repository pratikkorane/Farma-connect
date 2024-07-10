import React, { useContext, useEffect } from 'react'
import myContext from '../../context/data/myContext'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../redux/cartSlice'
import { toast } from 'react-toastify'

function ProductCard(product) {

    console.log("product", product)
   
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-8 md:py-16 mx-auto">
                <div class="lg:w-1/2 w-full mb-6 lg:mb-10">
                    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900" >Our Best Deals</h1>
                    <div class="h-1 w-20 bg-pink-600 rounded"></div>
                </div>

                <div className="flex flex-wrap -m-4">
                    {product.length && product.map((item, index) => {
                        const { title, price, description, imageUrl,id } = item;
                        return (
                            <div    key={index} className="p-4 md:w-1/4  drop-shadow-lg " >
                                <div  className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out    border-gray-200 border-opacity-60 rounded-2xl overflow-hidden" >
                                    <div onClick={()=> window.location.href = `/productinfo/${id}`} className="flex justify-center cursor-pointer" >
                                        <img className=" rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110  duration-300 ease-in-out" src={imageUrl} alt="blog" />
                                    </div>
                                    <div className="p-5 border-t-2">
                                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Farmaconnect</h2>
                                        <p className="leading-relaxed mb-3">Variety</p>
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3" >{title}</h1>
                                     
                                        
                                        <p className="leading-relaxed mb-3">₹{price} /box</p>
                                       
                                    </div>

                                </div>
                            </div>
                        )
                    })}




                </div>

            </div>
        </section >

    )
}

export default ProductCard