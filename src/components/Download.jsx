import React from 'react'

function Download() {
    return (
        
        <div className='flex flex-row items-center justify-between bg-[#f0f0f5] w-full h-[104px] mt-[40px] '> 
            <div className=' w-[408px]  ml-[140px] mt-4  pb-2 '>
                <div className='hidden md:block text-[28px] font-bold tracking-tight mb-2'>For better experience,download the Swiggy app now</div>
                </div>
            <div className='flex flex-row justify-center h-[64px] my-5 mx-auto'>
                <img className='m-2' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png" alt="" />
                <img  className='m-2' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png" alt="" />
            </div>
        </div>
    )
}

export default Download
