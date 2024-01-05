import React from 'react'

import Main from './Main'
import Footer from './navigation/Footer'
import { Outlet } from 'react-router-dom'
const Home = () => {
  return (
    <section className="overflow-hidden flex items-center justify-center relative ">
      <Main />
      <Outlet />
      <Footer />
    </section>
  )
}

export default Home
