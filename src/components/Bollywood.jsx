import React from 'react'
import { ToastContainer,toast } from 'react-toastify'

const Bollywood = () => {
  let Noti=()=>{
    toast.error("Network Error ")
  }
let m1=[

    { "id": 1, "title": "Dangal", "year": 2016, "release_date": "2016-12-23", "duration": "2h 41m", "imdb_rating": 8.3, "liked": "94%", "watch_time": "161 min", "genre": "Biography/Sport", "image": "https://m.media-amazon.com/images/M/MV5BMTQ4MzQzMzM2Nl5BMl5BanBnXkFtZTgwMTQ1NzU3MDI@._V1_.jpg" },
 // { "id": 2, "title": "3 Idiots", "year": 2009, "release_date": "2009-12-25", "duration": "2h 50m", "imdb_rating": 8.4, "liked": "96%", "watch_time": "170 min", "genre": "Comedy/Drama", "image": "https://m.media-amazon.com/images/M/MV5BNTkyOGVjM2ItZGYxMy00ZWQyLWFhMjgtMWJjOTU2MDE0NGYwXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg" },
  //{ "id": 3, "title": "Sholay", "year": 1975, "release_date": "1975-08-15", "duration": "3h 24m", "imdb_rating": 8.1, "liked": "92%", "watch_time": "204 min", "genre": "Action/Adventure", "image": "https://m.media-amazon.com/images/M/MV5BOGJjMzZmM2UtNjYwYy00ZDEyLWE2M2QtN2U1OWU0NWIzZjdiXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg" },
  { "id": 4, "title": "Lagaan", "year": 2001, "release_date": "2001-06-15", "duration": "3h 44m", "imdb_rating": 8.1, "liked": "90%", "watch_time": "224 min", "genre": "Drama/Musical", "image": "https://m.media-amazon.com/images/M/MV5BNDYxNWUzZmYtOGQxMC00MTdkLTkxOTctYzkyOGIwNWQxZjhmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg" },
 // { "id": 5, "title": "Dilwale Dulhania Le Jayenge", "year": 1995, "release_date": "1995-10-20", "duration": "3h 9m", "imdb_rating": 8.0, "liked": "88%", "watch_time": "189 min", "genre": "Romance/Drama", "image": "https://m.media-amazon.com/images/M/MV5BMDQ2YzEyZGItY2EzMi00YjVjLTgxMjUtZDEzN2IzZGY2MWU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg" },
  { "id": 6, "title": "Gangs of Wasseypur", "year": 2012, "release_date": "2012-06-22", "duration": "5h 21m", "imdb_rating": 8.2, "liked": "91%", "watch_time": "321 min", "genre": "Crime/Action", "image": "https://m.media-amazon.com/images/M/MV5BMTc5NjY4MjUwNF5BMl5BanBnXkFtZTgwODM3NzM5MzE@._V1_.jpg" },
  //{ "id": 7, "title": "Zindagi Na Milegi Dobara", "year": 2011, "release_date": "2011-07-15", "duration": "2h 35m", "imdb_rating": 8.2, "liked": "93%", "watch_time": "155 min", "genre": "Drama/Comedy", "image": "https://m.media-amazon.com/images/M/MV5BZGFmYTI2NzgtZWIwZC00ZGVlLTgzOTYtYzAxYTJlYzkwNzY5XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg" },
  //{ "id": 8, "title": "Andhadhun", "year": 2018, "release_date": "2018-10-05", "duration": "2h 19m", "imdb_rating": 8.2, "liked": "95%", "watch_time": "139 min", "genre": "Thriller/Comedy", "image": "https://m.media-amazon.com/images/M/MV5BZWZhZmVhMjMtZDE4NS00ZWQ5LWJjZTAtMzM2YmU5N2Y2YmE1XkEyXkFqcGdeQXVyMTkzOTcxOTg@._V1_.jpg" },
  //{ "id": 9, "title": "Queen", "year": 2013, "release_date": "2014-03-07", "duration": "2h 26m", "imdb_rating": 8.1, "liked": "89%", "watch_time": "146 min", "genre": "Adventure/Drama", "image": "https://m.media-amazon.com/images/M/MV5BNWYyOWRlOWUtZGJkNy00N2VlLTgxN2EtZDY4MWU4N2ZkM2QzXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg" },
  //{ "id": 10, "title": "Tumbbad", "year": 2018, "release_date": "2018-10-12", "duration": "1h 44m", "imdb_rating": 8.2, "liked": "96%", "watch_time": "104 min", "genre": "Horror/Fantasy", "image": "https://m.media-amazon.com/images/M/MV5BYmQxNmU4N2ItOTU1Mi00YmQyLTgzMWUtYzc5YjdmNWQ3NzE5XkEyXkFqcGdeQXVyMTkzOTcxOTg@._V1_.jpg" },
  //{ "id": 11, "title": "Swades", "year": 2004, "release_date": "2004-12-17", "duration": "3h 9m", "imdb_rating": 8.2, "liked": "92%", "watch_time": "189 min", "genre": "Drama", "image": "https://m.media-amazon.com/images/M/MV5BYzExYjU0YTMtYmJmNC00YzEwLThjMTMtNWIyZDc3MjYxY2FmXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg" },
  //{ "id": 12, "title": "Bajrangi Bhaijaan", "year": 2015, "release_date": "2015-07-17", "duration": "2h 43m", "imdb_rating": 8.1, "liked": "94%", "watch_time": "163 min", "genre": "Action/Comedy", "image": "https://m.media-amazon.com/images/M/MV5BMjA5NzkxNTg2M15BMl5BanBnXkFtZTgwMDU2NzEwNjE@._V1_.jpg" },
  //{ "id": 13, "title": "Bhaag Milkha Bhaag", "year": 2013, "release_date": "2013-07-12", "duration": "3h 6m", "imdb_rating": 8.2, "liked": "91%", "watch_time": "186 min", "genre": "Biography/Sport", "image": "https://m.media-amazon.com/images/M/MV5BMTY1OTI5NjYwN15BMl5BanBnXkFtZTcwOTQ5MzU0OQ@@._V1_.jpg" },
  //{ "id": 14, "title": "Drishyam", "year": 2015, "release_date": "2015-07-31", "duration": "2h 43m", "imdb_rating": 8.2, "liked": "97%", "watch_time": "163 min", "genre": "Crime/Thriller", "image": "https://m.media-amazon.com/images/M/MV5BYmJhZmJlYTItZmZlNy00MGY0LWEzOTItYWVjMzFlY2U4Y2I2XkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg" },
  { "id": 15, "title": "PK", "year": 2014, "release_date": "2014-12-19", "duration": "2h 33m", "imdb_rating": 8.1, "liked": "92%", "watch_time": "153 min", "genre": "Sci-Fi/Comedy", "image": "https://m.media-amazon.com/images/M/MV5BMTYzOTE2NjkxN15BMl5BanBnXkFtZTgwMDgzMTg0MzE@._V1_.jpg" },
  //{ "id": 16, "title": "Article 15", "year": 2019, "release_date": "2019-06-28", "duration": "2h 10m", "imdb_rating": 8.1, "liked": "93%", "watch_time": "130 min", "genre": "Crime/Drama", "image": "https://m.media-amazon.com/images/M/MV5BZjY5ZjQyMjMtYzEwOC00NGE2LWFmNGYtY2U3MGRjYmRkZDRiXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg" },
  //{ "id": 17, "title": "Barfi!", "year": 2012, "release_date": "2012-09-14", "duration": "2h 31m", "imdb_rating": 8.1, "liked": "90%", "watch_time": "151 min", "genre": "Comedy/Romance", "image": "https://m.media-amazon.com/images/M/MV5BMTQwMTM2MjE4Ml5BMl5BanBnXkFtZTcwMDEwMDA3OA@@._V1_.jpg" },
  //{ "id": 18, "title": "Udaan", "year": 2010, "release_date": "2010-07-16", "duration": "2h 18m", "imdb_rating": 8.1, "liked": "94%", "watch_time": "138 min", "genre": "Drama", "image": "https://m.media-amazon.com/images/M/MV5BNTczM2VjYjgtZGE5ZC00NTNmLTkxMDUtZTIyZTM1Y2UyY2Y2XkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_.jpg" },
  //{ "id": 19, "title": "Hera Pheri", "year": 2000, "release_date": "2000-03-31", "duration": "2h 36m", "imdb_rating": 8.1, "liked": "98%", "watch_time": "156 min", "genre": "Comedy/Action", "image": "https://m.media-amazon.com/images/M/MV5BMzQ0ZGVmNDMtOTllMi00ZDJiLTk3M2ItOTQ4ZGRhOWVlYjUyXkEyXkFqcGdeQXVyNjkwOTg4MTA@._V1_.jpg" },
  //{ "id": 20, "title": "Haider", "year": 2014, "release_date": "2014-10-02", "duration": "2h 40m", "imdb_rating": 8.0, "liked": "87%", "watch_time": "160 min", "genre": "Crime/Drama", "image": "https://m.media-amazon.com/images/M/MV5BMmU1NmUxMTYtYzI3My00YTIxLWIwYjQtYzM2MzI4Y2VlOTI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg" },
  //{ "id": 21, "title": "Kahaani", "year": 2012, "release_date": "2012-03-09", "duration": "2h 2m", "imdb_rating": 8.1, "liked": "91%", "watch_time": "122 min", "genre": "Thriller", "image": "https://m.media-amazon.com/images/M/MV5BMTMyNjY4Mjc1N15BMl5BanBnXkFtZTcwMTU0MTkxNw@@._V1_.jpg" },
  //{ "id": 22, "title": "Chak De! India", "year": 2007, "release_date": "2007-08-10", "duration": "2h 33m", "imdb_rating": 8.1, "liked": "95%", "watch_time": "153 min", "genre": "Sport/Drama", "image": "https://m.media-amazon.com/images/M/MV5BMTY3MjE0NDI1MV5BMl5BanBnXkFtZTcwOTQyODU0MQ@@._V1_.jpg" },
  //{ "id": 23, "title": "Dil Chahta Hai", "year": 2001, "release_date": "2001-08-10", "duration": "3h 3m", "imdb_rating": 8.1, "liked": "92%", "watch_time": "183 min", "genre": "Drama/Romance", "image": "https://m.media-amazon.com/images/M/MV5BODlhNGRjNDktN2RiOS00NzkxLWJlZTItYjVlNDMxYzA0NTRkXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg" },
  //{ "id": 24, "title": "My Name Is Khan", "year": 2010, "release_date": "2010-02-12", "duration": "2h 45m", "imdb_rating": 7.9, "liked": "89%", "watch_time": "165 min", "genre": "Drama", "image": "https://m.media-amazon.com/images/M/MV5BMTY5Njg5NDM0NF5BMl5BanBnXkFtZTcwNzg4NjM2Mw@@._V1_.jpg" },
  //{ "id": 25, "title": "Jab We Met", "year": 2007, "release_date": "2007-10-26", "duration": "2h 22m", "imdb_rating": 7.9, "liked": "93%", "watch_time": "142 min", "genre": "Romance/Comedy", "image": "https://m.media-amazon.com/images/M/MV5BMjA0Nzg0MDM0NF5BMl5BanBnXkFtZTcwNDcyNTY0MQ@@._V1_.jpg" },
 // { "id": 26, "title": "Devdas", "year": 2002, "release_date": "2002-07-12", "duration": "3h 5m", "imdb_rating": 7.5, "liked": "85%", "watch_time": "185 min", "genre": "Drama/Romance", "image": "https://m.media-amazon.com/images/M/MV5BMzE1MTYzNTE1N15BMl5BanBnXkFtZTcwMDA2ODU0MQ@@._V1_.jpg" },
 // { "id": 27, "title": "Taare Zameen Par", "year": 2007, "release_date": "2007-12-21", "duration": "2h 42m", "imdb_rating": 8.3, "liked": "96%", "watch_time": "162 min", "genre": "Family/Drama", "image": "https://m.media-amazon.com/images/M/MV5BMjA2OTI0NDY0OV5BMl5BanBnXkFtZTcwOTU5MDIzMQ@@._V1_.jpg" },
 // { "id": 28, "title": "Mughal-E-Azam", "year": 1960, "release_date": "1960-08-05", "duration": "3h 17m", "imdb_rating": 8.1, "liked": "90%", "watch_time": "197 min", "genre": "Drama/History", "image": "https://m.media-amazon.com/images/M/MV5BMjA5OTgxNDE5NV5BMl5BanBnXkFtZTgwNjM3Mzc5MzE@._V1_.jpg" },
 // { "id": 29, "title": "Padmaavat", "year": 2018, "release_date": "2018-01-25", "duration": "2h 44m", "imdb_rating": 7.0, "liked": "82%", "watch_time": "164 min", "genre": "Drama/History", "image": "https://m.media-amazon.com/images/M/MV5BMjA1NjM3NTE0N15BMl5BanBnXkFtZTgwOTkyNzYxNDM@._V1_.jpg" },
 // { "id": 30, "title": "Bajirao Mastani", "year": 2015, "release_date": "2015-12-18", "duration": "2h 38m", "imdb_rating": 7.2, "liked": "84%", "watch_time": "158 min", "genre": "History/Romance", "image": "https://m.media-amazon.com/images/M/MV5BMjA3NjEwMTY0N15BMl5BanBnXkFtZTgwNjA2NzI4NzE@._V1_.jpg" },
 // { "id": 31, "title": "War", "year": 2019, "release_date": "2019-10-02", "duration": "2h 34m", "imdb_rating": 6.5, "liked": "78%", "watch_time": "154 min", "genre": "Action/Thriller", "image": "https://m.media-amazon.com/images/M/MV5BNTlmNDMzNDgtYWVjMS00NDQ5LTgyN2ItOTU3NjA2ZWFhN2I2XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg" },
 // { "id": 32, "title": "Sanju", "year": 2018, "release_date": "2018-06-29", "duration": "2h 39m", "imdb_rating": 7.6, "liked": "88%", "watch_time": "159 min", "genre": "Biography/Drama", "image": "https://m.media-amazon.com/images/M/MV5BMjQyMzE0MDQ3M15BMl5BanBnXkFtZTgwNDU1MzM1NTM@._V1_.jpg" },
  //{ "id": 33, "title": "Gully Boy", "year": 2019, "release_date": "2019-02-14", "duration": "2h 34m", "imdb_rating": 7.9, "liked": "86%", "watch_time": "154 min", "genre": "Musical/Drama", "image": "https://m.media-amazon.com/images/M/MV5BM2M1NWQ1OTQtNTE0Zi00N2EzLThmZTMtZGJlZDZlYWNlYjVlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg" },
  //{ "id": 34, "title": "Bahubali: The Beginning", "year": 2015, "release_date": "2015-07-10", "duration": "2h 39m", "imdb_rating": 8.0, "liked": "92%", "watch_time": "159 min", "genre": "Action/Fantasy", "image": "https://m.media-amazon.com/images/M/MV5BYWVlMjVhZWYtNWViNC00ODFkLTk1MmEtNDFiNzc1NDM3ZTIxXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg" },
  //{ "id": 35, "title": "Pink", "year": 2016, "release_date": "2016-09-16", "duration": "2h 16m", "imdb_rating": 8.1, "liked": "91%", "watch_time": "136 min", "genre": "Crime/Drama", "image": "https://m.media-amazon.com/images/M/MV5BNjU0Njk0NTI2NV5BMl5BanBnXkFtZTgwMDU2Njg2OTE@._V1_.jpg" },
  //{ "id": 36, "title": "M.S. Dhoni: The Untold Story", "year": 2016, "release_date": "2016-09-30", "duration": "3h 10m", "imdb_rating": 7.9, "liked": "95%", "watch_time": "190 min", "genre": "Biography/Sport", "image": "https://m.media-amazon.com/images/M/MV5BZjAzZjZiMmQtMDZmOC00NjVmLTkyNTgtOTZmODFmN2JiZTI1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg" },
  //{ "id": 37, "title": "Kabir Singh", "year": 2019, "release_date": "2019-06-21", "duration": "2h 52m", "imdb_rating": 7.0, "liked": "80%", "watch_time": "172 min", "genre": "Drama/Romance", "image": "https://m.media-amazon.com/images/M/MV5BMjA1NTI0MDY0OV5BMl5BanBnXkFtZTgwNTQyMTA1NTM@._V1_.jpg" },
  //{ "id": 38, "title": "Shershaah", "year": 2021, "release_date": "2021-08-12", "duration": "2h 15m", "imdb_rating": 8.4, "liked": "97%", "watch_time": "135 min", "genre": "Action/Biography", "image": "https://m.media-amazon.com/images/M/MV5BMmU1ODRhY2YtNmY3Mi00NmQ0LWI0YjMtYTRiZGMwNDg1Yzk1XkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg" },
  //{ "id": 39, "title": "Super 30", "year": 2019, "release_date": "2019-07-12", "duration": "2h 35m", "imdb_rating": 8.0, "liked": "93%", "watch_time": "155 min", "genre": "Biography/Drama", "image": "https://m.media-amazon.com/images/M/MV5BYTJmNGY2MWYtYTkyZi00ZGRkLWEyZmYtNWIzM2ZlMTY0NDYwXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg" },
  //{ "id": 40, "title": "Newton", "year": 2017, "release_date": "2017-09-22", "duration": "1h 46m", "imdb_rating": 7.6, "liked": "85%", "watch_time": "106 min", "genre": "Comedy/Drama", "image": "https://m.media-amazon.com/images/M/MV5BMjM1Nzk3OTI5MV5BMl5BanBnXkFtZTgwNjA2MjgyMzI@._V1_.jpg" },
  //{ "id": 41, "title": "Drishyam 2", "year": 2022, "release_date": "2022-11-18", "duration": "2h 20m", "imdb_rating": 8.2, "liked": "96%", "watch_time": "140 min", "genre": "Crime/Thriller", "image": "https://m.media-amazon.com/images/M/MV5BM2NmMDQ1ZGMtNDcxZC00OTQ2LThlOTktOTlhZDA2OTY4ZDAzXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg" },
  //{ "id": 42, "title": "Brahmastra", "year": 2022, "release_date": "2022-09-09", "duration": "2h 47m", "imdb_rating": 5.6, "liked": "70%", "watch_time": "167 min", "genre": "Fantasy/Action", "image": "https://m.media-amazon.com/images/M/MV5BMjA0NzE1MTE0OV5BMl5BanBnXkFtZTgwNTQyNzYxNDM@._V1_.jpg" },

  ,//{ "id": 1, "title": "Dangal", "year": 2016, "release_date": "2016-12-23", "duration": "2h 41m", "imdb_rating": 8.3, "liked": "94%", "watch_time": "161 min", "genre": "Biography/Sport", "image": "https://picsum.photos/seed/dangal/400/600" },
 // { "id": 2, "title": "3 Idiots", "year": 2009, "release_date": "2009-12-25", "duration": "2h 50m", "imdb_rating": 8.4, "liked": "96%", "watch_time": "170 min", "genre": "Comedy/Drama", "image": "https://picsum.photos/seed/idiots/400/600" },
  //{ "id": 3, "title": "Sholay", "year": 1975, "release_date": "1975-08-15", "duration": "3h 24m", "imdb_rating": 8.1, "liked": "92%", "watch_time": "204 min", "genre": "Action/Adventure", "image": "https://picsum.photos/seed/sholay/400/600" },
   { "id": 1, "title": "Dangal", "year": 2016, "release_date": "2016-12-23", "duration": "2h 41m", "imdb_rating": 8.3, "liked": "94%", "watch_time": "161 min", "genre": "Biography/Sport", "image": "https://m.media-amazon.com/images/M/MV5BMTQ4MzQzMzM2Nl5BMl5BanBnXkFtZTgwMTQ1NzU3MDI@._V1_.jpg" },
  { "id": 2, "title": "3 Idiots", "year": 2009, "release_date": "2009-12-25", "duration": "2h 50m", "imdb_rating": 8.4, "liked": "96%", "watch_time": "170 min", "genre": "Comedy/Drama", "image": "https://m.media-amazon.com/images/M/MV5BNTkyOGVjM2ItZGYxMy00ZWQyLWFhMjgtMWJjOTU2MDE0NGYwXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg" },
  //{ "id": 3, "title": "Sholay", "year": 1975, "release_date": "1975-08-15", "duration": "3h 24m", "imdb_rating": 8.1, "liked": "92%", "watch_time": "…


  ,{
    "id": 1,
    "title": "Dangal",
    "year": 2016,
    "release_date": "2016-12-23",
    "runtime": 161,
    "rating": 8.4,
    "poster": "https://upload.wikimedia.org/wikipedia/en/9/99/Dangal_Poster.jpg"
  },
  {
    "id": 2,
    "title": "3 Idiots",
    "year": 2009,
    "release_date": "2009-12-25",
    "runtime": 170,
    "rating": 8.4,
    "poster": "https://upload.wikimedia.org/wikipedia/en/d/df/3_idiots_poster.jpg"
  },
  {
    "id": 3,
    "title": "PK",
    "year": 2014,
    "release_date": "2014-12-19",
    "runtime": 153,
    "rating": 8.1,
    "poster": "https://upload.wikimedia.org/wikipedia/en/c/c3/PK_poster.jpg"
  },
  {
    "id": 4,
    "title": "Bajrangi Bhaijaan",
    "year": 2015,
    "release_date": "2015-07-17",
    "runtime": 163,
    "rating": 8.0,
    "poster": "https://upload.wikimedia.org/wikipedia/en/6/60/Bajrangi_Bhaijaan_Poster.jpg"
  },
  {
    "id": 5,
    "title": "Chennai Express",
    "year": 2013,
    "release_date": "2013-08-09",
    "runtime": 141,
    "rating": 6.9,
    "poster": "https://upload.wikimedia.org/wikipedia/en/1/1b/Chennai_Express_poster.jpg"
  },
  {
    "id": 6,
    "title": "War",
    "year": 2019,
    "release_date": "2019-10-02",
    "runtime": 154,
    "rating": 6.5,
    "poster": "https://upload.wikimedia.org/wikipedia/en/6/6c/War_film_poster.jpg"
  },
  {
    "id": 7,
    "title": "Pathaan",
    "year": 2023,
    "release_date": "2023-01-25",
    "runtime": 146,
    "rating": 6.1,
    "poster": "https://upload.wikimedia.org/wikipedia/en/c/c3/Pathaan_film_poster.jpg"
  },
  {
    "id": 8,
    "title": "Gadar 2",
    "year": 2023,
    "release_date": "2023-08-11",
    "runtime": 170,
    "rating": 5.5,
    "poster": "https://upload.wikimedia.org/wikipedia/en/3/3e/Gadar_2_poster.jpg"
  },
  {
    "id": 9,
    "title": "Kabir Singh",
    "year": 2019,
    "release_date": "2019-06-21",
    "runtime": 172,
    "rating": 7.0,
    "poster": "https://upload.wikimedia.org/wikipedia/en/d/dc/Kabir_Singh.jpg"
  },
  {
    "id": 10,
    "title": "Andhadhun",
    "year": 2018,
    "release_date": "2018-10-05",
    "runtime": 139,
    "rating": 8.2,
    "poster": "https://upload.wikimedia.org/wikipedia/en/4/47/Andhadhun_poster.jpg"
  },
  {
    "id": 11,
    "title": "Drishyam",
    "year": 2015,
    "release_date": "2015-07-31",
    "runtime": 163,
    "rating": 8.2,
    "poster": "https://upload.wikimedia.org/wikipedia/en/8/8a/Drishyam_2015_film.jpg"
  },
  {
    "id": 12,
    "title": "Drishyam 2",
    "year": 2022,
    "release_date": "2022-11-18",
    "runtime": 142,
    "rating": 8.3,
    "poster": "https://upload.wikimedia.org/wikipedia/en/4/4b/Drishyam_2_2022.jpg"
  },
  {
    "id": 13,
    "title": "Tiger Zinda Hai",
    "year": 2017,
    "release_date": "2017-12-22",
    "runtime": 161,
    "rating": 5.9,
    "poster": "https://upload.wikimedia.org/wikipedia/en/1/1e/Tiger_Zinda_Hai_poster.jpg"
  },
  {
    "id": 14,
    "title": "Sultan",
    "year": 2016,
    "release_date": "2016-07-06",
    "runtime": 170,
    "rating": 7.0,
    "poster": "https://upload.wikimedia.org/wikipedia/en/1/16/Sultan_poster.jpg"
  },
  {
    "id": 15,
    "title": "Sanju",
    "year": 2018,
    "release_date": "2018-06-29",
    "runtime": 155,
    "rating": 7.7,
    "poster": "https://upload.wikimedia.org/wikipedia/en/8/85/Sanju_poster.jpg"
  },
  {
    "id": 16,
    "title": "Lagaan",
    "year": 2001,
    "release_date": "2001-06-15",
    "runtime": 224,
    "rating": 8.1,
    "poster": "https://upload.wikimedia.org/wikipedia/en/b/b6/Lagaan.jpg"
  },
  {
    "id": 17,
    "title": "Taare Zameen Par",
    "year": 2007,
    "release_date": "2007-12-21",
    "runtime": 165,
    "rating": 8.3,
    "poster": "https://upload.wikimedia.org/wikipedia/en/b/bc/Taare_Zameen_Par_Poster.jpg"
  },
  {
    "id": 18,
    "title": "Zindagi Na Milegi Dobara",
    "year": 2011,
    "release_date": "2011-07-15",
    "runtime": 155,
    "rating": 8.2,
    "poster": "https://upload.wikimedia.org/wikipedia/en/0/01/Zindagi_Na_Milegi_Dobara.jpg"
  },
  {
    "id": 19,
    "title": "Dilwale Dulhania Le Jayenge",
    "year": 1995,
    "release_date": "1995-10-20",
    "runtime": 189,
    "rating": 8.0,
    "poster": "https://upload.wikimedia.org/wikipedia/en/8/80/Dilwale_Dulhania_Le_Jayenge_poster.jpg"
  },
  {
    "id": 20,
    "title": "Kuch Kuch Hota Hai",
    "year": 1998,
    "release_date": "1998-10-16",
    "runtime": 185,
    "rating": 7.6,
    "poster": "https://upload.wikimedia.org/wikipedia/en/2/2e/Kuch_Kuch_Hota_Hai.jpg"
  },
  {
    "id": 21,
    "title": "Swades",
    "year": 2004,
    "release_date": "2004-12-17",
    "runtime": 189,
    "rating": 8.2,
    "poster": "https://upload.wikimedia.org/wikipedia/en/1/1e/Swades_poster.jpg"
  },
  {
    "id": 22,
    "title": "Queen",
    "year": 2014,
    "release_date": "2014-03-07",
    "runtime": 146,
    "rating": 8.1,
    "poster": "https://upload.wikimedia.org/wikipedia/en/4/45/QueenMoviePoster7thMarch.jpg"
  },
  {
    "id": 23,
    "title": "Barfi!",
    "year": 2012,
    "release_date": "2012-09-14",
    "runtime": 151,
    "rating": 8.1,
    "poster": "https://upload.wikimedia.org/wikipedia/en/2/2e/Barfi%21_poster.jpg"
  },
  {
    "id": 24,
    "title": "Gully Boy",
    "year": 2019,
    "release_date": "2019-02-14",
    "runtime": 154,
    "rating": 7.9,
    "poster": "https://upload.wikimedia.org/wikipedia/en/0/07/Gully_Boy_poster.jpg"
  },
  {
    "id": 25,
    "title": "Padmaavat",
    "year": 2018,
    "release_date": "2018-01-25",
    "runtime": 164,
    "rating": 7.0,
    "poster": "https://upload.wikimedia.org/wikipedia/en/0/0f/Padmaavat_poster.jpg"
  },
  {
    "id": 26,
    "title": "Rockstar",
    "year": 2011,
    "release_date": "2011-11-11",
    "runtime": 159,
    "rating": 7.7,
    "poster": "https://upload.wikimedia.org/wikipedia/en/5/5f/Rockstar_Poster.jpg"
  },
  {
    "id": 27,
    "title": "Uri: The Surgical Strike",
    "year": 2019,
    "release_date": "2019-01-11",
    "runtime": 138,
    "rating": 8.2,
    "poster": "https://upload.wikimedia.org/wikipedia/en/3/3b/Uri_The_Surgical_Strike_poster.jpg"
  },
  {
    "id": 28,
    "title": "Raazi",
    "year": 2018,
    "release_date": "2018-05-11",
    "runtime": 138,
    "rating": 7.8,
    "poster": "https://upload.wikimedia.org/wikipedia/en/2/24/Raazi_poster.jpg"
  },
  {
    "id": 29,
    "title": "Sholay",
    "year": 1975,
    "release_date": "1975-08-15",
    "runtime": 204,
    "rating": 8.2,
    "poster": "https://upload.wikimedia.org/wikipedia/en/5/52/Sholay-poster.jpg"
  },
  {
    "id": 30,
    "title": "Mughal-e-Azam",
    "year": 1960,
    "release_date": "1960-08-05",
    "runtime": 197,
    "rating": 8.1,
    "poster": "https://upload.wikimedia.org/wikipedia/en/3/35/Mughal-e-Azam_poster.jpg"
  },
  {
    "id": 31,
    "title": "Kal Ho Naa Ho",
    "year": 2003,
    "release_date": "2003-11-28",
    "runtime": 186,
    "rating": 7.9,
    "poster": "https://upload.wikimedia.org/wikipedia/en/4/45/Kal_Ho_Naa_Ho.jpg"
  },
  {
    "id": 32,
    "title": "Bhool Bhulaiyaa",
    "year": 2007,
    "release_date": "2007-10-12",
    "runtime": 159,
    "rating": 7.4,
    "poster": "https://upload.wikimedia.org/wikipedia/en/2/26/Bhool_Bhulaiyaa_poster.jpg"
  },
  {
    "id": 33,
    "title": "Bhool Bhulaiyaa 2",
    "year": 2022,
    "release_date": "2022-05-20",
    "runtime": 143,
    "rating": 6.6,
    "poster": "https://upload.wikimedia.org/wikipedia/en/2/2a/Bhool_Bhulaiyaa_2_poster.jpg"
  },
  {
    "id": 34,
    "title": "Don",
    "year": 2006,
    "release_date": "2006-10-20",
    "runtime": 169,
    "rating": 7.1,
    "poster": "https://upload.wikimedia.org/wikipedia/en/0/0e/Don_The_Chase_Begins_Again_poster.jpg"
  },
  {
    "id": 35,
    "title": "Don 2",
    "year": 2011,
    "release_date": "2011-12-23",
    "runtime": 148,
    "rating": 7.0,
    "poster": "https://upload.wikimedia.org/wikipedia/en/2/2c/Don_2_poster.jpg"
  }
]
  return (
    <>
     <div className='grid  gap-5 w-dvw ml-7  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2' >
        {m1.map((elem,idx)=>{
       return <div key={idx} className='border-1 flex justify-evenly rounded-md mt-20 h-85 w-150 transition duration-500 hover:scale-105'>
         <img src={elem.poster|| elem.image} className='h-80 rounded-md '/>

         <div className=' h-80 rounded-md w-70  bg-gray-200 shadow-md'>
             <h1 className='text-2xl ml-2'>Show Info</h1>
           <h1 className='text-2xl ml-2'>{elem.title}</h1>
        <h1 className='text-green-500 font-bold'>IMDB Rating:- {elem.rating}</h1>
        <h1 className='font-bold'>Show Type: {'Movies'}</h1>
         <h1 className='font-bold'>Date: {elem.year}</h1>
          <h1 className='font-bold'>Release Date: {elem.release_date}</h1>
         <h1 className='font-bold'>Watching Time: {elem.runtime}</h1>
         <h1 className='text-5px font-bold'>Liked:{elem.liked}</h1>
          <div className='flex justify-evenly '>
          <h1 className='text-2xl hover:text-red-500'>{'$ 9.99'}</h1>
          <button className='font-bold border-2 h-10 w-20 rounded-md hover:bg-blue-500 hover:text-white transition-all duration-300 active:scale-120' onClick={Noti}>Pay now</button>
        </div>
        <a href={elem.url} className='font-bold underline hover:bg-blue-500 hover:text-white border-blue-400 w-35  h-15 border-2 flex justify-center rounded-2xl items-center  transition-all duration-300 active:scale-120'>Watch now</a>











         </div>
       
        
       </div>
})
}
    </div>
    <ToastContainer/>
    </>
  )
}

export default Bollywood
