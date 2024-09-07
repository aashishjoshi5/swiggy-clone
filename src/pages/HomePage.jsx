import React from 'react'
import Category from '../components/Category'
import TopRestaurant from '../components/TopRestaurant'
import OnlineDelievery from '../components/OnlineDelievery'
import Download from '../components/Download'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <>
    <Category />
    <TopRestaurant />
    <OnlineDelievery/>
    <Download />
    <Footer />
    </>
  )
}

export default HomePage
