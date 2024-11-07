// src/MainLayout/MainLayout.js
import React from 'react';
import Header from '../components/Header/Header';
import Home from '../components/Home/Home';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import PopularItems from '../components/PopularItems/PopularItems';
import Testimonial from '../components/Testimonial/Testimonial';
import Footer from '../components/Footer/Footer';

function MainLayout() {
  return (
    <div>
      <Header />
        {/* <div className='max-w-7xl mx-auto'> */}
        <Home />
        <About />
        <PopularItems></PopularItems>
        <Contact />
        <Testimonial></Testimonial>
        <Footer></Footer>
        {/* </div> */}
    </div>
  );
}

export default MainLayout;
