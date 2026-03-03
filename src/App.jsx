import axios from 'axios'
import Home from './components/Home'
import { Route,Routes } from 'react-router-dom'
import Page from './components/Page'
import Header from './components/Header'
import About from './components/About'
import Header2 from './components/Header2'
import Marvel from './components/Marvel'
import Bollywood from './components/Bollywood'
import Login from './components/Login'
//import Netflix from './components/Netflix'
//import Search from './components/Search'
const App = () => {



  return (
    <>
<Header/>
<marquee className='text-red-500 relative top-20 font-bold'> 
  <img
        className=" left-10 h-5 w-32 z-10"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" 
       alt="logo"
      />
      </marquee>

 <Routes>
  <Route path='/' element={<Home/>}/>
<Route path='/page' element={<Page/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/marvel' element={<Marvel/>}/>
<Route path='/bollywood' element={<Bollywood/>}/>
<Route path='/login' element={<Login/>}/>
 </Routes>
    </>
  )
}

export default App
