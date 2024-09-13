import React from 'react'
import { FaChevronDown, FaQ } from "react-icons/fa6";
import Faq from '../components/Faq';

const Help = () => {
  return (
    <div className=" w-screen h-screen flex flex-col bg-[#37718e]  items-center  border-red-600">
      <div className="w-[1200px] h-auto pt-16 pl-10 pb-8">
        <div className="text-white font-bold text-3xl">Help & Support</div>
        <div className="text-white font-normal"><p>Let's take a step ahead and help you better.</p></div>
      </div>
      
      <div className=" flex justify-between  w-[1200px] h-full pt-16 bg-white">
          <div className="w-1/4 bg-[#edf1f7]">
          <ul className="pt-5">
            <li className="py-6 px-5 ml-8 font-medium text-gray-500 hover:bg-white hover:font-bold hover:text-black cursor-pointer ">Partner Onboarding</li>
            <li className="py-6 px-5 ml-8 font-medium text-gray-500 hover:bg-white hover:font-bold hover:text-black cursor-pointer">Legal</li>
            <li className="py-6 px-5 ml-8 font-medium text-gray-500 hover:bg-white hover:font-bold hover:text-black cursor-pointer">FAQs</li>
            <li className="py-6 px-5 ml-8 font-medium text-gray-500 hover:bg-white hover:font-bold hover:text-black cursor-pointer">Instamart Onboarding</li>

           </ul></div>
          <div className="w-3/4 pt-9 px-8">
            <div className="font-bold text-2xl">Partner Onboarding</div>
            <div className=" ">
               
                <Faq />
                
            </div>
          </div>
      </div>
    </div>
  )
}

export default Help
