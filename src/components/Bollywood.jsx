import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Bollywood = () => {

  const Noti = () => {
    toast.error("Network Error")
  }

  const m1 = [
    {
      id: 1,
      title: "Dangal",
      year: 2016,
      release_date: "2016-12-23",
      runtime: 161,
      rating: 8.4,
      poster: "https://upload.wikimedia.org/wikipedia/en/9/99/Dangal_Poster.jpg"
    },
    {
      id: 2,
      title: "3 Idiots",
      year: 2009,
      release_date: "2009-12-25",
      runtime: 170,
      rating: 8.4,
      poster: "https://upload.wikimedia.org/wikipedia/en/d/df/3_idiots_poster.jpg"
    },
    {
      id: 3,
      title: "PK",
      year: 2014,
      release_date: "2014-12-19",
      runtime: 153,
      rating: 8.1,
      poster: "https://upload.wikimedia.org/wikipedia/en/c/c3/PK_poster.jpg"
    },
    {
      id: 4,
      title: "Bajrangi Bhaijaan",
      year: 2015,
      release_date: "2015-07-17",
      runtime: 163,
      rating: 8.0,
      poster: "https://upload.wikimedia.org/wikipedia/en/6/60/Bajrangi_Bhaijaan_Poster.jpg"
    },
    {
      id: 5,
      title: "Chennai Express",
      year: 2013,
      release_date: "2013-08-09",
      runtime: 141,
      rating: 6.9,
      poster: "https://upload.wikimedia.org/wikipedia/en/1/1b/Chennai_Express_poster.jpg"
    },
    {
      id: 6,
      title: "War",
      year: 2019,
      release_date: "2019-10-02",
      runtime: 154,
      rating: 6.5,
      poster: "https://upload.wikimedia.org/wikipedia/en/6/6c/War_film_poster.jpg"
    },
     {
    "id": 1,
    "title": "Dangal",
    "year": 2016,
    "release_date": "2016-12-23",
    "runtime": 161,
    "rating": 8.4,
    "about": "Biographical sports drama based on wrestler Mahavir Singh Phogat and his daughters.",
    "poster": "https://upload.wikimedia.org/wikipedia/en/9/99/Dangal_Poster.jpg"
  },
  {
    "id": 2,
    "title": "3 Idiots",
    "year": 2009,
    "release_date": "2009-12-25",
    "runtime": 170,
    "rating": 8.4,
    "about": "Comedy-drama about three engineering students and their journey of friendship and self-discovery.",
    "poster": "https://upload.wikimedia.org/wikipedia/en/d/df/3_idiots_poster.jpg"
  },
  {
    "id": 3,
    "title": "Sholay",
    "year": 1975,
    "release_date": "1975-08-15",
    "runtime": 204,
    "rating": 8.2,
    "about": "Classic action-adventure film about two criminals hired to capture a ruthless dacoit.",
    "poster": "https://upload.wikimedia.org/wikipedia/en/5/52/Sholay-poster.jpg"
  },
  {
    "id": 4,
    "title": "Dilwale Dulhania Le Jayenge",
    "year": 1995,
    "release_date": "1995-10-20",
    "runtime": 189,
    "rating": 8.0,
    "about": "Romantic drama about love between Raj and Simran across continents.",
    "poster": "https://upload.wikimedia.org/wikipedia/en/8/80/Dilwale_Dulhania_Le_Jayenge_poster.jpg"
  },
  {
    "id": 5,
    "title": "Lagaan",
    "year": 2001,
    "release_date": "2001-06-15",
    "runtime": 224,
    "rating": 8.1,
    "about": "Village farmers challenge British officers to a cricket match to avoid paying taxes.",
    "poster": "https://upload.wikimedia.org/wikipedia/en/b/b6/Lagaan.jpg"
  },
  {
    "id": 6,
    "title": "Taare Zameen Par",
    "year": 2007,
    "release_date": "2007-12-21",
    "runtime": 165,
    "rating": 8.3,
    "about": "Story of a dyslexic child and his inspiring art teacher.",
    "poster": "https://upload.wikimedia.org/wikipedia/en/b/bc/Taare_Zameen_Par_Poster.jpg"
  },
  {
    "id": 7,
    "title": "Andhadhun",
    "year": 2018,
    "release_date": "2018-10-05",
    "runtime": 139,
    "rating": 8.2,
    "about": "Thriller about a blind pianist entangled in a mysterious murder case.",
    "poster": "https://upload.wikimedia.org/wikipedia/en/4/47/Andhadhun_poster.jpg"
  },
  {
    "id": 8,
    "title": "Drishyam 2",
    "year": 2022,
    "release_date": "2022-11-18",
    "runtime": 142,
    "rating": 8.3,
    "about": "Sequel to Drishyam, continuing the suspenseful story of Vijay Salgaonkar.",
    "poster": "https://upload.wikimedia.org/wikipedia/en/4/4b/Drishyam_2_2022.jpg"
  },
  {
    "id": 9,
    "title": "Pathaan",
    "year": 2023,
    "release_date": "2023-01-25",
    "runtime": 146,
    "rating": 6.1,
    "about": "Action thriller featuring an undercover RAW agent on a high-stakes mission.",
    "poster": "https://upload.wikimedia.org/wikipedia/en/c/c3/Pathaan_film_poster.jpg"
  },
  {
    "id": 10,
    "title": "Gadar 2",
    "year": 2023,
    "release_date": "2023-08-11",
    "runtime": 170,
    "rating": 5.5,
    "about": "Sequel to Gadar, focusing on Tara Singh’s return to Pakistan.",
    "poster": "https://upload.wikimedia.org/wikipedia/en/3/3e/Gadar_2_poster.jpg"
  },
  {
    "id": 11,
    "title": "Mughal-e-Azam",
    "year": 1960,
    "release_date": "1960-08-05",
    "runtime": 197,
    "rating": 8.1,
    "about": "Historical epic about Prince Salim and courtesan Anarkali.",
    "poster": "https://upload.wikimedia.org/wikipedia/en/3/35/Mughal-e-Azam_poster.jpg"
  },
  {
    "id": 12,
    "title": "Uri: The Surgical Strike",
    "year": 2019,
    "release_date": "2019-01-11",
    "runtime": 138,
    "rating": 8.2,
    "about": "Military action film based on the 2016 Uri attack and surgical strike.",
    "poster": "https://upload.wikimedia.org/wikipedia/en/3/3b/Uri_The_Surgical_Strike_poster.jpg"
  },
  {
    "id": 13,
    "title": "Queen",
    "year": 2014,
    "release_date": "2014-03-07",
    "runtime": 146,
    "rating": 8.1,
    "about": "A young woman embarks on a solo honeymoon trip after her wedding is called off.",
    "poster": "https://upload.wikimedia.org/wikipedia/en/4/45/QueenMoviePoster7thMarch.jpg"
  },
  {
    "id": 14,
    "title": "Swades",
    "year": 2004,
    "release_date": "2004-12-17",
    "runtime": 189,
    "rating": 8.2,
    "about": "An NRI returns to India and reconnects with his roots while working for rural development.",
    "poster": "https://upload.wikimedia.org/wikipedia/en/1/1e/Swades_poster.jpg"
  },
  {
    "id": 15,
    "title": "Kabir Singh",
    "year": 2019,
    "release_date": "2019-06-21",
    "runtime": 172,
    "rating": 7.0,
    "about": "Romantic drama about a brilliant but troubled surgeon dealing with heartbreak.",
    "poster": "https://upload.wikimedia.org/wikipedia/en/d/dc/Kabir_Singh.jpg"
  }
  ]

  return (
    <>
      <div className="grid gap-8 px-4 sm:px-8 py-10 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
        {m1.map((elem) => {
          return (
            <div
              key={elem.id}
              className="flex flex-col lg:flex-row bg-white shadow-lg rounded-xl overflow-hidden transition duration-500 hover:scale-105"
            >
              <img
                src={elem.poster}
                alt={elem.title}
                className="w-full lg:w-1/2 h-72 sm:h-80 object-cover"
              />

              <div className="w-full lg:w-1/2 p-5 bg-gray-100 flex flex-col justify-between">
                <div>
                  <h1 className="text-xl sm:text-2xl font-bold mb-2">
                    {elem.title}
                  </h1>
                  <p className="text-green-600 font-semibold">
                    IMDB Rating: {elem.rating}
                  </p>
                  <p className="font-medium">Show Type: Movies</p>
                  <p className="font-medium">Year: {elem.year}</p>
                  <p className="font-medium">
                    Release Date: {elem.release_date}
                  </p>
                  <p className="font-medium">
                    Watching Time: {elem.runtime} min
                  </p>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-lg sm:text-xl font-bold">
                    $ 9.99
                  </span>

                  <button
                    onClick={Noti}
                    className="font-bold border-2 px-4 py-2 rounded-md hover:bg-blue-500 hover:text-white transition-all duration-300 active:scale-95"
                  >
                    Pay Now
                  </button>
                </div>

                <a
                  href="#"
                  className="mt-3 text-center font-bold underline border-2 border-blue-400 rounded-xl py-2 hover:bg-blue-500 hover:text-white transition-all duration-300 active:scale-95"
                >
                  Watch Now
                </a>
              </div>
            </div>
          )
        })}
      </div>

      <ToastContainer />
    </>
  )
}

export default Bollywood