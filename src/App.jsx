import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import Cart from "./pages/Cart";

function Home() {
  return (
    <div className="mt-20">
      <Hero />
      <About />
      <Menu />
      <Contact />
      <Footer />
    </div>
  );
}

// Component to handle scrolling to hash sections
function ScrollToSection() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return null;
}

export default function App() {
  return (
    <>
      <Navbar />

      <ScrollToSection /> {/* This will scroll to sections on home page */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}
