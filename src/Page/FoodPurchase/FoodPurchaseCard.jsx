import React, { useContext, useState } from 'react'
import { AuthContext } from '../../Provider/AuthProvider';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const FoodPurchaseCard = ({ orderFood }) => {
    const [currentDate, setCurrentDate] = useState(getDate());
    const navigate = useNavigate();

    const { user } = useContext(AuthContext);
    // console.log(user)
    const userEmail = user?.email;
    // console.log(userEmail)

    const { _id, FoodName, image, category, order, price, origin, description, quantity, email } = orderFood;
    // 
    let beforeOrder = order;


    // date when purchase
    function getDate() {
        const date = new Date();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        const day = date.getDate();
        return `${day}/${month}/${year}`;
    }


    const handleConfirmOrder = (e) => {

        e.preventDefault();

        const form = e.target;
        const foodName = form.name.value;
        const email = form.email.value;
        const quantity = form.quantity.value
        const price = form.price.value;
        const date = form.date.value;



        if (quantity == 0) {
            return toast.error("No food");
        } else if (quantity == beforeOrder) {
            return toast.error("You can't buy this avilable food is finished!")
        } else if (userEmail == email) {
            return toast.error("You can't buy your own added food")
        }


        // will be count when order is confirmed 
        let incOrder = Number(order + 1)

        const orderData = { foodName, userEmail, image, price, date }

        axios.post("https://restaurant-server-rho.vercel.app/confirmOrder", orderData)
            .then(res => {
                console.log(res);
                if (res.data.insertedId) {
                    toast.success("Order Confirmed Successful!");
                    navigate("/allFood")
                }
            })
            .catch((err) => {
                console.log("order error", err);
            })

        axios.patch(`https://restaurant-server-rho.vercel.app/api/sortProducts/${_id}`, { incOrder })
            .then(res => {
                console.log(res)
            })

    }











    return (
        <div>
            <div className='mt-16'>
                <h2 className='text-center text-3xl my-5 font-semibold'>Food Purchase Page</h2>
                <div className='container px-4  mx-auto'>
                    <form onSubmit={handleConfirmOrder} className='md:w-[50%] w-full mx-auto '>
                        <div className="mb-6">
                            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Food Name</label>
                            <input type="text"
                                disabled defaultValue={FoodName} name='name' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Food Name" required />
                        </div>


                        <div className="mb-6">
                            <label for="quantity" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Quantity</label>
                            <input type="number"
                                disabled defaultValue={quantity} name='quantity' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Quantity" required />
                        </div>

                        <div className="mb-6">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                            <input type="number"
                                disabled defaultValue={price} name='price' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Price" required />
                        </div>
                        <div className="mb-6">
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                            <input type="email"
                                disabled defaultValue={email} name='email' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Email" required />
                        </div>
                        <div className="mb-6">

                            <label for="date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date</label>
                            <input type="text"
                               disabled name='date' defaultValue={currentDate} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="date" required />
                        </div>

                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Confirm purchase</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default FoodPurchaseCard