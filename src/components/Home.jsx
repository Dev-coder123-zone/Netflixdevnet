import React, { useEffect } from 'react'
import axios from 'axios';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

const Home = () => {

  const [movie1, setmovie1] = useState([])

  let Noti = () => {
    toast.success("Please wait... ")
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
                  $ 3.99
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
                className='mt-4 font-bold  text-blue-400 hover:bg-blue-500 hover:text-white border-blue-400 w-full h-12 border-1 flex justify-center rounded-2xl items-center transition-all duration-300 active:scale-95'
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
    <Footer/>
    </>
  )
}


import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 pt-12 pb-6 px-6 md:px-16">
      <div className="grid md:grid-cols-5 gap-10">

      
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">🎬 TVMAZE</h2>
          <p className="text-sm leading-6">
            Watch the latest movies, trending series, and exclusive originals
            anytime, anywhere. Unlimited entertainment.
          </p>
        </div>

        
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-red-500 cursor-pointer">Home</li>
            <li className="hover:text-red-500 cursor-pointer">Movies</li>
            <li className="hover:text-red-500 cursor-pointer">TV Shows</li>
            <li className="hover:text-red-500 cursor-pointer">Trending</li>
            <li className="hover:text-red-500 cursor-pointer">Contact</li>
          </ul>
        </div>

      
        <div>
          <h3 className="text-white font-semibold mb-4">Genres</h3>
          <ul className="space-y-2 text-sm">
            <li>Action</li>
            <li>Comedy</li>
            <li>Drama</li>
            <li>Horror</li>
            <li>Romance</li>
          </ul>
        </div>

    
        <div>
          <h3 className="text-white font-semibold mb-4">Latest Movies</h3>
          <ul className="space-y-2 text-sm">
            <li>Avatar 2</li>
            <li>John Wick 4</li>
            <li>Oppenheimer</li>
            <li>Pathaan</li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-white font-semibold mb-4">Subscribe</h3>
          <p className="text-sm mb-3">
            Get updates on new releases & offers.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter Email"
              className="px-3 py-2 w-full text-black rounded-l-md outline-none"
            />
            <button className="bg-red-600 px-4 rounded-r-md hover:bg-red-700">
              Join
            </button>
          </div>
        </div>
      </div>

    
      <div className="flex justify-between items-center mt-10 border-t border-gray-700 pt-6 flex-col md:flex-row gap-4">
        <p className="text-sm">
          © {new Date().getFullYear()} TVMAZE. All Rights Reserved.
        </p>

        <div className="flex gap-4 text-lg">
          <FaFacebookF className="hover:text-red-500 cursor-pointer" />
          <FaInstagram className="hover:text-red-500 cursor-pointer" />
          <FaTwitter className="hover:text-red-500 cursor-pointer" />
          <FaYoutube className="hover:text-red-500 cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default Home