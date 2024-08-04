// src/Pages/Works.tsx

import React from 'react';
import { motion } from 'framer-motion';
import workData from '../utils/workData';
import WorkCard from '../components/WorkCard';
import Overlay from '../components/Overlay';
import SelectedWorkOverlay from '../components/SelectedWorkOverlay';

interface Work {
  title: string;
  image: string[];
  description: string;
  link?: string;
  tags: string[];
}

function disableScroll() {
  document.body.style.overflow = 'hidden';
}

function enableScroll() {
  document.body.style.overflow = 'visible';
}

const Works = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedWork, setSelectedWork] = React.useState<Work | undefined>();

  const handleClick = (work: Work) => {
    setSelectedWork(work);
    setIsOpen(!isOpen);
    disableScroll();
  }

  const works = workData;

  return (
    <motion.div className="text-white min-h-full w-full md:px-32 px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: 'easeIn', delay: 0.5 }}
    >
      <div className='h-16 overflow-hidden mb-14 md:mb-24'>
        <motion.h1
          initial={{ opacity: 1, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 1 }}
          className='text-6xl text-center font-bold'>WORKS</motion.h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 w-full h-full mb-10">
        {works.map((work, index) => (
          <div key={index} className="h-80 w-full">
            <WorkCard
              work={work}
              onClick={() => handleClick(work)}
            />
          </div>
        ))}
      </div>
      <Overlay isOpen={isOpen} onClick={() => { setIsOpen(!isOpen); enableScroll(); }} />
      <SelectedWorkOverlay
        isOpen={isOpen}
        selectedWork={selectedWork}
        onClick={() => { setIsOpen(!isOpen); }}
      />
    </motion.div>
  );
}

export default Works;