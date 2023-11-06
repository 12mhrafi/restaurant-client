import React from 'react'
import { useLoaderData } from 'react-router-dom'
import FoodPurchaseCard from './FoodPurchaseCard';

const FoodPurchase = () => {
    const orderData = useLoaderData();
   
    return (
        <div>
            {
                orderData && orderData?.map(orderFood => <FoodPurchaseCard key={orderFood._key} orderFood={orderFood}></FoodPurchaseCard>)
            }
        </div>
    )
}

export default FoodPurchase