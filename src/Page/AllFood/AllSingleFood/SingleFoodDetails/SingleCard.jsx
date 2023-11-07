import React from 'react'
import { FaStar } from 'react-icons/fa6';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const SingleCard = ({ singleFood }) => {
    const { _id, FoodName, image, category, order, price, origin, description, quantity, email } = singleFood;
   
    return (
        <div>
            <div className='grid md:grid-cols-2 gap-8'>
                <div className='h-full w-full '>
                    <img className='h-full w-full object-cover' src={image} alt="" />
                </div>
                <div>
                    <h2 className='font-semibold text-2xl'><span>{FoodName}</span></h2>
                    <div className='flex flex-col gap-y-2 my-4'>

                        <div className='flex items-center gap-5'>
                            <p><span className='text-orange-600 font-bold text-3xl'>${price}</span></p>
                            <div className='flex gap-1 text-orange-600'>
                                <FaStar></FaStar>
                                <FaStar></FaStar>
                                <FaStar></FaStar>
                                <FaStar></FaStar>
                                <FaStar></FaStar>
                            </div>
                        </div>
                        <p className='mt-5'><span>{description}</span></p>
                        <hr />
                        <div className='mt-5 flex flex-col gap-2'>
                            <p>Category: <span className='text-gray-500'>{category}</span></p>

                            <p>Added By: <span className='text-gray-500'>{email}</span></p>
                            <p>Food Origin: <span className='text-gray-500'>{origin}</span></p>

                        </div>
                    </div>
                    <Link  to={`/foodPurchase/${_id}`}><button className='bg-orange-400 p-2 mt-3 text-white w-full'>Order Now</button></Link>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default SingleCard