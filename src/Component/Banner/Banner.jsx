import React from 'react'
import banner from "../../../src/assets/img/banner.avif"
import { Link } from 'react-router-dom'
import { Button } from 'flowbite-react'
const Banner = () => {
  return (
    <div className='relative top-0 w-full h-[100vh]'>
     <img className="h-full w-full object-cover" src={banner} alt="" />
     <div className="absolute gap-4 text-white  inset-0 flex justify-center items-center flex-col bg-gradient-to-r from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)]">
        <h1 className="text-4xl font-semibold">Welcome to Our Restaurant</h1>
        <p className="">Experience a world of culinary delights.</p>
        <Link href="/" class="cta-button"><Button color="gray" >Explore Menus</Button></Link>
    </div>
    </div>
  )
}

export default Banner