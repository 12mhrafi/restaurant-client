import React from 'react'
import book from "../../../assets/img/book.jpg"
const BookTable = () => {
  return (
    <div className='mt-24'>
      <div className=' mx-auto'>
        <div className='relative'>
          <img className='w-full h-[700px] object-cover' src={book} alt="" />
          <div className=' mx-auto text-center absolute justify-center items-center  bg-gradient-to-l from-[rgba(0,0,0,0.3)] to-[rgba(0,0,0,0.3)] top-0 right-0 left-0 bottom-0 w-full h-full flex flex-col '>
            <div className='md:w-[50%] text-white'>
              <h4 className='font-semibold text-orange-400'>Tasty and Crunchy</h4>
              <h2 className='text-4xl font-bold mt-4'>Book A Table</h2>
              <p className='mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedolorm reminusto doeiusmod tempor incidition ulla mco laboris nisi ut aliquip ex ea commo condorico consectetur adipiscing elitut aliquip.</p>
              <div>
                <button className='px-4 py-2 mt-6 bg-orange-400 text-white'>Book Now </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookTable;
