import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const MyAddedFoodCard = ({ myFood }) => {

    const { _id, image, FoodName, price, category, email,quantity } = myFood;
    const location = useLocation();
    console.log(location)

    return (
        <>
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <img className='w-[50px] h-[50px] object-cover' src={image && image} alt="" />
                </th>
                <td className="px-6 py-4">
                    {FoodName}
                </td>
                <td className="px-6 py-4">
                    <span>${price}</span>
                </td>
                <td className="px-6 py-4">
                    {category}
                </td>
                <td className="px-6 py-4">
                    {quantity}
                </td>
                <td className="px-6 py-4">
                    {email}
                </td>
                <td className="px-6 py-4">
                    <Link state={location.pathname} to={`/updateFood/${_id}`}> <button className='text-white bg-green-400 px-3 py-1 rounded-md hover:shadow-md hover:opacity-40 transition-all'>Edit</button></Link>
                </td>
            </tr>
        </>

    )
}

export default MyAddedFoodCard