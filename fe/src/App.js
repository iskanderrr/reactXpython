import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home"
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Donate from './DonateNow/Donate';
import About from './About/About';
import Story from './Story/Story';
import Admin from './Admin/Admin';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/donate-now" index element={<Donate />} />
        <Route path="/about" index element={<About />} />
        <Route path="/story" index element={<Story />} />
        <Route path="/admin" index element={<Admin />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
