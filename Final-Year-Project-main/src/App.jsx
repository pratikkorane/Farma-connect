import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import User from './pages/user/User';
import Home from './pages/home/Home';


import Dashboard from './pages/admin/dashboard/Dashboard';
import NoPage from './pages/nopage/NoPage';
import MyState from './context/data/myState';
import Login from './pages/registration/Login';
import Signup from './pages/registration/Signup';
import ProductInfo from './pages/productInfo/ProductInfo';
import AddProduct from './pages/admin/page/AddProduct';
import UpdateProduct from './pages/admin/page/UpdateProduct';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Allproducts from './pages/allproducts/Allproducts';
import { ProductIdProvider } from './context/ProductIdContext';


import AddressInfoInput from './components/marketer/AddressInfoInput';
import UserMarkAddress from './pages/user/UserMarkAddress';
import VisitPlacesData from './pages/admin/page/VisitPlacesData';
import AboutUsCard from './pages/home/AboutUsCard';
import ContactUs from './pages/home/Contactus';
import GetContacts from './pages/home/GetContacts';
function App() {
  const appStyle = {
   backgroundColor: '#EBE9E1',
    minHeight: '100vh', // Ensures the background covers the entire viewport height
    // Add any other styles you want for your app
  };
  return (
    <div style= {appStyle}>

    <MyState>
       <Router>
      <ProductIdProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/allproducts" element={<Allproducts />} />
          <Route path="/visitplaces" element={<VisitPlacesData/>} />
          <Route path="/about" element={<AboutUsCard/>} />
          <Route path="/contact" element={<ContactUs/>} />
          <Route path="/contactus" element={<GetContacts/>} />
   
        
          

       <Route path='/addressinfo/:id' element={<AddressInfoInput />} />
       <Route path='/useradress/:id' element={<UserMarkAddress />} />
       
          <Route path="/dashboard" element={
            <ProtectedRouteForAdmin>
              <Dashboard />
            </ProtectedRouteForAdmin>
          } />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/productinfo/:id' element={<ProductInfo/>} />
          <Route path='/addproduct' element={
            <ProtectedRouteForAdmin>
              <AddProduct/>
            </ProtectedRouteForAdmin>
          } />
          <Route path='/updateproduct' element={
            <ProtectedRouteForAdmin>
              <UpdateProduct/>
            </ProtectedRouteForAdmin>
          } />
          <Route path="/*" element={<NoPage />} />
        </Routes>
        <ToastContainer/>
        
      </ProductIdProvider>
    </Router>
    </MyState>
    </div>

  )
}

export default App 

// user 

export const ProtectedRoute = ({children}) => {
  const user = localStorage.getItem('user')
  if(user){
    return children
  }else{
    return <Navigate to={'/login'}/>
  }
}

// admin 

const ProtectedRouteForAdmin = ({children})=> {
  const admin = JSON.parse(localStorage.getItem('user'))
  
  if(admin.user.email === 'maliprathamesh3162@gmail.com'||"test123@gmail.com"){
    return children
  }
  else{
    return <Navigate to={'/login'}/>
  }

}