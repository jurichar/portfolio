// src/Pages/Works.tsx

import React from "react";
import { motion } from "framer-motion";
import workData from "../utils/workData";
import WorkCard from "../components/WorkCard";
import Overlay from "../components/Overlay";
import SelectedWorkOverlay from "../components/SelectedWorkOverlay";

interface Work {
  title: string;
  image: string[];
  description: string;
  link?: string;
  tags: string[];
}

function disableScroll() {
  document.body.style.overflow = "hidden";
}

function enableScroll() {
  document.body.style.overflow = "visible";
}

const Works = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedWork, setSelectedWork] = React.useState<Work | undefined>();

  const handleClick = (work: Work) => {
    setSelectedWork(work);
    setIsOpen(!isOpen);
    disableScroll();
  };

  const works = workData;

  return (
    <motion.div
      animate={{ opacity: 1 }}
      className="text-white min-h-full w-full md:px-32 px-8"
      initial={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeIn", delay: 0.5 }}
    >
      <div className="h-16 overflow-hidden mb-14 md:mb-24">
        <motion.h1
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl text-center font-bold"
          initial={{ opacity: 1, y: 100 }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 1 }}
        >
          WORKS
        </motion.h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 w-full h-full mb-10">
        {works.map((work, index) => (
          <div className="h-80 w-full" key={index}>
            <WorkCard onClick={() => handleClick(work)} work={work} />
          </div>
        ))}
      </div>
      <Overlay
        isOpen={isOpen}
        onClick={() => {
          setIsOpen(!isOpen);
          enableScroll();
        }}
      />
      <SelectedWorkOverlay
        isOpen={isOpen}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        selectedWork={selectedWork}
      />
    </motion.div>
  );
};

export default Works;
