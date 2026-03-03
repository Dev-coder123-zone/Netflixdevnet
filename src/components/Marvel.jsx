


import React from 'react'
import axios from 'axios';
import { ToastContainer,toast } from 'react-toastify';

const Marvel = () => {

  let Noti=()=>{
    toast.error("Network Error")
  }

let m1=[
  {
    "id": 1,
    "title": "Iron Man",
    "release_date": "2008-05-02",
    "year": "2008",
    "runtime": "126 min",
    "rating": "7.9",
    "poster": "https://image.tmdb.org/t/p/w500/78lPtwv72eTNqFW9COBYI0dWDJa.jpg"
  },
  {
    "id": 2,
    "title": "The Incredible Hulk",
    "release_date": "2008-06-13",
    "year": "2008",
    "runtime": "112 min",
    "rating": "6.6",
    "poster": "https://image.tmdb.org/t/p/w500/gKzYx79y0AQTL4UAk1cBQJ3nvrm.jpg"
  },
  {
    "id": 3,
    "title": "Iron Man 2",
    "release_date": "2010-05-07",
    "year": "2010",
    "runtime": "124 min",
    "rating": "6.9",
    "poster": "https://image.tmdb.org/t/p/w500/6WBeq4fCfn7AN0o21W9qNcRF2l9.jpg"
  },
  {
    "id": 4,
    "title": "Thor",
    "release_date": "2011-05-06"
  },
{
  "id": 21,
  "title": "Captain Marvel",
  "release_date": "2019-03-08",
  "year": "2019",
  "runtime": "124 min",
  "rating": "6.8",
  "poster": "https://image.tmdb.org/t/p/w500/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg"
},
{
  "id": 22,
  "title": "Avengers: Endgame",
  "release_date": "2019-04-26",
  "year": "2019",
  "runtime": "181 min",
  "rating": "8.4",
  "poster": "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg"
},
{
  "id": 23,
  "title": "Spider-Man: Far From Home",
  "release_date": "2019-07-02",
  "year": "2019",
  "runtime": "129 min",
  "rating": "7.4",
  "poster": "https://image.tmdb.org/t/p/w500/4q2NNj4S5dG2RLF9CpXsej7yXl.jpg"
},
{
  "id": 24,
  "title": "Black Widow",
  "release_date": "2021-07-09",
  "year": "2021",
  "runtime": "134 min",
  "rating": "6.7",
  "poster": "https://image.tmdb.org/t/p/w500/qAZ0pzat24kLdO3o8ejmbLxyOac.jpg"
},
{
  "id": 25,
  "title": "Shang-Chi and the Legend of the Ten Rings",
  "release_date": "2021-09-03",
  "year": "2021",
  "runtime": "132 min",
  "rating": "7.4",
  "poster": "https://image.tmdb.org/t/p/w500/1BIoJGKbXjdFDAqUEiA2VHqkK1Z.jpg"
},
{
  "id": 26,
  "title": "Eternals",
  "release_date": "2021-11-05",
  "year": "2021",
  "runtime": "157 min",
  "rating": "6.3",
  "poster": "https://image.tmdb.org/t/p/w500/6AdXwFTRTAzggD2QUTt5B7JFGKL.jpg"
},
{
  "id": 27,
  "title": "Spider-Man: No Way Home",
  "release_date": "2021-12-17",
  "year": "2021",
  "runtime": "148 min",
  "rating": "8.2",
  "poster": "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg"
},
{
  "id": 28,
  "title": "Doctor Strange in the Multiverse of Madness",
  "release_date": "2022-05-06",
  "year": "2022",
  "runtime": "126 min",
  "rating": "6.9",
  "poster": "https://image.tmdb.org/t/p/w500/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg"
},
{
  "id": 29,
  "title": "Thor: Love and Thunder",
  "release_date": "2022-07-08",
  "year": "2022",
  "runtime": "119 min",
  "rating": "6.3",
  "poster": "https://image.tmdb.org/t/p/w500/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg"
},
{
  "id": 30,
  "title": "Black Panther: Wakanda Forever",
  "release_date": "2022-11-11",
  "year": "2022",
  "runtime": "161 min",
  "rating": "7.1",
  "poster": "https://image.tmdb.org/t/p/w500/sv1xJUazXeYqALzczSZ3O6nkH75.jpg"
},
{
  "id": 31,
  "title": "Ant-Man and the Wasp: Quantumania",
  "release_date": "2023-02-17",
  "year": "2023",
  "runtime": "124 min",
  "rating": "6.1",
  "poster": "https://image.tmdb.org/t/p/w500/qnqGbB22YJ7dSs4o6M7exTpNxPz.jpg"
},
{
  "id": 32,
  "title": "Guardians of the Galaxy Vol. 3",
  "release_date": "2023-05-05",
  "year": "2023",
  "runtime": "150 min",
  "rating": "8.0",
  "poster": "https://image.tmdb.org/t/p/w500/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg"
},
{
  "id": 33,
  "title": "The Marvels",
  "release_date": "2023-11-10",
  "year": "2023",
  "runtime": "105 min",
  "rating": "5.9",
  "poster": "https://image.tmdb.org/t/p/w500/3fM1hYhQdXv5J0kHcFf9E4RzC7C.jpg"
},
{
  "id": 34,
  "title": "Deadpool & Wolverine",
  "release_date": "2024-07-26",
  "year": "2024",
  "runtime": "127 min",
  "rating": "8.1",
  "poster": "https://image.tmdb.org/t/p/w500/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg"
},
{
  "id": 35,
  "title": "Captain America: Brave New World",
  "release_date": "2025-02-14",
  "year": "2025",
  "runtime": "130 min",
  "rating": "TBD",
  "poster": "https://image.tmdb.org/t/p/w500/placeholder.jpg"
},
  {
    "id": 1,
    "title": "Iron Man",
    "release_date": "2008-05-02",
    "year": "2008",
    "runtime": "126 min",
    "rating": "7.9",
    "poster": "https://image.tmdb.org/t/p/w500/78lPtwv72eTNqFW9COBYI0dWDJa.jpg"
  },
  {
    "id": 2,
    "title": "The Incredible Hulk",
    "release_date": "2008-06-13",
    "year": "2008",
    "runtime": "112 min",
    "rating": "6.6",
    "poster": "https://image.tmdb.org/t/p/w500/gKzYx79y0AQTL4UAk1cBQJ3nvrm.jpg"
  },
  {
    "id": 3,
    "title": "Iron Man 2",
    "release_date": "2010-05-07",
    "year": "2010",
    "runtime": "124 min",
    "rating": "6.9",
    "poster": "https://image.tmdb.org/t/p/w500/6WBeq4fCfn7AN0o21W9qNcRF2l9.jpg"
  },
  {
    "id": 4,
    "title": "Thor",
    "release_date": "2011-05-06"
  },
  {
    "id": 1,
    "title": "The Shawshank Redemption",
    "release_date": "1994-09-23",
    "year": 1994,
    "runtime": 142,
    "rating": 9.3,
    "liked_people": 2543211,
    "poster": "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg"
  },
  {
    "id": 2,
    "title": "The Godfather",
    "release_date": "1972-03-24",
    "year": 1972,
    "runtime": 175,
    "rating": 9.2,
    "liked_people": 1876543,
    "poster": "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg"
  },
  {
    "id": 3,
    "title": "The Dark Knight",
    "release_date": "2008-07-18",
    "year": 2008,
    "runtime": 152,
    "rating": 9.0,
    "liked_people": 2789456,
    "poster": "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
  },
  {
    "id": 4,
    "title": "Pulp Fiction",
    "release_date": "1994-10-14",
    "year": 1994,
    "runtime": 154,
    "rating": 8.9,
    "liked_people": 1987345,
    "poster": "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg"
  },
  {
    "id": 5,
    "title": "Forrest Gump",
    "release_date": "1994-07-06",
    "year": 1994,
    "runtime": 142,
    "rating": 8.8,
    "liked_people": 2109876,
    "poster": "https://image.tmdb.org/t/p/w500/clolk7rB5lAjs41SD0Vt6IXYLMm.jpg"
  },
  {
    "id": 6,
    "title": "Inception",
    "release_date": "2010-07-16",
    "year": 2010,
    "runtime": 148,
    "rating": 8.8,
    "liked_people": 2345678,
    "poster": "https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg"
  },
  {
    "id": 7,
    "title": "Fight Club",
    "release_date": "1999-10-15",
    "year": 1999,
    "runtime": 139,
    "rating": 8.8,
    "liked_people": 2234567,
    "poster": "https://image.tmdb.org/t/p/w500/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg"
  },
  {
    "id": 8,
    "title": "The Matrix",
    "release_date": "1999-03-31",
    "year": 1999,
    "runtime": 136,
    "rating": 8.7,
    "liked_people": 1987654,
    "poster": "https://image.tmdb.org/t/p/w500/aOIuZAjPaRIE6CMzbazvcHuHXDc.jpg"
  },
  {
    "id": 9,
    "title": "Interstellar",
    "release_date": "2014-11-07",
    "year": 2014,
    "runtime": 169,
    "rating": 8.6,
    "liked_people": 2456789,
    "poster": "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqoNMJQ3XvJc3Y.jpg"
  },
  {
    "id": 10,
    "title": "Gladiator",
    "release_date": "2000-05-05",
    "year": 2000,
    "runtime": 155,
    "rating": 8.5,
    "liked_people": 1675432,
    "poster": "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg"
  },
  {
    "id": 11,
    "title": "The Lion King",
    "release_date": "1994-06-24",
    "year": 1994,
    "runtime": 88,
    "rating": 8.5,
    "liked_people": 1876544,
    "poster": "https://image.tmdb.org/t/p/w500/2bXbqYdUdNVa8VIWXVfclP2ICtT.jpg"
  },
  {
    "id": 12,
    "title": "The Avengers",
    "release_date": "2012-05-04",
    "year": 2012,
    "runtime": 143,
    "rating": 8.0,
    "liked_people": 2567890,
    "poster": "https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg"
  },
  {
    "id": 13,
    "title": "Avengers: Endgame",
    "release_date": "2019-04-26",
    "year": 2019,
    "runtime": 181,
    "rating": 8.4,
    "liked_people": 3123456,
    "poster": "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg"
  },
  {
    "id": 14,
    "title": "Titanic",
    "release_date": "1997-12-19",
    "year": 1997,
    "runtime": 195,
    "rating": 7.9,
    "liked_people": 1984567,
    "poster": "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg"
  },
  {
    "id": 15,
    "title": "Joker",
    "release_date": "2019-10-04",
    "year": 2019,
    "runtime": 122,
    "rating": 8.4,
    "liked_people": 1765432,
    "poster": "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"
  },
  {
    "id": 16,
    "title": "Parasite",
    "release_date": "2019-05-30",
    "year": 2019,
    "runtime": 132,
    "rating": 8.6,
    "liked_people": 1654321,
    "poster": "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg"
  },
  {
    "id": 17,
    "title": "Whiplash",
    "release_date": "2014-10-10",
    "year": 2014,
    "runtime": 106,
    "rating": 8.5,
    "liked_people": 1543210,
    "poster": "https://image.tmdb.org/t/p/w500/oPxnRhyAIzJKGUEdSiwTJQBa3NM.jpg"
  },
  {
    "id": 18,
    "title": "The Departed",
    "release_date": "2006-10-06",
    "year": 2006,
    "runtime": 151,
    "rating": 8.5,
    "liked_people": 1432109,
    "poster": "https://image.tmdb.org/t/p/w500/nT97ifVT2J1yMQmeq20Qblg61T.jpg"
  },
  {
    "id": 19,
    "title": "The Prestige",
    "release_date": "2006-10-20",
    "year": 2006,
    "runtime": 130,
    "rating": 8.5,
    "liked_people": 1321098,
    "poster": "https://image.tmdb.org/t/p/w500/5MXyQfz8xUP3dIFPTubhTsbFY6N.jpg"
  },
  {
    "id": 20,
    "title": "Django Unchained",
    "release_date": "2012-12-25",
    "year": 2012,
    "runtime": 165,
    "rating": 8.4,
    "liked_people": 1210987,
    "poster": "https://image.tmdb.org/t/p/w500/7oWY8VDWW7thTzWh3OKYRkWUlD5.jpg"
  },
  {
    "id": 21,
    "title": "The Wolf of Wall Street",
    "release_date": "2013-12-25",
    "year": 2013,
    "runtime": 180,
    "rating": 8.2,
    "liked_people": 1109876,
    "poster": "https://image.tmdb.org/t/p/w500/sOxr33wnRuKazR9ClHek73T8qnK.jpg"
  },
  {
    "id": 22,
    "title": "Mad Max: Fury Road",
    "release_date": "2015-05-15",
    "year": 2015,
    "runtime": 120,
    "rating": 8.1,
    "liked_people": 1098765,
    "poster": "https://image.tmdb.org/t/p/w500/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg"
  },
  {
    "id": 23,
    "title": "Logan",
    "release_date": "2017-03-03",
    "year": 2017,
    "runtime": 137,
    "rating": 8.1,
    "liked_people": 987654,
    "poster": "https://image.tmdb.org/t/p/w500/fnbjcRDYn6YviCcePDnGdyAkYsB.jpg"
  },
  {
    "id": 24,
    "title": "John Wick",
    "release_date": "2014-10-24",
    "year": 2014,
    "runtime": 101,
    "rating": 7.4,
    "liked_people": 876543,
    "poster": "https://image.tmdb.org/t/p/w500/5vHssUeVe25bMrof1HyaPyWgaP.jpg"
  },
  {
    "id": 25,
    "title": "The Batman",
    "release_date": "2022-03-04",
    "year": 2022,
    "runtime": 176,
    "rating": 7.9,
    "liked_people": 765432,
    "poster": "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg"
  }

]

  return (
    <>
    <div className="pt-16 px-4">

    {/* Responsive Grid */}
    <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto'>

        {m1.map((elem,idx)=>{
       return (

        <div 
          key={idx} 
          className='flex flex-col bg-white rounded-md shadow-md overflow-hidden transition duration-500 hover:scale-105'
        >

         {/* Image */}
         <img 
           src={elem.poster} 
           className='w-full h-64 md:h-72 object-cover'
           alt="movie"
         />

         {/* Info Section */}
         <div className='p-4 bg-gray-200 flex flex-col justify-between flex-1'>

             <h1 className='text-xl md:text-2xl font-bold mb-2'>
               Show Info
             </h1>

           <div className='space-y-1 text-sm md:text-base'>
             <h1 className='font-bold'>{elem.title}</h1>
             <h1 className='text-green-500 font-bold'>
               IMDB Rating:- {elem.rating}
             </h1>
             <h1 className='font-bold'>Show Type: Movies</h1>
             <h1 className='font-bold'>Date: {elem.year}</h1>
             <h1 className='font-bold'>Release Date: {elem.release_date}</h1>
             <h1 className='font-bold'>Watching Time: {elem.runtime}</h1>
           </div>

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

export default Marvel