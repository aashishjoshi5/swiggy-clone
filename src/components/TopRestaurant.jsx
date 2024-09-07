import React, { useState } from 'react';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Card from './Card';
import topRestroData from './topRestroData'; // Import your topRestroData.js file

function TopRestaurant() {
    const [slide, setSlide] = useState(0);
    const [data] = useState(topRestroData); // Initialize state with data from topRestroData.js

    const prevSlide = () => {
        if (slide === 0) return;
        setSlide(slide - 2);
        console.log("clicked prev slide");
        console.log(slide);
    };

    const nextSlide = () => {
        if (slide >= data.length - 4) return;
        setSlide(slide + 2);
        console.log("clicked next slide");
        console.log(slide);
    };

    return (
        <div className='items-center max-w-[1200px] mx-auto px-2'>
            <div className='flex items-center justify-between my-5'>
                <div className='text-[25px] font-bold'>Top Restaurant Chains in Haldwani</div>
                <div className='flex'>
                    <div className='flex justify-center items-center w-[30px] h-[30px] bg-[#02060c26] rounded-full mx-2' onClick={prevSlide}>
                        <FaArrowLeft />
                    </div>
                    <div className='flex justify-center items-center w-[30px] h-[30px] bg-[#02060c26] rounded-full mx-2' onClick={nextSlide}>
                        <FaArrowRight />
                    </div>
                </div>
            </div>
            <div className='flex gap-5 overflow-hidden'>
                {data.map((d, i) => (
                    <div style={{ transform: `translateX(-${slide * 100}%)` }} key={i} className='shrink-0 duration-500'>
                        <Card width="w-full md:w-[273px]" {...d} />
                    </div>
                ))}
            </div>
            <hr className='my-6 border-[1px]' />
        </div>
    );
}

export default TopRestaurant;
