import React, { useContext } from 'react'
import { AuthContext } from '../../Provider/AuthProvider'
import axios from "axios"
import toast from 'react-hot-toast'

const AddFood = () => {

    const {user} = useContext(AuthContext)
    

    const handleFoodAdd = (e) => {
        e.preventDefault();
       
        const form = e.target;
        const FoodName = form.name.value;
        const image  = form.image.value;
        const category = form.category.value;
        const quantity = form.quantity.value;
        const order = 0;
        const price = form.price.value;
        const origin = form.origin.value;
        const description = form.description.value;
        const email = user?.email

        const addItem = {FoodName,image,category,quantity,order,price,origin,description,email}

        axios.post("http://localhost:5000/products",addItem)
        .then(res =>{
            if(res){
                toast.success("Successfully Added!")
            }
        })
        
    }




    return (
        <div className='mt-16'>
            <h2 className='text-center'>Add Food Item</h2>
            <div className='container px-4  mx-auto'>
                <form onSubmit={handleFoodAdd} className='md:w-[50%] w-full mx-auto '>
                    <div className="mb-6">
                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Food Name</label>
                        <input type="text"
                            name='name' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Food Name" required />
                    </div>
                    <div className="mb-6">
                        <label for="image" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image</label>
                        <input type="text"
                            name='image' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="image" required />
                    </div>
                    <div className="mb-6">
                        <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                        <input type="text"
                            name='category' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Category" required />
                    </div>
                    <div className="mb-6">
                        <label for="quantity" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Quantity</label>
                        <input type="number"
                            name='quantity' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Quantity" required />
                    </div>
                    
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                        <input type="number"
                            name='price' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Price" required />
                    </div>
                    <div className="mb-6">
                        <label for="Origin" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Food Origin</label>
                        <input type="text"
                            name='origin' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Origin" required />
                    </div>
                    <div className="mb-6">

                        <label for="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                        <textarea name='description' rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Description"></textarea>

                    </div>

                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Food</button>
                </form>
            </div>
        </div>
    )
}

export default AddFood