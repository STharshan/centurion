import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import About from "./pages/About";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import MOT from "./pages/MOT";
import Tyre from "./pages/Tyre";
import OEM from "./pages/OEM";
import Ghost from "./pages/Ghost";
import Shock from "./pages/Shock";
import Exhausts from "./pages/Exhausts";
import Brake from "./pages/Brake";
import Battery from "./pages/Battery";
import Clutch from "./pages/Clutch";
import TimingBelt from "./pages/TimingBelt";
import VehicleSafety from "./pages/VehicleSafety";
import ScrollToTop from "./components/ScrollToTop";
import Aircon from "./pages/Airconpage";
import SmartRepair from "./pages/SmartRepair";
import ReviewPage from "./pages/Review";
import TermsConditions from "./components/Term";
import PrivacyPolicy from "./components/PrivacyPolicy";
import GDPRConsent from "./components/GDPRButton";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,       // animation only once
      offset: 100,      // trigger distance
    });
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/review" element={<ReviewPage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service/mot" element={<MOT />} />
        <Route path="/service/tyre" element={<Tyre />} />
        <Route path="/service/smart-repair" element={<SmartRepair />} />
        <Route path="/service/oem" element={<OEM />} />
        <Route path="/service/ghost" element={<Ghost />} />
        <Route path="/service/shock" element={<Shock />} />
        <Route path="/service/exhausts" element={<Exhausts />} />
        <Route path="/service/brake" element={<Brake />} />
        <Route path="/service/battery" element={<Battery />} />
        <Route path="/service/clutch" element={<Clutch />} />
        <Route path="/service/timing-belt" element={<TimingBelt />} />
        <Route path="/service/aircon" element={<Aircon />} />
        <Route path="/service/vehicle-safety" element={<VehicleSafety />} />
        <Route path="/terms" element={<TermsConditions />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
      <GDPRConsent />
    </Router>
  );
}

export default App;
