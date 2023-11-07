import React, { useContext, useState } from 'react'
import { AuthContext } from '../../Provider/AuthProvider';
import toast from 'react-hot-toast';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';



const FoodPurchaseCard = ({ orderFood }) => {
    const navigate = useNavigate();


    const { user } = useContext(AuthContext);
    console.log(user)
    const userEmail = user?.email;
    console.log(userEmail)

    const { _id, FoodName, image, category, order, price, origin, description, quantity, email } = orderFood;
    const handleConfirmOrder = (e) => {

        e.preventDefault();

        const form = e.target;
        const foodName = form.name.value;
        const email = form.email.value;
        const quantity = form.quantity.value
        const price = form.price.value;
        const date = form.date.value;



        if (quantity == 0) {
            return toast.error("This food is not available.");
        }else if(quantity >= 20){
            return toast.error("You can't buy this avilable food is finished!")
        }else if(userEmail == email){
           return toast.error("You can't buy your own added food")
        }

        const orderData = {foodName,userEmail,image,price,date}

     
        axios.post("http://localhost:5000/confirmOrder",orderData)
        .then(res => {
            console.log(res);
            if(res.data.insertedId ){
                toast.success("Order Confirmed Successful!");
                navigate("/allFood")
            }
        })
        .catch((err)=>{
            console.log("order error", err);
        })







    }











    return (
        <div>
            <div className='mt-16'>
                <h2 className='text-center text-3xl my-5 font-semibold'>Food Purchase Page</h2>
                <div className='container mx-auto'>
                    <form onSubmit={handleConfirmOrder} className='md:w-[50%] w-full mx-auto '>
                        <div className="mb-6">
                            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Food Name</label>
                            <input type="text"
                                defaultValue={FoodName} name='name' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Food Name" required />
                        </div>


                        <div className="mb-6">
                            <label for="quantity" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Quantity</label>
                            <input type="number"
                                defaultValue={quantity} name='quantity' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Quantity" required />
                        </div>

                        <div className="mb-6">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                            <input type="number"
                                defaultValue={price} name='price' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Price" required />
                        </div>
                        <div className="mb-6">
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                            <input type="email"
                                disabled defaultValue={email} name='email' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Origin" required />
                        </div>
                        <div className="mb-6">

                            <label for="date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date</label>
                            <input type="date"
                                name='date' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Origin" required />
                        </div>

                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Confirm purchase</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default FoodPurchaseCard