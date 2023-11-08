import React from 'react'
import { useLoaderData } from 'react-router-dom'
import SingleCard from './SingleCard';

const SingleFoodDetails = () => {


    const singleFoodInfo = useLoaderData();



    return (
        <div className='mt-16'>
            <div className='container px-4  mx-auto'>
                <div>
                    {
                        singleFoodInfo?.map(singleFood => <SingleCard singleFood={singleFood} key={singleFood._id}></SingleCard>)
                    }
                </div>
            </div>
        </div>
    )
}

export default SingleFoodDetails