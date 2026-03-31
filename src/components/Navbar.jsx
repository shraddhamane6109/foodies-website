import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const { cart } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Handle clicking section links
  const handleScrollLink = (sectionId) => {
    if (location.pathname !== "/") {
      navigate("/" + sectionId); // go to home page with hash
    } else {
      const el = document.querySelector(sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); // close mobile menu
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-orange-500">Foodies</h1>

        {/* Right side */}
        <div className="flex items-center gap-4">
          {/* Cart */}
          <Link to="/cart" className="relative text-xl">
            🛒
            <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-2 rounded-full">
              {cart ? cart.length : 0}
            </span>
          </Link>

          {/* Hamburger */}
          <button
            className="text-3xl block md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex justify-center gap-8 pb-3 font-medium text-gray-700">
        <ul className="flex gap-6">
          <li><button onClick={() => handleScrollLink("#home")} className="hover:text-orange-500">Home</button></li>
          <li><button onClick={() => handleScrollLink("#about")} className="hover:text-orange-500">About</button></li>
          <li><button onClick={() => handleScrollLink("#menu")} className="hover:text-orange-500">Menu</button></li>
          <li><button onClick={() => handleScrollLink("#contact")} className="hover:text-orange-500">Contact</button></li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-6 py-6">
          <button onClick={() => handleScrollLink("#home")} className="text-lg hover:text-orange-500">Home</button>
          <button onClick={() => handleScrollLink("#about")} className="text-lg hover:text-orange-500">About</button>
          <button onClick={() => handleScrollLink("#menu")} className="text-lg hover:text-orange-500">Menu</button>
          <button onClick={() => handleScrollLink("#contact")} className="text-lg hover:text-orange-500">Contact</button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
