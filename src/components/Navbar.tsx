import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <header className="sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 backdrop-blur-md bg-black/30 border-b border-white/10">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-white">
            Azentra<span className="text-brand-purple">.</span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-white/80 hover:text-white transition-colors duration-300 ${isActive ? 'text-brand-purple font-semibold' : ''}`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
          <div className="hidden md:block">
            <Link to="/get-started">
              <button className="bg-brand-purple text-white px-6 py-2 rounded-md font-semibold hover:bg-opacity-80 transition-all duration-300 shadow-[0_0_15px_rgba(139,92,246,0.5)]">
                Get Started
              </button>
            </Link>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden bg-black/50 backdrop-blur-lg absolute w-full"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `text-white/80 hover:text-white text-center py-2 ${isActive ? 'text-brand-purple font-semibold' : ''}`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <Link to="/get-started" onClick={() => setIsOpen(false)} className="w-full">
                <button className="w-full bg-brand-purple text-white px-6 py-2 rounded-md font-semibold hover:bg-opacity-80 transition-all duration-300">
                  Get Started
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
