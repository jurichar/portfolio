// Components/Navbar.tsx
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'HOME', to: '/' },
    { name: 'ABOUT', to: '/about' },
    { name: 'WORKS', to: '/works' },
    { name: 'CONTACT', to: '/contact' },
    { name: 'RESUME', to: '/' },
  ];

  const handleClick = () => {
    setIsOpen(!isOpen);
    window.scrollTo(0, 0);
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='fixed top-4 left-4 z-[99]'
      >
        <img
          src="/public/assets/icons/Plus.svg"
          alt="Plus icon"
          className={`h-10 w-10 transition-transform hover:scale-110 hover:filter hover:sepia hover:brightness-150 duration-300 ease-in-out ${isOpen ? 'rotate-[135deg]' : ''}`}
        />
      </button >
      <motion.nav
        initial={{ opacity: 0, height: 0, y: -500 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? '100%' : 0, y: isOpen ? 0 : -500 }}
        transition={{ duration: 0.5 }}
        className={`text-white fixed flex justify-around items-center flex-col top-0 left-0 w-screen h-screen backdrop-blur-3xl ${isOpen ? 'z-50' : 'z-0'} p-8 md:p-16 py-32`}
      >
        <AnimatePresence>
          {isOpen &&
            links.map((link, index) => (
              <motion.li
                className='border-b-4 group hover:border-[#FFD700] border-white text-5xl md:text-7xl w-full list-none overflow-hidden'
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 1
                  , ease: [0.76, 0, 0.24, 1]
                }}
              >
                <motion.div
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2, ease: [0.76, 0, 0.24, 1] }}
                  className='w-full h-full'
                >
                  <Link
                    to={link.to}
                    key={index}
                    onClick={() => handleClick()}
                    className='w-full h-full group-hover:tracking-[0.3em] group-hover:text-[#FFD700] transition-all duration-300'
                  >
                    <p className='font-bold'>
                      {link.name}
                    </p>
                  </Link>
                </motion.div>
              </motion.li>
            ))
          }
        </AnimatePresence >
      </motion.nav >
    </>
  );
}

export default Navbar;