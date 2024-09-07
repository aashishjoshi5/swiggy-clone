import React, { useState } from 'react';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import categoryData from './categoryData'; // Import your categoryData.js file

function Category() {
    const [slide, setSlide] = useState(0);
    const [categories] = useState(categoryData); // No need to use setCategory as data is static

    const prevSlide = () => {
        if (slide === 0) return;
        setSlide(slide - 3);
    };

    const nextSlide = () => {
        if (slide >= categories.length - 8) return;
        setSlide(slide + 3);
    };

    return (
        <div className='items-center max-w-[1200px] mx-auto px-2 mt-4'>
            <div className='flex items-center justify-between'>
                <div className='text-[25px] font-bold'>What's on your mind?</div>
                <div className='flex '>
                    <div className='flex justify-center items-center w-[30px] h-[30px] bg-[#02060c26] rounded-full mx-2' onClick={prevSlide}>
                        <FaArrowLeft />
                    </div>
                    <div className='flex justify-center items-center w-[30px] h-[30px] bg-[#02060c26] rounded-full mx-2' onClick={nextSlide}>
                        <FaArrowRight />
                    </div>
                </div>
            </div>
            <div className='flex overflow-hidden'>
                {categories.map((cat, index) => (
                    <div style={{ transform: `translateX(-${slide * 100}%)` }} key={index} className='w-[150px] shrink-0 duration-500'>
                        <img src={require(`./assets/images/${cat.image}`)} alt={cat.path} />
                    </div>
                ))}
            </div>
            <hr className='my-6 border-[1px]' />
        </div>
    );
}

export default Category;
