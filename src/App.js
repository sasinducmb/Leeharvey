import './index.css';
import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import AboutUs from './Components/AboutUs';
import Services from './Components/Services';
import ContactUs from './Components/ContactUs';
import GooglePlay from './Components/Googleplay';
import Footer from './Components/Footer';
import BrowserRouter from 'react-router-dom';

import AOS from "aos";
import "aos/dist/aos.css";


function App() {
  
   const [isPlay, setIsPlay] = useState(false);

   const togglePlay = () => {
     setIsPlay(!isPlay);
   };

   useEffect(() => {
     AOS.init({
       offset: 100,
       duration: 800,
       easing: 'ease-in-sine',
       delay: 100,
     });
     AOS.refresh();
   }, []);

  return (
      <main className="overflow-x-hidden bg-white dark:bg-black text-black dark:text-white duration-300">
        {/* <Header /> */}
        <Navbar />
        <Hero />
        <AboutUs />
        <Services />
        <ContactUs />
        <GooglePlay />
        <Footer />
      </main>
  );
}

export default App;
