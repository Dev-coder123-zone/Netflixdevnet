import React from "react";
import { Link } from "react-router-dom";
function About() {
  return (
    <div className="min-h-screen bg-black text-white">

      
      <div className="relative h-[60vh] flex items-center justify-center text-center">
        <img
          src="https://images.unsplash.com/photo-1524985069026-dd778a71c7b4"
          alt="hero"
          className="absolute w-full h-full object-cover opacity-40"
        />
        <div className="relative z-10">
          <h1 className="text-5xl font-bold tracking-wide">
            Welcome to StreamFlix
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Unlimited Movies, Web Series & Originals in HD Quality
          </p>
        </div>
      </div>

      
      <div className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">
          About Our OTT Platform
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition duration-300 shadow-lg">
            <h3 className="text-xl font-semibold mb-3 text-red-500">
              🎬 Huge Content Library
            </h3>
            <p className="text-gray-400">
              Watch thousands of movies, web series, and exclusive originals
              anytime, anywhere in HD & 4K quality.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition duration-300 shadow-lg">
            <h3 className="text-xl font-semibold mb-3 text-red-500">
              📱 Multi-Device Access
            </h3>
            <p className="text-gray-400">
              Stream seamlessly on mobile, tablet, laptop, and smart TVs with
              personalized recommendations.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition duration-300 shadow-lg">
            <h3 className="text-xl font-semibold mb-3 text-red-500">
              🔐 Secure & Fast
            </h3>
            <p className="text-gray-400">
              Secure login system with fast streaming servers and zero ads for
              premium experience.
            </p>
          </div>

        </div>
      </div>

      {/* Client / User Info Section */}
      <div className="bg-gray-900 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Clients & Users</h2>
          <p className="text-gray-400 mb-8">
            Trusted by thousands of users worldwide. We provide seamless
            entertainment experience with top-rated customer support.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-black p-4 rounded-lg">10K+ Users</div>
            <div className="bg-black p-4 rounded-lg">5000+ Movies</div>
            <div className="bg-black p-4 rounded-lg">120+ Originals</div>
            <div className="bg-black p-4 rounded-lg">24/7 Support</div>
          </div>
        </div>
      </div>

      {/* Developer Section */}
      <div className="py-12 text-center border-t border-gray-800">
        <h3 className="text-xl font-semibold hover:underline">
          Developed by <span className="text-red-500">ATUL panchal</span>
        </h3>
        <p className="text-gray-500 mt-2">
          MERN Stack Developer | React | Node | Express | MongoDB | Typescript | Javascript | SQL | Java
        </p>
        <p className="text-gray-500 mt-2">You know me , who i am </p>
        <Link to={'/'} className="text-3xl underline ">Home page</Link>
      </div>

    </div>
  );
}

export default About;