// Pages/About.tsx

import React from 'react'
import { motion } from 'framer-motion';
import { useState } from 'react';

interface BoxProps {
  index: number;
}

function Box({ index }: BoxProps) {
  const [isOpen, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
      className='border-2 w-full border-solid p-4' >
      <button onClick={() => setOpen(!isOpen)} className='flex justify-center items-center'>
        {/* svg arrow up or down */}
        <img src="/src/assets/icons/Arrow.svg" alt="Arrow icon" className={`h-10 w-10 transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-[180deg]' : ''}`} />
      </button>
      <motion.div
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0, scaleY: isOpen ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra sapien eget sem mattis, id ullamcorper erat pharetra. Vestibulum consequeLorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra sapien eget sem mattis, id ullamcorper erat pharetra. Vestibulum consequeLorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra sapien eget sem mattis, id ullamcorper erat pharetra. Vestibulum conseque
        </p>
      </motion.div>
    </motion.div >
  )
}

function About() {
  return (
    <div className="text-white h-full min-h-screen w-full px-20">
      <h1 className='text-6xl text-center mb-24'>ABOUT</h1>
      <div className="flex flex-col gap-4">
        {/* loop for 10 boxes */}
        {[...Array(10)].map((_, index) => (
          <Box index={index} key={index} /> // Remove the 'key' prop
        ))}
      </div>
    </div>
  )
}

export default About