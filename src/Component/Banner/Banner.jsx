import React from 'react'
import banner from "../../../src/assets/img/banner.avif"
import { Carousel } from 'flowbite-react';
import { Link } from 'react-router-dom';
const Banner = () => {
  return (
    <div>
      <div className="h-[100vh]">
        <Carousel onSlideChange={(index) => console.log('onSlideChange()', index)}>
          <div className="flex h-[100vh] items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
            <div className='relative top-0 w-full h-[100vh] text-center'>
              <img className="h-full w-full object-cover" src={banner} alt="" />
              <div>
                <div className="absolute gap-4   text-white  inset-0 flex justify-center items-center flex-col bg-gradient-to-r from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)]">
                  <h3>Highlights</h3>
                  <h1 className="md:text-7xl text-4xl font-semibold ">Where every <br /> ingredient tells <br /> </h1>
                  <p className="md:w-[50%] mt-6">Experience a world of culinary delights. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quia deserunt incidunt repellendus nesciunt dignissimos.</p>
                  <Link href="/"><button className="px-4 py-3 rounded-md mt-6 bg-orange-400 text-white" >Explore Menus</button></Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
            <div className='relative top-0 w-full h-[100vh] text-center'>
              <img className="h-full w-full object-cover" src={banner} alt="" />
              <div>
                <div className="absolute gap-4   text-white  inset-0 flex justify-center items-center flex-col bg-gradient-to-r from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)]">
                  <h3>Highlights</h3>
                  <h1 className="md:text-7xl text-4xl font-semibold ">Tradition Food</h1>
                  <p className="md:w-[50%] mt-6">Experience a world of culinary delights. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quia deserunt incidunt repellendus nesciunt dignissimos.</p>
                  <Link href="/"><button className="px-4 py-3 rounded-md mt-6 bg-orange-400 text-white" >Explore Menus</button></Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
            <div className='relative top-0 w-full h-[100vh] text-center'>
              <img className="h-full w-full object-cover" src={banner} alt="" />
              <div>
                <div className="absolute gap-4   text-white  inset-0 flex justify-center items-center flex-col bg-gradient-to-r from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)]">
                  <h3>Highlights</h3>
                  <h1 className="md:text-7xl text-4xl font-semibold ">Fresh Restaurant</h1>
                  <p className="md:w-[50%] mt-6">Experience a world of culinary delights. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quia deserunt incidunt repellendus nesciunt dignissimos.</p>
                  <Link href="/"><button className="px-4 py-3 rounded-md mt-6 bg-orange-400 text-white" >Explore Menus</button></Link>
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  )
}

export default Banner