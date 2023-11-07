import React from 'react'
import { useLoaderData } from 'react-router-dom';
import UpdatePageCard from './UpdatePageCard';
import axios from 'axios';

const UpdatePage = () => {

    const updateSingleData = useLoaderData();




    console.log(updateSingleData)



  


    return (
        <div className='mt-16'>
            <h2 className='text-center'>Update Food Item</h2>
            <div className='container mx-auto'>
                {
                    updateSingleData?.map(singleData => <UpdatePageCard
                        key={singleData._id}
                        singleData={singleData}
                        
                    ></UpdatePageCard>)
                }
            </div>
        </div>
    )
}

export default UpdatePage