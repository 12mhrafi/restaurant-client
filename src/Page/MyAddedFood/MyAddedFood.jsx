import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../Provider/AuthProvider'
import axios from 'axios';
import MyAddedFoodCard from './MyAddedFoodCard';

const MyAddedFood = () => {
    const [myFoods,setMyFoods] = useState([]);
  //  console.log(myFood)
    const {user} = useContext(AuthContext);


 useEffect(()=>{
    axios.get(`https://restaurant-server-rho.vercel.app/userAddedProducts?email=${user?.email}`)
    .then(res=>{
        if(res.data){
            setMyFoods(res?.data);
        }
    })
 },[])




  return (
    <div className='mt-16'>
      <div className='container px-4  mx-auto '>
        <h2 className='text-4xl font-semibold py-8'>My Added Food </h2>
        <div>
          <div className="relative overflow-x-auto sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Image
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Food Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Quantity
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Owner
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {
                 user?.email ? 
                 myFoods.map(myFood => <MyAddedFoodCard key={myFood._id} myFood={myFood}></MyAddedFoodCard>)
                 :
                 <div className='text-4xl text-red-600'>
                  Not data fount
                 </div>
                }
                 
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyAddedFood