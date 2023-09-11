import React from "react";

import Hero from "../components/Hero";
import Info from "../components/Info";
import About from "../components/About";
import BookAppointment from "../components/BookAppointment";
import Reviews from "../components/Reviews";
import Doctors from "../components/Doctors";
import Footer from "../components/Footer";
import TestPrediction from '../components/ModelForm/TestPrediction'
function Home() {
  return (
    <div className="home-section">
      
      <Hero />
      <TestPrediction/>
      <Info />
      <About />
      <BookAppointment />
      <Reviews />
      <Doctors />
      <Footer />
    </div>
  );
}

export default Home;
