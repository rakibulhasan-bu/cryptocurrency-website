import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';

import Aos from 'aos';
import 'aos/dist/aos.css'
import Header from './components/Header';
import NavMobile from './components/NavMobile';
import Stats from './components/Stats';
import Why from './components/Why';
import Calculate from './components/Calculate';
import Trade from './components/Trade';
import Features from './components/Features';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

const App = () => {
  // useState for mobile navbar
  const [mobileNav, setMobileNav] = useState(false);
  // set useEffect for aos
  useEffect(() => {
    Aos.init({
      duration: 2500,
      delay: 400
    })
  })
  return (
    <div className='overflow-hidden'>
      <Header setMobileNav={setMobileNav} />
      <Hero />

      {/* mobile nav here  */}
      <div className={`${mobileNav ? 'right-0' : '-right-full'} fixed top-0 z-10 transition-all duration-200 h-full`}>
        <NavMobile setMobileNav={setMobileNav} />
      </div>
      <Stats />
      <Why />
      <Calculate />
      <Trade />
      <Features />
      <Newsletter />
      <Footer />
    </div>);
};

export default App;
