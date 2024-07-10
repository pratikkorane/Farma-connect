import React, { Fragment, useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import myContext from '../../context/data/myContext';
import { BsFillCloudSunFill } from 'react-icons/bs';
import { FiSun } from 'react-icons/fi';
import { Dialog, Transition } from '@headlessui/react';
import { RxCross2 } from 'react-icons/rx';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-regular-svg-icons';

function Navbar() {
  const context = useContext(myContext);


  const [open, setOpen] = useState(false);

  const user = JSON.parse(localStorage.getItem('user'));

  const logout = () => {
    localStorage.clear('user');
    localStorage.clear('userData');
    window.location.href = '/login';
  };

 

  return (
    <div className="bg-white sticky top-0 z-50">
      <header className="relative bg-white">
        <nav aria-label="Top" className="bg-gray-100 px-4 mx-2 sm:px-6 lg:px-8 shadow-lg rounded-md">
          <div className="">
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>

              <div className="hidden lg:ml-8 lg:flex">
                <a href="#" className="flex items-center text-gray-700 ">
                  <img
                    className="inline-block w-10 h-10 rounded-full"
                    src="https://thumbs.dreamstime.com/b/grapes-cartoon-style-stiker-white-background-isolated-transparent-png-logo-generative-ai-277310914.jpg"
                    alt="Dan_Abromov"
                  />
                </a>
              </div>
              <div className="ml-4 flex lg:ml-0">
                <NavLink to={'/'} className='flex'>
                  <div className="flex">
                    <h1 className='text-2xl font-bold text-black px-2 py-1 rounded'>Farma-Connect</h1>
                  </div>
                </NavLink>
              </div>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <NavLink
                    to={'/'}
                    exact
                    activeClassName="text-navy font-bold"
                    className="font-medium text-gray-900"
                  >
                    Home
                  </NavLink>
                   {(user?.user?.email !== 'prathamesh11@gmail.com' && user?.user?.email !== 'rohan21@gmail.com' && user?.user?.email !== 'kiran21@gmail.com'&& user?.user?.email !== 'maliprathamesh3162@gmail.com') ? (
                    <NavLink to={'/addproduct'} className="text-md block font-medium text-gray-900">
                      Add Product
                    </NavLink>
                  ) : (
                    ""
                  )}
                  {(user?.user?.email !== 'prathamesh11@gmail.com' && user?.user?.email !== 'rohan21@gmail.com' && user?.user?.email !== 'kiran21@gmail.com'&& user?.user?.email !== 'maliprathamesh3162@gmail.com') ? (
                    <NavLink to={'/user'} className="text-md block font-medium text-gray-900">
                      user
                    </NavLink>
                  ) : (
                    ""
                  )}



                  {(user?.user?.email === 'prathamesh11@gmail.com' || user?.user?.email === 'rohan21@gmail.com' || user?.user?.email === 'kiran21@gmail.com'&& user?.user?.email !== 'maliprathamesh3162@gmail.com') ? (
                    <NavLink to={'/allproducts'} className="text-sm font-medium text-gray-700">
                      Products
                    </NavLink>
                  ) : (
                    ""
                  )}
             
                  {(user?.user?.email === 'maliprathamesh3162@gmail.com' || user?.user?.email === 'test123@gmail.com') ? (
                    <NavLink to={'/dashboard'} className="text-sm font-medium text-gray-700">
                      Admin
                    </NavLink>
                  ) : (
                    ""
                  )}
                  {user ? (
                    <a onClick={logout} className="text-sm font-medium text-gray-700 cursor-pointer">
                      Logout
                    </a>
                  ) : (
                    ""
                  )}
                </div>

                <div className="hidden lg:ml-8 lg:flex">
                  <a href="#" className="flex items-center text-gray-700">
                    <img
                      src="https://ecommerce-sk.vercel.app/img/indiaflag.png"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-sm font-medium">INDIA</span>
                  </a>
                </div>

                <div className="flex lg:ml-6">
             
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
