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
  }
  )
  setMovies(response.data.items);
}

console.log(Movies)


const handleSubmit=(e)=>{
e.preventDefault;
fetchData();
setinput_p("")
toast.warning("Movie not found !")
}

  return (
    <>

    
        {Movies.map((elem,idx)=>{
        
          return <div key={idx} className='border-1 flex justify-evenly rounded-md mt-20 h-100 w-150 transition duration-500 hover:scale-105'>
         <img src={elem.url} className='h-80 rounded-md '/>

         <div className=' h-99 rounded-md w-70  bg-gray-200 shadow-md'>
             <h1 className='text-2xl ml-2'>Show Info</h1>
           <h1 className='text-2xl ml-2'>{elem.title}</h1>
           <h1>{elem.genres.map((elem,idx)=>{
            return <div key={idx}>
              <h1>Type:{elem}</h1>
            </div>
           })}</h1>
        <h1 className='text-green-500 font-bold'>IMDB Rating:- {elem.imdb_average_rating}</h1>
        <h1 className='font-bold'>Show Type: {'Movies'}</h1>
         <h1 className='font-bold'>Votes: {elem.imdb_num_votes}</h1>
          <h1 className='font-bold'>Release Date: {elem.release_year}</h1>
         <h1 className='font-bold'>Watching Time: {elem.runtime || "Not show"}</h1>
          <div className='flex justify-evenly '>
          <h1 className='text-2xl hover:text-red-500'>{'$ 9.99'}</h1>
          <button
          className='font-bold border-2 h-10 w-20 rounded-md hover:bg-blue-500 hover:text-white transition-all duration-300 active:scale-120' >Pay now</button>
        </div>
        <a href={elem.url} className='font-bold underline hover:bg-blue-500 hover:text-white border-blue-400 w-35  h-15 border-2 flex justify-center rounded-2xl items-center  transition-all duration-300 active:scale-120'>Watch now</a>











         </div>
       
        
       </div>
        })}













    <header className='h-15 w-dvw bg-gray-900 text-white font-bold flex items-center justify-around fixed'>
      <Link to={'/'} className='text-2xl hover:text-red-800 text-red-500'>  
      <img
        className=" left-10 w-32 z-10"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="logo"
      /></Link>
     <div className='flex  h-14 justify-between w-80 items-center'>
       <input
      value={input_p}
      onChange={(e)=>{
      setinput_p(e.target.value)
       
      }}
       
       type="search" placeholder='Search Movie ' className='bg-white text-black placeholder:text-gray-500 h-8 rounded-md' />
      <button onClick={handleSubmit || Noti} className='border-2 h-10 w-20 rounded-lg active:border-red-500' type='submit'  >Search</button>
     </div>
      <Link to={'/'} className='hover:transition-all duration-300 hover:text-green-500 hover:scale-130'>Home</Link>
       <Link to={'/bollywood'} className='hover:transition-all duration-300 hover:text-green-500 hover:scale-130'>Bollywood</Link>
    <Link to={'/about'} className='hover:transition-all duration-300 hover:text-green-500 hover:scale-130'>About</Link>
    <Link to={'/marvel'} className='hover:transition-all duration-300 hover:text-green-500 hover:scale-130'> Marvel fan's </Link>
    <Link to={'/login'} className='hover:transition-all duration-300 hover:text-green-500 hover:scale-130'>Sign In</Link>
    </header>
      <ToastContainer/>
    </>
  )
}




export default Header