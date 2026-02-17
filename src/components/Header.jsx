import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0a0a]/80 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'
        }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold tracking-tighter">
          NANDA<span className="text-gray-500">.</span>
        </a>
        <nav className="hidden md:flex space-x-8">
          {['About', 'Education', 'Experience', 'Volunteer', 'Projects', 'Skills', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={(e) => {
                e.preventDefault();
                const target = document.getElementById(item.toLowerCase());
                if (target && window.lenis) {
                  window.lenis.scrollTo(target);
                }
              }}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
