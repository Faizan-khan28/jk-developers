import { useState } from "react";
import {X , Menu} from "lucide-react"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    "About us",
    "Services",
    "Case Studies",
    "Blog",
    "How it Works",
    "Hire",
  ];

  return (
    <nav className="w-full bg-white sticky z-50 top-0 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex justify-between items-center gap-2">
            <img
              src="/public/Vector.png"
              alt="logo"
              className="h-10 object-contain"
            />
            <h1 className="text-black font-inspiration text-2xl">JkDevelopers</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-gray-700 font-inter  hover:text-purple-600 font-medium transition"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Desktop Button */}
          <div className="hidden lg:block">
            <button className="px-6 py-3 cursor-pointer rounded-lg bg-linear-to-r from-purple-600 to-blue-500 text-white font-medium shadow-lg hover:scale-105 transition">
              Contact us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-gray-700 font-medium"
              >
                {link}
              </a>
            ))}

            <button className="mt-2 w-full py-3 cursor-pointer rounded-lg bg-linear-to-r from-purple-600 to-blue-500 text-white font-medium sm:w-31 sm:h-11">
              Contact us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;