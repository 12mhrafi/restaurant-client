import React from 'react'
import { FaStar } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const AllSingleFood = ({ allproduct }) => {

    const {_id, FoodName, image,order,quantity, category, price } = allproduct;


    return (
        <div>
            <div>
                <div className='bg-white'>
                    <div className='flex flex-col gap-4'>
                        <div className='relative h-[200px] w-full m-auto'>
                            <img className='h-full absolute  object-cover w-full ' src={image} alt="" />
                        </div>
                        <div className='flex p-4 flex-col gap-3'>
                            <h2 className='font-semibold text-lg text-dark'>{FoodName}</h2>
                            <div className='flex text-orange-600 items-center gap-2'>
                                <FaStar></FaStar>
                                <FaStar></FaStar>
                                <FaStar></FaStar>
                                <FaStar></FaStar>
                                <FaStar></FaStar>
                            </div>
                            <p className='font-semibold'>Category: <span>{category}</span></p>
                            <p className=' font-semibold'>Total Order: <span className='text-orange-600 font-semibold'>{order}</span></p>
                            <p className=' font-semibold'>Price: <span className='text-orange-600 font-semibold'>${price}</span></p>
                            <p className=' font-semibold'>Available: <span className='text-orange-600 font-semibold'>({quantity})</span></p>
                            <Link to={`/singleFoodDetails/${_id}`}><button className='bg-orange-400 p-2 text-white w-full'>Details</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllSingleFood