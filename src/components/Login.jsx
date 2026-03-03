import React from 'react'
import { Link } from 'react-router-dom';
import { ToastContainer,toast } from 'react-toastify';
const Login=()=> {
    let Noti=()=>{
        toast.error("Something Went Wrong ")
    }
  return (
    <div className="relative h-screen w-full bg-black">
      
      <img
        className="absolute top-6 left-10 w-32 z-10"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="logo"
      />
  
      <div className="relative z-10 flex justify-center items-center h-full">
          <ToastContainer/>
        <div className="bg-black bg-opacity-75 p-12 rounded-md w-[350px]">
          
          <h1 className="text-white text-3xl font-bold mb-6">
            Sign In
          </h1>

          <form className="flex flex-col gap-4">
              
            <input
              type="text"
              placeholder="Email or phone number"
              className="p-3 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-red-600"
            />

            <input
              type="password"
              placeholder="Password"
              className="p-3 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-red-600"
            />

            <button 
            onClick={Noti}
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded mt-4 transition duration-300"
            >
              Sign In
            </button>

            <p className="text-gray-400 text-sm mt-6">
              New here?{" "}
              <span className="text-white hover:underline cursor-pointer">
                Sign up now.
              </span><br /><br />
                <Link to={'/'} className='text-white text-3xl z-10 underline'>Home Page</Link>
            </p>

          </form>

        </div>
        
      </div>
  
    </div>
  );
}

export default Login;