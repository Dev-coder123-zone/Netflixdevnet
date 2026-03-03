import React from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer,toast } from 'react-toastify'
import {useState } from 'react'
import axios from 'axios'

const Header = () => {
 
   const [Movies, setMovies] = useState([])
   const [input_p, setinput_p] = useState('')

 const fetchData = async ()=>{
  
 let response = await axios.get(`https://netflix-movies-and-tv-shows-api-by-apirobots.p.rapidapi.com/v1/netflix?name=${input_p}&page=1`,{
    
    headers:{
      'x-rapidapi-key': '90b8e37316mshdd4427bbc78d636p1d80ddjsndb5b46d3c0a2',
      'x-rapidapi-host': 'netflix-movies-and-tv-shows-api-by-apirobots.p.rapidapi.com'
    }
  })
  setMovies(response.data.items);
}

console.log(Movies)

const handleSubmit=(e)=>{
e.preventDefault();
fetchData();
setinput_p("")
toast.warning("Movie not found !")
}

  return (
    <>
    
    {/* Movies Section */}
    <div className="mt-24 px-4">
      {Movies.map((elem,idx)=>{
        return (
          <div 
            key={idx} 
            className='flex flex-col md:flex-row w-full max-w-5xl mx-auto gap-4 p-4 rounded-md shadow-md transition duration-500 hover:scale-105'
          >

         <img 
           src={elem.url} 
           className='w-full md:w-1/2 h-64 md:h-80 object-cover rounded-md'
           alt="movie"
         />

         <div className='w-full md:w-1/2 bg-gray-200 rounded-md p-4 shadow-md'>
             <h1 className='text-2xl mb-2'>Show Info</h1>
             <h1 className='text-xl font-semibold'>{elem.title}</h1>

           <div className="my-2">
           {elem.genres.map((g,idx)=>{
            return (
              <div key={idx}>
                <h1>Type: {g}</h1>
              </div>
            )
           })}
           </div>

        <h1 className='text-green-500 font-bold'>IMDB Rating:- {elem.imdb_average_rating}</h1>
        <h1 className='font-bold'>Show Type: Movies</h1>
        <h1 className='font-bold'>Votes: {elem.imdb_num_votes}</h1>
        <h1 className='font-bold'>Release Date: {elem.release_year}</h1>
        <h1 className='font-bold'>Watching Time: {elem.runtime || "Not show"}</h1>

        <div className='flex justify-between items-center mt-4'>
          <h1 className='text-2xl hover:text-red-500'>$ 9.99</h1>
          <button
          className='font-bold border-2 h-12 w-24 rounded-md hover:bg-blue-500 hover:text-white transition-all duration-300 active:scale-95'>
            Pay now
          </button>
        </div>

        <a 
          href={elem.url} 
          className='mt-4 font-bold underline hover:bg-blue-500 hover:text-white border-blue-400 w-full h-12 border-2 flex justify-center rounded-2xl items-center transition-all duration-300 active:scale-95'>
          Watch now
        </a>

         </div>
       </div>
        )
      })}
    </div>

    {/* Header Section */}
    <header className='h-14 w-full bg-gray-900 text-white font-bold flex items-center justify-between px-4 fixed left-0 top-0 z-50'>

      <Link to={'/'} className='text-red-500'>
      <img
        className="w-28"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="logo"
      />
      </Link>

     <div className='flex items-center gap-2 w-full max-w-xs md:max-w-sm'>
       <input
        value={input_p}
        onChange={(e)=>{
          setinput_p(e.target.value)
        }}
        type="search" 
        placeholder='Search Movie'
        className='bg-white text-black placeholder:text-gray-500 h-10 px-2 rounded-md w-full'
       />
      <button 
        onClick={handleSubmit}
        className='border-2 h-10 w-20 md:h-12 md:w-24 rounded-lg active:border-red-500'>
        Search
      </button>
     </div>

     {/* Desktop Links */}
     <div className="hidden md:flex gap-4">
       <Link to={'/'} className='hover:text-green-500 hover:scale-110 transition'>Home</Link>
       <Link to={'/bollywood'} className='hover:text-green-500 hover:scale-110 transition'>Bollywood</Link>
       <Link to={'/about'} className='hover:text-green-500 hover:scale-110 transition'>About</Link>
       <Link to={'/marvel'} className='hover:text-green-500 hover:scale-110 transition'>Marvel fan's</Link>
       <Link to={'/login'} className='hover:text-green-500 hover:scale-110 transition'>Sign In</Link>
     </div>

    </header>

    <ToastContainer/>
    </>
  )
}

export default Header