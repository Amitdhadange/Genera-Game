import React, { useEffect } from 'react'


const TrandingGame = ({gamelist}) =>{
    useEffect(()=>{
        // console.log(gamelist)
    },[])
  return (
    <div className='mt-5 hidden md:block'>
        <h2 className='font-bold text-2xl font-serif dark:text-white'>Trending Games </h2>
    <div className=' md:grid md:grid-cols-3 gap-3 lg:grid-cols-4 mt-4'>
        {gamelist.map((item,index)=>index < 4 &&(
            <div className='flex flex-col items-center text-center rounded-xl overflow-hidden cursor-pointer bg-blue-200 hover: dark:bg-slate-900 hover:scale-110 transition-all ease-in duration-300'>
                <img src={item.background_image} alt="Lodding..." className='h-72 rounded-t-lg object-cover mb-2 hover:scale-105 transition-all ease-in duration-300 '/>
                <h2 className='font-serif font-bold dark:text-white'>{item.name}</h2>
            </div>
        ))}

    </div>
        </div>
  )
}

export default TrandingGame