import React, { useEffect, useState } from 'react'
import axios from "axios"
import AllSingleFood from './AllSingleFood/AllSingleFood';
const AllFood = () => {

  const [allProducts, setAllProducts] = useState([]);
  const [filterProduct,setFilterProduct] = useState([])
  console.log(filterProduct)
  useEffect(() => {
    axios.get("http://localhost:5000/api/sortProducts")
        .then(res => {
       
            if (res) {
                setAllProducts(res?.data)
                setFilterProduct(res?.data)

              }
        })
}, [])


const handleSearch = (value) => {
      const result = filterProduct?.filter(pro => pro.FoodName.toLowerCase().includes(value));
      setAllProducts(result);
}


  return (
    <div className='mt-16 container mx-auto '>
      
      <h2> AllFood</h2>

      <div className='flex items-center gap mt-5 mx-auto md:w-[60%]'>
        <p className='font-semibold text-2xl mr-10'>Search </p>
        <input onChange={(e)=> handleSearch(e.target.value)} className='outline-none w-full border-none focus:border-orange-400' type="text" placeholder='Search by food name' />
  
      </div>

      <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-5'>

      {
        allProducts && allProducts?.map(allproduct => <AllSingleFood allproduct={allproduct} key={allproduct.key}></AllSingleFood> )
      }
    
      </div>
      
    
    </div>
  )
}

export default AllFood