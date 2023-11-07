import React from 'react'



const MyOrderCard = ({ orderData, handleDeleteOrder }) => {
    // console.log(orderData);
    const { _id, image, foodName, price, date, userEmail,order } = orderData;
    
    return (
        <>
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <img className='w-[50px] h-[50px] object-cover' src={image && image} alt="" />
                </th>
                <td className="px-6 py-4">
                    {foodName && foodName}
                </td>
                <td className="px-6 py-4">
                    {price && price}
                </td>
                <td className="px-6 py-4">
                    {date && date}
                </td>
                <td className="px-6 py-4">
                    {userEmail && userEmail}
                </td>
                <td className="px-6 py-4">
                    <button onClick={() => handleDeleteOrder(_id)} className='text-white bg-red-500 px-3 py-1 rounded-md hover:shadow-md hover:opacity-40 transition-all'>Delete</button>
                </td>
            </tr>
        </>
    )
}

export default MyOrderCard