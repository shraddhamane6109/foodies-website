import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        
        <div>
          <h1 className="text-2xl font-bold text-orange-500">Foodies</h1>
          <p className="mt-3 text-gray-400">
            Delicious food delivered fast to your doorstep.
          </p>

          <div className="flex gap-4 mt-4 text-xl">
            <FaFacebook className="hover:text-orange-500 cursor-pointer" />
            <FaInstagram className="hover:text-orange-500 cursor-pointer" />
            <FaTwitter className="hover:text-orange-500 cursor-pointer" />
          </div>
        </div>

        <div>
          <h2 className="font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold mb-3">Contact</h2>
          <p>📍 Bangalore</p>
          <p>📞 +91 1234567890</p>
        </div>

      </div>

      <div className="text-center text-gray-500 mt-8 text-sm">
        © 2026 Foodies 
      </div>
    </footer>
  );
}

export default Footer;
