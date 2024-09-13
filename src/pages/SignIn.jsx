import React from 'react'
import { Link } from 'react-router-dom'

const SignIn = () => {
  return (
    <div className="flex flex-col items-center justify-evenly  w-[400px] h-[400px] mx-auto my-8">
       <div className="text-center "><h1 className="text-4xl font-medium">Login</h1>
       <p className="text-orange-500 font-medium py-2"><span className="text-gray-700">or</span> Create an account</p></div>
       <div className="flex flex-col "><input className="py-4 px-6 border-2   " type="username" placeholder="username" name="Username" id="" />
       <button className="px-6 py-4 bg-orange-600 text-white font-bold my-5  hover:shadow-xl"><Link to="/" >LOGIN</Link></button>
       <p className="text-xs ">By clicking on Login, I accept the Terms & Conditions & Privacy Policy</p></div>
    </div>
  )
}

export default SignIn
