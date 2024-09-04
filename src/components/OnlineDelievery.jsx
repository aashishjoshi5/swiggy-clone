import React, { useState } from 'react';
import Card from './Card';
import topRestroData from '../topRestroData'; // Import your topRestroData.js file

function OnlineDelievery() {
    const [data] = useState(topRestroData); // Initialize state with data from topRestroData.js

    return (
        <div className='items-center max-w-[1200px] mx-auto px-2'>
            <div className='flex items-center justify-between my-5'>
                <div className='text-[25px] font-bold'>Restaurants with online food delivery in Haldwani</div>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
                {data.map((d, i) => (
                    <Card {...d} key={i} />
                ))}
            </div>
        </div>
    );
}

export default OnlineDelievery;
