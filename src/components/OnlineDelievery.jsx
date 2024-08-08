import React, { useEffect, useState } from 'react'
import Card from './Card'

function OnlineDelievery() {
    const[data, setData]=useState([])

    const fetchTopRestaurant=async()=>{
        const response= await fetch("http://localhost:5000/top-restaurant-chains")
        const apiData=await response.json()
        setData(apiData);
    }

    useEffect(()=>{
        fetchTopRestaurant();
    },[])

    return (
        <div className=' items-center max-w-[1200px] mx-auto px-2  '>
        <div className='flex items-center justify-between my-5'>
               <div className='text-[25px] font-bold'>Restaurants with online food delivery in Haldwani</div>
           
        </div>
        <div className='grid grid-cols-2   md:grid-cols-4 gap-3'>
                {data.map((d,i)=>{
                    return <Card {...d} key={i} />
                })}
        </div>
           
        </div>
    )
}

export default OnlineDelievery
