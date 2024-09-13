import React, { useState } from 'react';
import Card from '../components/Card';
import topRestroData from '../components/topRestroData'; // Import your topRestroData.js file

const Offers = () => {

    const [data] = useState(topRestroData); // Initialize state with data from topRestroData.js

    return (
        <div className='items-center max-w-[1200px] mx-auto px-2 pt-4'>
            <div className="pb-0 pt-2"> <span className="font-bold">Home/</span> Offers</div>
            <div className='flex items-center justify-between my-5'>
                
                <div className='text-[25px] font-bold'>Restaurants With Great Offers Near Me</div>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
                {data.map((d, i) => (
                    <Card {...d} key={i} />
                ))}
            </div>
        </div>
    );
  
}

export default Offers
