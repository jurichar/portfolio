// Pages/About.tsx

import React from 'react'
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useTransform, useScroll } from 'framer-motion';

interface BoxProps {
  index: number;
  title: string;
  img: string;
  content: string;
}

function Box({ index, title, img, content }: BoxProps) {
  const [isOpen, setOpen] = useState(false)

  const { scrollYProgress } = useScroll();

  const parallaxY = useTransform(scrollYProgress, [0, 1], ['0px', '-200px']);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
      className='relative w-full overflow-hidden border-solid p-4 rounded'>
      <motion.img style={{ y: parallaxY }} src="https://www.picsum.photos/200/300" alt="image" className={`rounded z-0 w-full absolute top-0 left-0 brightness-50 ${isOpen ? 'blur-md' : ""}`} />
      <div className='flex flex-row items-center justify-between'>
        <h1 className='z-10 text-xl'>
          {title}
        </h1>
        <button onClick={() => setOpen(!isOpen)} className='flex justify-center items-center'>
          <img src="/src/assets/icons/Arrow.svg" alt="Arrow icon" className={`z-10 h-10 w-10 transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-[180deg]' : ''}`} />
        </button>
      </div>
      <motion.div
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0, scaleY: isOpen ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className='p-4 z-10 flex flex-col gap-8'
      >
        <div className='relative w-full h-60 overflow-hidden rounded' >
          <motion.img style={{ y: parallaxY }} src={img} alt="image" className='rounded z-0 w-full absolute top-0 left-0' />
        </div>
        <p className='z-10 relative'>
          {content}
        </p>
      </motion.div>
    </motion.div >
  )
}

function About() {
  const items = [
    {
      'title': '2024 - Loremp ipsum sir dolom met lorem ispum sir',
      'image': 'https://www.picsum.photos/200/300',
      'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra sapien eget sem mattis, id ullamcorper erat pharetra. Vestibulum consequeLorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra sapien eget sem mattis, id ullamcorper erat pharetra. Vestibulum consequeLorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra sapien eget sem mattis, id ullamcorper erat pharetra. Vestibulum conseque'
    },
    {
      'title': '2023 - Loremp ipsum sir dolom met lorem ispum sir',
      'image': 'https://www.picsum.photos/200/300',
      'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra sapien eget sem mattis, id ullamcorper erat pharetra. Vestibulum consequeLorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra sapien eget sem mattis, id ullamcorper erat pharetra. Vestibulum consequeLorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra sapien eget sem mattis, id ullamcorper erat pharetra. Vestibulum conseque'
    }
  ]


  return (
    <div className="text-white h-full min-h-screen w-full px-20">
      <h1 className='text-6xl text-center mb-24'>ABOUT</h1>
      <div className="flex flex-col gap-4">
        {items.map((item, index) => (
          <Box index={index} title={item.title} img={item.image} content={item.content} />
        ))}
      </div>
    </div>
  )
}

export default About