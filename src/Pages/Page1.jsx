import React from 'react';

function Page1(){
    return(
        <div className='flex flex-col md:flex-col gap-10 justify-center items-center text-center min-h-screen  '>
            <h1 className='text-6xl text-black font-semibold'>Your <span className='text-red-700'>Career in Web Development</span><br />Starts Here</h1>
            <p className='text-2xl'>Our full stack curriculum is free and supported by a <br /> passionate open source community.</p>
            <button className='text-black rounded w-48 h-14 shadow-md hover:bg-green-700 transition-transform duration-300 hover:scale-110'>View Full Curriculum</button>

        </div>
    )
}
export default Page1;