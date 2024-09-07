import React from 'react'
import {Link } from 'react-router-dom'

const Cart = () => {
  return (
    <div className=" w-full h-[100vh] flex flex-col  items-center justify-center border-red-600">
        <div className='' >
        <img className="w-[250px]" src="https://i.pinimg.com/originals/81/c4/fc/81c4fc9a4c06cf57abf23606689f7426.jpg" alt="empty-cart" />

        </div>
        <div className="mt-1 text-xl font-bold text-[#535665] ">
        <h1>Your Cart is empty</h1></div>
        <div className="mt-1" > <p>You can go to home page to view more restaurant</p></div>
       <div className=" mt-5 bg-[#ff5200] text-white p-1 mx-auto font-semibold py-[11px] px-[20px] hover:shadow-lg">
       <Link to="/">SEE RESTAURENTS NEAR YOU</Link></div>
       </div>
  )
}

export default Cart
