import axios from 'axios'
import React, { useEffect, useState } from 'react'
import SingleTopFood from './SingleTopFood';
import { Link } from 'react-router-dom';

const TopFood = () => {

    const [products, setProducts] = useState([]);


    const handleAllBtn = () => {

    }



    useEffect(() => {
        axios.get("http://localhost:5000/api/sortProducts")
            .then(res => {
                if (res) {
                    setProducts(res.data)

                }
            })
    }, [])




    return (
        <div className='mt-24'>
            <div className='container px-4  mx-auto '>
                <h2 className='font-semibold text-3xl'>Top ordered food </h2>
                <div className='mt-8'>

                    <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
                        {
                            products.slice(0,6)?.map(product => <SingleTopFood key={product._id} product={product}></SingleTopFood>)
                        }

                    </div>

                    <Link to="/allFood"><button  onClick={handleAllBtn} className='text-white py-2 px-10 mt-5 bg-orange-400 text-center'>See All</button></Link>

                </div>
            </div>
        </div>
    )
}

export default TopFood