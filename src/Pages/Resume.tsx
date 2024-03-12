import React from 'react';
import { motion } from 'framer-motion';

function Resume() {
  return (
    <div className="text-white h-[calc(100vh-10rem)] w-full px-20">
      <div className='h-16 overflow-hidden mb-14 md:mb-24'>
        <motion.h1
          initial={{ opacity: 1, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className='text-6xl text-center font-bold'>RESUME</motion.h1>
      </div>
      {/* <oject data="path-to-your-resume.pdf" type="application/pdf" width="100%" height="600px">
        <p>It appears you don't have a PDF plugin for this browser. No biggie... you can <a href="path-to-your-resume.pdf">click here to download the PDF file.</a></p>
      </oject> */}
    </div>
  )
}

export default Resume;