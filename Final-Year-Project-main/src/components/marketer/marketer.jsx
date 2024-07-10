import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/data/myContext'
import HeroSection from '../../components/heroSection/HeroSection'
import Filter from '../../components/filter/Filter'
import ProductCard from '../../components/productCard/ProductCard'
import Track from '../../components/track/Track'
import Testimonial from '../../components/testimonial/Testimonial'
import { Link } from 'react-router-dom'


function Home() {

  const context = useContext(myContext)
    const { product} = context
  return (
    <Layout>
      <HeroSection />
     
      <ProductCard product={product}/>
      <div className="flex justify-center -mt-10 mb-4">
        <Link to={'/allproduct'}>
        
        </Link>
      </div>
     
     
      <Testimonial />
    </Layout>
  )
}

export default Home