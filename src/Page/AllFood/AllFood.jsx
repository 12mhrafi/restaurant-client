import React, { useEffect, useState } from 'react'
import axios from "axios"
import AllSingleFood from './AllSingleFood/AllSingleFood';
import { useLoaderData } from 'react-router-dom';
import { FiSearch } from "react-icons/Fi"

const AllFood = () => {

  const [allProducts, setAllProducts] = useState([]);
  const [filterProduct, setFilterProduct] = useState([])
  const [itemsPerPage, setItmesPerPage] = useState(9)
  const [currentPage, setCurrentPage] = useState(0)
  const { count } = useLoaderData();


  const numberOfPages = Math.ceil(count / itemsPerPage)


  const pages = [...Array(numberOfPages).keys()];

  // console.log(pages);




  // console.log(filterProduct)
  useEffect(() => {
    axios.get(`https://server-eight-roan.vercel.app/api/sortProducts?page=${currentPage}&size=${itemsPerPage}`)
      .then(res => {
        if (res) {
          setAllProducts(res?.data)
          setFilterProduct(res?.data)
        }
      })
  }, [currentPage, itemsPerPage])

  // search food 
  const handleSearch = (value) => {
    const result = filterProduct?.filter(pro => pro.FoodName.toLowerCase().includes(value));
    setAllProducts(result);
  }

  const handleItemPerPage = (e) => {
    // console.log(e.target.value)
    const value = parseInt(e.target.value);
    setItmesPerPage(value);
    setCurrentPage(0);
  }

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  }


  const handleNext = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  }


  return (
    <div className='mt-16 container px-4  mx-auto '>

      <div className='flex items-center gap mt-5 mx-auto md:w-[60%]'>

        <div className='relative w-full '>
          <input onChange={(e) => handleSearch(e.target.value)} className='outline-none px-16 py-4  w-full border-none shadow-lg rounded-2xl focus:border-orange-400' type="text" placeholder='Search by food name' />
          <FiSearch className='absolute top-[20px] left-6 ' />
        </div>

      </div>
      <div className='flex items-center flex-col mx-auto mt-10 md:w-[50%] justify-center'>
        <h2 className='text-4xl font-semibold'> All Foods</h2>
        <p className='mt-5 text-center'>Restaurant food is a delectable fusion of culinary art and exceptional ingredients, meticulously crafted to delight the senses. Our menu offers a diverse range of dishes, from appetizers to entrees and desserts, each prepared with passion and precision. Whether you're savoring the rich, </p>
      </div>
      <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-5'>

        {
          allProducts &&
          allProducts?.map(allproduct => <AllSingleFood allproduct={allproduct} key={allproduct._id}></AllSingleFood>)
        }

      </div>

      <div className="flex items-center justify-center mt-10">

        <button onClick={handlePrevious} className='px-6  bg-orange-400 text-white py-4  text-lg rounded-lg mr-2'>Previous</button>
        {
          pages.map(pageNum =>
            <div >
              <button
                onClick={() => setCurrentPage(pageNum)}
                key={pageNum}
                className={currentPage === pageNum ?
                  "px-6  bg-orange-400 text-white py-4  text-lg rounded-lg mr-2" :
                  "px-6  bg-white text-black py-4  text-lg rounded-lg mr-2"}>{pageNum + 1}
              </button>
            </div>
          )
        }
        <button onClick={handleNext} className='px-6  bg-orange-400 text-white py-4  text-lg rounded-lg mr-2'>Next</button>

        <select className='px-6  bg-orange-400 text-white py-4  text-lg rounded-lg' value={itemsPerPage} onChange={handleItemPerPage} name="" id="">

          <option className=' border-none outline-none ' value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </div>

    </div>
  )
}

export default AllFood