import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './sections/Navbar';
import Carousel from './sections/Hero';
import AllProducts from './sections/AllProducts'; // Assuming this is where AllProducts is located
import ReviewSection from './sections/Review';
import Footer from './sections/Footer';
import Sidebar from './sections/Sidebar';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Sidebar/>
        <Carousel />
        <AllProducts/>
        <ReviewSection/>
        <Footer/>
        <Routes>
        
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;