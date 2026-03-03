import React, {  useEffect } from 'react'
import axios from 'axios';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

const Home = () => {
    const [movie1, setmovie1] = useState([])
let Noti=()=>{
  toast.error("Network Error ")
}
  const movie= async ()=>{
   let response=await axios.get("https://api.tvmaze.com/shows");
   setmovie1(response.data);
  }
console.log(movie1)

useEffect(()=>{
    movie()
},[])

  return (
    <>
    <marquee className='text-2xl mt-20 font-bold text-red-600'>Watch movies,web series and TV Show's</marquee>
    <div className=''>
    <div className='grid  gap-5 w-dvw ml-7  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2'>
   {movie1.map((elem,idx)=>{
    return <div key={idx} className='border-1 flex justify-evenly rounded-md mt-20 h-85 w-150 transition duration-500 hover:scale-105'>
   
    <img src={elem.image.original} className='h-80 rounded-md '/>
    <div className=' h-80 rounded-md w-70  bg-gray-200 shadow-md'>
        <h1 className='text-2xl ml-2'>Show Info</h1>
        <div className='ml-5 mt-2'>
        <h1 className='font-bold'>{elem.name}</h1>
        <h1 className='text-green-500 font-bold'>IMDB Rating:- {elem.rating.average}</h1>
        <h1 className='font-bold'>Show Type: {elem.type}</h1>
        <h1 className='font-bold'>Release Date: {elem.ended}</h1>
        <h1 className='font-bold'>Watching Time: {elem.runtime}</h1>
        <div className='flex justify-evenly '>
          <h1 className='text-2xl hover:text-red-500'>{'$ 9.99'}</h1>
          <button className='font-bold border-2 h-10 w-20 rounded-md hover:bg-blue-500 hover:text-white transition-all duration-300 active:scale-120' onClick={Noti}>Pay now</button>
        </div>
       <a href={elem.url} className='font-bold underline hover:bg-blue-500 hover:text-white border-blue-400 w-35  h-15 border-2 flex justify-center rounded-2xl items-center  transition-all duration-300 active:scale-120'>Watch now</a>
        </div>
        
    </div>


    </div>
   })}

     
      </div>
      </div>
      <ToastContainer/>

      
    </>
  )
}

export default Home
