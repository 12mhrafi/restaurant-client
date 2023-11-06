import React from 'react'
import { useRouteError,Link } from 'react-router-dom'
import ErrorGif from "../../src/assets/img/error.gif"
import {FaArrowLeft} from "react-icons/fa6"
const Error = () => {
  const error = useRouteError();

  return (
   <div className='flex flex-col items-center justify-center mt-16'>
    <Link className='flex items-center justify-center mb-10' to="/" ><button className='flex px-4 py-3 bg-orange-400 gap-2 rounded-md hover:shadow-lg text-white items-center' > <FaArrowLeft></FaArrowLeft> Back to home</button></Link>
     <div className='text-5xl  flex-col font-extrabold text-center flex justify-center items-center w-full h-full'>
      <img src={ErrorGif} alt="" />
      <p className='text-red-500'>
        <i>{error.statusText || error.message} 404</i>
      </p>
      
    </div>
    
   </div>
  )
}

export default Error