import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../Provider/AuthProvider';
import MyOrderCard from './MyOrderCard';

const MyOrder = () => {
  const [totalOrder, setTotalOrder] = useState([]);

  const { user } = useContext(AuthContext);


  useEffect(() => {

    axios.get(`http://localhost:5000/allOrderData?email=${user?.email}`)
      .then(res => {
        if (res) {

          setTotalOrder(res?.data)
        }
      })
  }, [])

  const handleDeleteOrder = (id) => {


    axios.delete(`http://localhost:5000/allOrderData/${id}`)
      .then(res => {
        if (res.data.deletedCount > 0) {

          const remaining = totalOrder.filter(total => total._id !== id);
          setTotalOrder(remaining);
        }
        // console.log(res);
      })
      .catch(err => {
        console.log(err);
      })

  }
  return (
    <div className='mt-16'>
      <div className='container mx-auto '>
        <div>
          <div className="relative overflow-x-auto sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Image
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Food Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Owner
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {
                  !user ?

                    <div>
                      <h2 className='text-5xl text-orange-400 text-center' >No order Found</h2>
                    </div>
                    :
                    totalOrder?.map(orderData => <MyOrderCard
                      key={orderData._id}
                      orderData={orderData}
                      handleDeleteOrder={handleDeleteOrder}
                    ></MyOrderCard>)
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )

}
export default MyOrder 