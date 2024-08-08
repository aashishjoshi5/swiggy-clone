import React from 'react'
import { RxCaretUp } from "react-icons/rx";
function Footer() {
    return (
        <div className='bg-black h-full flex justify-center pb-0 w-full mb-0'>
        <div className='    text-white max-w-[1200px] md:grid grid-cols-4 h-full mx-auto mt-[50px]  gap-5  mb-8 '>
            <div className='mx-auto  '>
                <div className='flex  items-center mb-2'>
                    <span><img  className='w-[100px] p-1 filter brightness-0 invert' src="images/logo.png" alt="" />
                    </span>
                    <div className='font-bold text-white text-[24px]'> Swiggy</div>
                </div>
                <div className='text-[16px] font-semibold'>© 2024 Made with ❤️ by Aashish.</div>
            </div>
            <div className='mx-auto  mt-2 '>
                <ul>
                    <li><div className='font-bold text-[18px]'>Company</div></li>
                    <li className='mt-[16px] font-medium text-[#ffffff99]'>About</li>
                    <li className='mt-[16px] font-medium text-[#ffffff99]'>Careers</li>
                    <li className='mt-[16px] font-medium text-[#ffffff99]'>Teams</li>
                    <li className='mt-[16px] font-medium text-[#ffffff99]'>Swiggy One</li>
                    <li className='mt-[16px] font-medium text-[#ffffff99]'>Swiggy Instamart</li>
                    <li className='mt-[16px] font-medium text-[#ffffff99]'>Swiggy Genie</li>
                </ul>
            </div>
            <div className='mx-auto mt-2'>
            <ul>
                    <li><div className='font-bold text-[18px]'>Contact us</div></li>
                    <li className='mt-[16px] font-medium text-[#ffffff99]'>Help & Support</li>
                    <li className='mt-[16px] font-medium text-[#ffffff99]'>Partner with us</li>
                    <li className='mt-[16px] font-medium text-[#ffffff99]'>Ride with us</li>
                    
                </ul>
                <div className='mx-auto mt-[48px]'> 
                <ul>
                    <li><div className='font-bold text-[18px]'>Legal</div></li>
                    <li className='mt-[16px] font-medium text-[#ffffff99]'>Terms & Conditons</li>
                    <li className='mt-[16px] font-medium text-[#ffffff99]'>Cookie Policy</li>
                    <li className='mt-[16px] font-medium text-[#ffffff99]'>Privacy Policy</li>
                    <li className='mt-[16px] font-medium text-[#ffffff99]'>Invester Relations</li>
                </ul></div>
            </div>
            <div className='mx-auto mt-2'>
            <ul>
                    <li><div className='font-bold text-[18px]'>We deliever to:</div></li>
                    <li className='mt-[16px] font-medium text-[#ffffff99]'>Banglore</li>
                    <li className='mt-[16px] font-medium text-[#ffffff99]'>Gurgaon</li>
                    <li className='mt-[16px] font-medium text-[#ffffff99]'>Delhi</li>
                    <li className='mt-[16px] font-medium text-[#ffffff99]'>Pune</li>
                    <li className='mt-[16px] font-medium text-[#ffffff99]'><button className='border rounded-md p-1'>589 cities <RxCaretUp className='inline ml-4' /></button></li>
                </ul>
            </div>
            
        </div>
        </div>
    )
}

export default Footer
