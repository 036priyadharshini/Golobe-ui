import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Header/Navbar'
import Footer from './components/Footer/Footer'
import Home from "./pages/Home"
import Stays from "./pages/FindStays"
// import HotelListing from "./pages/HotelListing"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Layout from "./pages/Layout";
import FindStays from './pages/FindStays'
import Hoteldetail from './pages/HotelDetails'
import HotelListing from './pages/HotelListing'
import BookingDetail from './pages/BookingDetailsPage'
import Profile from './pages/Profile'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<FindStays />} />
            <Route path='login' element={<Login />}></Route>
            <Route path='signup' element={<Signup />}></Route>
            <Route path='hotel-listing' element={<HotelListing />}></Route>
            <Route path="hotel-details" element={<Hoteldetail />} />
            <Route path='booking-details' element={<BookingDetail />}></Route>
            <Route path='profile' element={<Profile />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;