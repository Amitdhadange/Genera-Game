import React, { useEffect } from 'react'

const Banner = ({gameBanner}) => {
    useEffect(()=>{
        
    },[])
  return (
    <div className='relative'>
        <div className='absolute bottom-0 p-5  '>
        <h2 className='text-2xl font-bold  text-white'>{gameBanner.name}</h2>
        <button className='bg-sky-700 p-2 px-3  text-white font-medium rounded-xl'>Get Now</button>
        </div>
        <img src={gameBanner.background_image} alt="logo" className='md-h-[320px] rounded-lg' />
    </div>
  )
}

export default Banner