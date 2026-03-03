import axios from 'axios'
import React, {  useEffect } from 'react'

const Newmovie = () => {

const action= async ()=>{
   let response= await axios.get("https://api.sampleapis.com/movies/action");
   console.log(response);
   console.log('yes')
}

useEffect(()=>{
  action()
},[])

  return (
    <div>
      
    </div>
  )
}

export default Newmovie
