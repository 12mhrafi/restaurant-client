import axios from 'axios';
import React from 'react'
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';

const UpdatePageCard = ({ singleData }) => {
    const { _id, image, FoodName, price, category, email, quantity, description } = singleData;
    const location = useLocation();
    console.log(location)
    const navigate = useNavigate();

    const handleFoodUpdate = (e) => {
         e.preventDefault();
         
         const form = e.target;
         const FoodName = form.name.value;
         const image = form.image.value;
         const price = form.price.value;
         const category = form.category.value;
         const quantity = form.quantity.value;
        const description = form.description.value;
        const updateFood = {FoodName,image,quantity,price,category,description}
        // console.log(updateFood)


        axios.put(`https://server-eight-roan.vercel.app/singleFoodDetails/${_id}`,updateFood)
        .then(res => {
            console.log(res);
            if(res.data.modifiedCount > 0 ){
                navigate(location?.state ? location?.state : "/")
                toast.success("Update successfully!")
            }
        })



    }

    return (
        <div>
            <form onSubmit={ handleFoodUpdate} className='md:w-[50%] w-full mx-auto '>
                <div className="mb-6">
                    <label for="name" classNameName="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Food Name</label>
                    <input type="text"
                        name='name' defaultValue={FoodName} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Food Name" required />
                </div>
                <div className="mb-6">
                    <label for="image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image</label>
                    <input type="text"
                        name='image' defaultValue={image} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="image" required />
                </div>
                <div className="mb-6">
                    <label for="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                    <input type="text"
                        name='category' defaultValue={category} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Category" required />
                </div>
                <div className="mb-6">
                    <label for="quantity" classNameName="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Quantity</label>
                    <input type="number"
                        name='quantity' defaultValue={quantity} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Quantity" required />
                </div>

                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                    <input type="number"
                        name='price' defaultValue={quantity} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Price" required />
                </div>

                <div className="mb-6">
                    <label for="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                    <textarea name='description' defaultValue={description} rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Description"></textarea>

                </div>

                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update Food</button>
            </form>
        </div>
    )
}

export default UpdatePageCard