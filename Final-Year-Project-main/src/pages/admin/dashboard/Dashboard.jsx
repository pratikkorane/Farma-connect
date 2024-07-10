import React, { useContext } from 'react'
import {FaUserTie } from 'react-icons/fa';
import myContext from '../../../context/data/myContext';
import Layout from '../../../components/layout/Layout';
import DashboardTab from './DashboardTab';

function Dashboard() {
    const context = useContext(myContext)
    const { mode} = context
  return (
    <Layout>
        <section className="text-gray-600 body-font mt-10 mb-10 ">
           
            <DashboardTab/>
        </section>
    </Layout>
  )
}

export default Dashboard