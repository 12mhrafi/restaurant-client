import React from 'react'

import { Outlet } from 'react-router-dom'
import Footer from '../Component/Footer/Footer'
import Head from '../Component/Header/Head';
import { Toaster } from 'react-hot-toast';


const Root = () => {
  return (
    <div>
      <Head></Head>
      <Outlet></Outlet>
      <Footer></Footer>
      <Toaster

        position="top-right"
        reverseOrder={false}

      />
    </div>
  )
}

export default Root