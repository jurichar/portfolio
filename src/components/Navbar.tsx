// Components/Navbar.tsx
import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import React from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "HOME", to: "/" },
    { name: "ABOUT", to: "/about" },
    { name: "WORKS", to: "/works" },
    { name: "CONTACT", to: "/contact" },
  ];

  const handleClick = useCallback(() => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <button
        className="fixed top-4 left-4 z-[99]"
        onClick={() => setIsOpen(!isOpen)}
        type="button"
      >
        <img
          alt="Plus icon"
          className={`h-10 w-10 transition-transform hover:scale-110 hover:filter hover:sepia hover:brightness-150 duration-300 ease-in-out ${isOpen ? "rotate-[135deg]" : ""}`}
          src="/assets/icons/Plus.svg"
        />
      </button>

      <motion.nav
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? "100%" : 0,
          y: isOpen ? 0 : -500,
        }}
        className={`text-white fixed flex justify-around items-center flex-col top-0 left-0 w-screen h-screen backdrop-blur-3xl ${isOpen ? "z-50" : "z-0"} p-8 md:p-16 py-32`}
        initial={{ opacity: 0, height: 0, y: -500 }}
        transition={{ duration: 0.5 }}
      >
        {isOpen
          ? links.map((link, index) => (
              <li
                className="border-b-4 group hover:border-[#FFD700] border-white transition-all text-5xl md:text-7xl w-full list-none overflow-hidden"
                key={link.to}
              >
                <motion.div
                  animate={{ y: 0 }}
                  className="w-full h-full"
                  initial={{ y: 100 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1 + 0.3,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                >
                  <Link
                    className="w-full h-full group-hover:tracking-[0.3em] group-hover:text-[#FFD700] transition-all duration-200"
                    key={index}
                    onClick={handleClick}
                    to={link.to}
                  >
                    <p className="font-bold">{link.name}</p>
                  </Link>
                </motion.div>
              </li>
            ))
          : null}
      </motion.nav>
    </>
  );
};

const MemoizedNavbar = React.memo(Navbar);
export default MemoizedNavbar;
