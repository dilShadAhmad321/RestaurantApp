import React from 'react'
import { Route, Routes} from 'react-router-dom'
import Home from '../pages/Home'
import Register from '../pages/Register'
import Login from '../pages/Login'
import About from '../pages/About'
import Chef from '../pages/Chef'
import Contact from '../pages/Contact'
import Offer from '../pages/Offer'
import Booking from '../pages/Booking'
import ThankYou from '../pages/ThankYou'



const Routing = () => {
  return (

    <Routes>
      <Route exact path='/' element={<Home/>}></Route>
      <Route exact path='/login' element={<Login/>}></Route>
      <Route exact path='/register' element={<Register/>}></Route>
      <Route exact path='/about' element={<About/>}></Route>
      <Route exact path='/chef' element={<Chef/>}></Route>
      <Route exact path='/contact' element={<Contact/>}></Route>
      <Route exact path='/thank-you' element={<ThankYou/>}></Route>
      <Route exact path='/offer' element={<Offer/>}></Route>
      <Route exact path='/booking' element={<Booking/>}></Route>
    </Routes>
  )
}

export default Routing
