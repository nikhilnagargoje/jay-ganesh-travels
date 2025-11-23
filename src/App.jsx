import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Packages from "./components/Packages";
import Specialities from "./components/Specialities";
import Services from "./components/Services";
import Vehicles from "./components/Vehicles";
import VehicleDetails from "./components/VehicleDetails";
import DailyTravels from "./components/DailyTravels";
import QrSection from "./components/QrSection";
import About from "./components/About";
import Contact from "./components/Contact";
import Terms from "./components/Terms";
import Footer from "./components/Footer";
import TopPlaces from "./components/TopPlaces";
import FAQ from "./components/FAQ";
import Testimonials from "./components/Testimonials";
import WhyUs from "./components/WhyUs";
import Bubble from "./components/Bubble";


function App() {
  return (
    <BrowserRouter>

      {/* NAVBAR */}
      <Navbar />

      <Routes>

        {/* MAIN HOME PAGE */}
        <Route
          path="/"
          element={
            <>
              <div id="hero">
                <Hero />
              </div>


              <div id="daily">
                <DailyTravels />
              </div>

              <div id="whyus">
                <WhyUs />
              </div>

              <div id="specialities">
                <Specialities />
              </div>
              
              <div id="services">
                <Services />
              </div>

              <div id="qr">
                <QrSection />
              </div>

              <div id="vehicles">
                <Vehicles />
              </div>

              <div id="packages">
                <Packages />
              </div>

              <div id="about">
                <About />
              </div>


              <div id="topplaces">
                <TopPlaces />
              </div>


              <Testimonials />

              <div id="faq">
                <FAQ />
              </div>

              <div id="contact">
                <Contact />
              </div> 

            </>
          }
        />

        {/* DYNAMIC VEHICLE DETAILS PAGE */}
        <Route path="/vehicle/:id" element={<VehicleDetails />} />

        {/* TERMS PAGE */}
        <Route path="/terms" element={<Terms />} />
        
      </Routes>
       
      {/* FOOTER */}
      <Footer />
      <Bubble />

      {/* FIXED CALL BUTTON */}
      <a href="tel:+917721823575" className="call-btn-fixed">
        📞 Call Now
      </a>

    </BrowserRouter>
  );
}

export default App;
