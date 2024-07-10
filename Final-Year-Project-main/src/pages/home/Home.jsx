import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import HeroSection from '../../components/heroSection/HeroSection'
import ProductCard from '../../components/productCard/ProductCard'
import Testimonial from '../../components/testimonial/Testimonial'
import { Link } from 'react-router-dom'

import { useSelector } from 'react-redux';
import BestDeals from '../admin/page/BestDeals'
import GrapesPrices from '../admin/page/GrapesPrices'

function Home() {
  return (
    <Layout>
      {/* <HeroSection /> */}
     <GrapesPrices></GrapesPrices>
      <ProductCard /> 
      <div className="flex justify-center -mt-10 mb-4">
       
      </div>
     
      <BestDeals></BestDeals>
     
     
    </Layout>
  )
}

export default Home