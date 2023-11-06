import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../Provider/AuthProvider'
import axios from 'axios';

const MyAddedFood = () => {
    const [myFood,setMyFood] = useState([]);
   console.log(myFood)
    const {user} = useContext(AuthContext);


 useEffect(()=>{
    axios.get(`http://localhost:5000/userAddedProducts?email=${user?.email}`)
    .then(res=>{
        if(res.data){
            setMyFood(res.data);
        }
        
    })
 },[])




  return (
    <div className='mt-16'>
           {myFood.length}
    </div>
  )
}

export default MyAddedFood