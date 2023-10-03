import React from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import Footer from '../components/Footer'

const page = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-[url('/devran-images/food1.jpeg')] bg-cover ">

      </div>
      <Card />
      <Footer />
    </div>
  )
}

export default page