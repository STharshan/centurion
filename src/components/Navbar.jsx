import React, { useState } from 'react';
import { FiPhone, FiMenu, FiX, FiMail } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT US', path: '/about' },
    { name: 'SERVICES', path: '/services' },
    { name: 'GALLERY', path: '/gallery' },
    { name: 'CONTACT US', path: '/contact' },
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-[#e5e5e5] py-3 px-4 shadow-sm fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between relative">
        {/* Logo */}
        <img
          src="/logo.png"
          alt="Derby Garage Ltd"
          className="h-20 w-auto"
        />

        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-6 font-semibold">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`transition pb-1 ${location.pathname === link.path
                ? 'text-red-600 border-b-2 border-red-600'
                : 'text-black hover:text-red-600'
                }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Contact Info */}
        <div className="hidden md:flex items-center gap-4 text-sm font-medium text-black">
          <div className="flex items-center gap-2 flex-wrap">
            <div className="flex items-center gap-2 flex-wrap">
              <FiPhone className='text-xl' />
              <span>02476 638999</span>
              <span className="mx-1">/</span>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <FiMail className='text-xl' />
              <span>centurionfastfit@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-2xl" onClick={toggleMenu}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden mt-4 px-4 space-y-4 text-sm font-semibold">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)} // close menu on click
                className={`transition pb-1 ${location.pathname === link.path
                  ? 'text-red-600 border-b-2 border-red-600'
                  : 'text-black hover:text-red-600'
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="pt-4 border-t border-gray-300 text-black hidden">
            <div className="flex items-center gap-2 mb-2">
              <FiPhone />
              <span>02476 638999</span>
            </div>
            <div className="flex items-center gap-2 ">
              <FiMail />
              <span>centurionfastfit@gmail.com</span>
            </div>
          </div>
        </div>
      )}

      {/* Image at the bottom of the navbar */}
      <div className="absolute top-26 left-0 right-0 hidden lg:block">
        <img
          src="/brand.png"  // Update with your image path
          alt="Bottom Image"
          className="w-full h-16"  // Adjust height as needed
        />
      </div>
    </header>
  );
};

export default Navbar;
