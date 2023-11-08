import React from 'react'
import Banner from '../../Component/Banner/Banner'
import TopFood from './topFood/TopFood'
import Starter from './Starter/Starter'
import BookTable from './BookTable/BookTable'
import Menus from './Menus/Menus'

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Menus></Menus>
      <TopFood></TopFood>
      <Starter></Starter>
      <BookTable></BookTable>
    </div>
  )
}

export default Home;

