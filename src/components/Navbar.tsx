// Components/Navbar.tsx
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { name: 'HOME', to: '/' },
    { name: 'ABOUT', to: '/about' },
    { name: 'WORKS', to: '/' },
    { name: 'CONTACT', to: '/' },
    { name: 'RESUME', to: '/' },
  ];
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='fixed top-4 left-4 z-50'
      >
        <img
          src="/src/assets/icons/Plus.svg"
          alt="Plus icon"
          className={`h-10 w-10 transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-[135deg]' : ''}`}
        />
      </button>
      <button
        className='fixed top-4 right-4 z-20 text-white'
      >
        FR/EN
      </button>
      <nav
        className={`text-white fixed flex justify-around items-center flex-col top-0 left-0 w-screen h-screen backdrop-blur-3xl z-40 p-16 py-32 transform transition-transform duration-500 ease-in-out ${isOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
      >
        <AnimatePresence>
          {isOpen && (
            links.map((link, index) => (
              <Link
                to={link.to}
                key={index}
                onClick={() => setIsOpen(!isOpen)}
                className='hover:font-bold border-b-2 border-white transition-all ease-in text-7xl w-full'
              >
                <motion.p
                  key={index}
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  exit={{ opacity: 0, x: -100 }}
                >
                  {link.name}
                </motion.p>
              </Link>
            )))}
        </AnimatePresence>
      </nav>
    </>
  );
}

export default Navbar;
