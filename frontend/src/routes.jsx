import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import Amenities from "./pages/amenities.jsx";
import Room from "./pages/room.jsx";
import Booking from "./pages/booking.jsx";
import Contact from "./pages/contact.jsx";
import NotFound from "./pages/404.jsx";

import HomePage from "./main_pages/homepage.jsx";
import AboutPage from "./main_pages/aboutpage.jsx";
import RoomsPage from "./main_pages/roomspage.jsx";
import ContactPage from "./main_pages/contactpage.jsx";
import AmenitiesPage from "./main_pages/amenitiespage.jsx";
import BookingPage from "./main_pages/bookingpage.jsx";
import Profile from "./main_pages/profile.jsx";
import Settings from "./main_pages/settings.jsx";

const RouterPage = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* main pages */}
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/rooms" element={<Room />}></Route>
        <Route path="/amenities" element={<Amenities />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/booking" element={<Booking />}></Route>
        <Route path="/*" element={<NotFound />}></Route>

        {/* logged in pages */}
        <Route path="/home_page" element={<HomePage />}></Route>
        <Route path="/about_page" element={<AboutPage />}></Route>
        <Route path="/rooms_page" element={<RoomsPage />}></Route>
        <Route path="/contact_page" element={<ContactPage />}></Route>
        <Route path="/amenities_page" element={<AmenitiesPage />}></Route>
        <Route path="/booking_page" element={<BookingPage />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/settings" element={<Settings />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouterPage;
