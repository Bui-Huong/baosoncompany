import React, { useEffect } from "react";
import Navbar from './Navbar';
import Hero from './Hero';
import Features from './Features';
import Prices from './Prices';
import Review from './Review';
import Footer from './Footer';
import Background from "./images/Background.png";
function Homepage() {
    useEffect(() => {
      document.title="KCTBS | Trang chủ";
    },[]);
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <>
      <Navbar />
        <div className="max-w-screen overflow-x-hidden font-poppins mt-14 sticky bg-cover bg-center bg-no-repeat w-full min-h-screen bg-fixed " style={{backgroundImage:`url(${Background})`}}>
      <Hero />

          <Features />
        <Prices />
        <Review />
      </div>
        <Footer />



    </>

  )
}
export default Homepage;
