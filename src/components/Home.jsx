import React, { useEffect } from 'react'
import axios from 'axios';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

const Home = () => {

  const [movie1, setmovie1] = useState([])

  let Noti = () => {
    toast.error("Network Error ")
  }

  const movie = async () => {
    let response = await axios.get("https://api.tvmaze.com/shows");
    setmovie1(response.data);
  }

  console.log(movie1)

  useEffect(() => {
    movie()
  }, [])

  return (
    <>
    
    {/* Top Spacing for Fixed Header */}
    <div className="pt-16 px-4">

    <marquee className='text-lg md:text-2xl font-bold text-red-600 mb-6'>
      Watch movies, web series and TV Show's
    </marquee>

    {/* Grid Responsive */}
    <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto'>

      {movie1.map((elem, idx) => {
        return (

          <div 
            key={idx} 
            className='flex flex-col bg-white rounded-md shadow-md overflow-hidden transition duration-500 hover:scale-105'
          >

            {/* Image */}
            <img 
              src={elem.image?.original} 
              className='w-full h-64 md:h-72 object-cover'
              alt="movie"
            />

            {/* Info Section */}
            <div className='p-4 bg-gray-200 flex flex-col justify-between flex-1'>

              <h1 className='text-xl md:text-2xl font-bold mb-2'>Show Info</h1>

              <div className='space-y-1 text-sm md:text-base'>
                <h1 className='font-bold'>{elem.name}</h1>
                <h1 className='text-green-500 font-bold'>
                  IMDB Rating:- {elem.rating?.average || "N/A"}
                </h1>
                <h1 className='font-bold'>Show Type: {elem.type}</h1>
                <h1 className='font-bold'>Release Date: {elem.ended || "Running"}</h1>
                <h1 className='font-bold'>Watching Time: {elem.runtime}</h1>
              </div>

              {/* Price + Button */}
              <div className='flex justify-between items-center mt-4'>
                <h1 className='text-xl md:text-2xl hover:text-red-500'>
                  $ 9.99
                </h1>
                <button 
                  className='font-bold border-2 h-10 w-24 rounded-md hover:bg-blue-500 hover:text-white transition-all duration-300 active:scale-95'
                  onClick={Noti}
                >
                  Pay now
                </button>
              </div>

              {/* Watch Button */}
              <a 
                href={elem.url} 
                className='mt-4 font-bold underline hover:bg-blue-500 hover:text-white border-blue-400 w-full h-12 border-2 flex justify-center rounded-2xl items-center transition-all duration-300 active:scale-95'
              >
                Watch now
              </a>

            </div>

          </div>

        )
      })}

    </div>

    </div>

    <ToastContainer/>
    </>
  )
}

export default Home