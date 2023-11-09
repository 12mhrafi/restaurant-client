import React from 'react'
import Banner from '../../Component/Banner/Banner'
import TopFood from './topFood/TopFood'
import Starter from './Starter/Starter'
import BookTable from './BookTable/BookTable'

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <TopFood></TopFood>
      <Starter></Starter>
      <BookTable></BookTable>
    </div>
  )
}

export default Home;

