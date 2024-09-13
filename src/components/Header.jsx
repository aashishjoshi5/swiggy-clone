import React, { useState } from 'react'
import { RxCaretDown } from "react-icons/rx";
import { CgSearch } from "react-icons/cg";
import { RiDiscountPercentLine } from "react-icons/ri";
import { PiDotsThreeCircle } from "react-icons/pi";
import { RxAvatar } from "react-icons/rx";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from 'react-router-dom';


function Header() {
    const [toggle, setToggle]=useState(false);
   const showSideMenu=()=>{
    setToggle(true)
   }
   const hideSideMenu=()=>{
    setToggle(false)
   }

    return (
        <> <div className=' black-overlay w-full h-full fixed duration-500 ' onClick={hideSideMenu} style={{opacity:toggle?1:0
            ,visibility:toggle?"visible":"hidden",
            zIndex:999999,
        }}>
         <div className='w-[400px] bg-white h-full absolute duration-[400ms]'onClick={(e)=>{
            e.stopPropagation();
         }} style={{left:toggle?'0%':'-100%'}}></div>
        </div>
        <header className=' p-[15px]  shadow-xl  top-0 '> 
        <div className='flex items-center max-w-[1200px] mx-auto '>
            <div className='w-[120px] '>
                <Link to="/" >
                <img src="images/logo.png" className='w-full p-2' alt="swiggy-logo" />
                </Link>
                
            </div>
            <div className=''>
            <span className='font-bold border-b-[3px] border-black   hover:text-orange-600'>Haldwani</span><span className='text-[#686b78]'>,Uttarakhand 263139, India</span> <RxCaretDown onClick={showSideMenu} className='inline text-[2rem] font-bold text-[#fc8019] 'fontSize={25} />
            </div>
            <nav className=' hidden md:flex list-none gap-10 ml-auto text-[18px] font-semibold'>
                <li  className='flex items-center gap-2  hover:text-orange-600 cursor-pointer'><CgSearch className='inline'/><Link to='/search'>Search </Link>   </li>
                <li  className='flex items-center gap-3 hover:text-orange-600 cursor-pointer'><RiDiscountPercentLine className='inline' /><Link to='/offers'>Offers</Link> <sup className='text-orange-600'>NEW</sup></li>
                <li  className='flex items-center gap-3  hover:text-orange-600 cursor-pointer'><PiDotsThreeCircle className='inline' /><Link to='/help'>Help</Link></li>
                <li  className='flex items-center gap-3  hover:text-orange-600 cursor-pointer' ><RxAvatar  className='inline'/><Link to='/signin'>Sign In</Link></li>
                <li  className='flex items-center gap-3  hover:text-orange-600 cursor-pointer'><MdOutlineShoppingCart className='inline' /><Link to='/cart'>Cart</Link></li>
            </nav>
        </div>
        </header>
        </>
        
    )
}

export default Header
