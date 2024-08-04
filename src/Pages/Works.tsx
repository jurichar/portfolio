import React from 'react'
import { motion } from 'framer-motion';
import Tag from '../components/Tag';
import workData from '../utils/workData';
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

function WorkCard({ work, onClick }: { work: Work; onClick: () => void }) {
  const InfosVariant = {
    rest: {
      opacity: 0,
      scaleY: 0,
      y: 200,
    },
    hover: {
      opacity: 1,
      scaleY: 1,
      y: 0,
    },
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      className="mb-10 object-cover gap-x-10 flex justify-center items-center min-h-32 cursor-pointer"
      onClick={onClick}
      viewport={{ once: true }}
    >
      <motion.div className='grayscale hover:grayscale-0 transition-all relative overflow-hidden'
        initial="rest"
        whileHover="hover"
        animate="rest"
      >
        <img
          src={work.image[0]}
          alt="random"
          className='w-max h-auto object-cover'
          loading='lazy'
        />
        <motion.div
          className='h-auto w-full flex flex-col justify-center gap-2 backdrop-blur-md absolute bottom-0 left-0 z-50 p-2 bg-black bg-opacity-20 text-white text-center font-bold'
          variants={InfosVariant}
          transition={{ ease: 'easeOut' }}
        >
          <h1>
            {work.title}
          </h1>
          <div className='flex flex-row justify-start gap-x-2 gap-y-2 flex-wrap'>
            {work.tags.map((tag, index) => (
              <Tag key={index} content={tag} />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

function Overlay({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) {
  return (
    isOpen && <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isOpen ? 0.3 : 0 }}
      transition={{ duration: 1.3 }}
      className='h-screen w-[20vw] md:w-[50vw] fixed top-0 left-0 z-[100] bg-black'
      onClick={onClick}
    ></motion.div>
  );
}

function SelectedWorkOverlay({ isOpen, selectedWork, onClick }: { isOpen: boolean; selectedWork: Work | undefined; onClick: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 500 }}
      animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : 500 }}
      transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
      className='min-h-screen w-[80vw] md:w-[50vw] fixed top-0 right-0 bottom-0 backdrop-blur-3xl bg-black bg-opacity-50 flex flex-col justify-center items-center z-50 p-4 gap-10 overflow-scroll'
      onClick={onClick}
    >
      <div className='h-1/2 overflow-hidden'>
        <img src={selectedWork?.image[0]} alt="random" loading='lazy' className=' w-full h-full object-contain max-w-full max-h-full' />
      </div>
      <h1 className='text-3xl'>
        {selectedWork?.title}
      </h1>
      <p className='text-xl p-4'>
        {selectedWork?.description}
      </p>
      <div className='flex flex-row justify-start gap-x-2 gap-y-2 flex-wrap'>
        {selectedWork?.tags.map((tag, index) => (
          <Tag key={index} content={tag} />
        ))}
      </div>
    </motion.div>
  );
}

function Works() {
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
      <div className="columns-1 md:columns-2 xl:columns-3 grid-flow-col gap-4 w-full h-full mb-10">
        {works.map((work, index) => (
          <WorkCard
            key={index}
            work={work}
            onClick={() => handleClick(work)}
          />
        ))}
      </div>
      <Overlay isOpen={isOpen} onClick={() => { setIsOpen(!isOpen); enableScroll(); }} />
      <SelectedWorkOverlay
        isOpen={isOpen}
        selectedWork={selectedWork}
        onClick={() => { setIsOpen(!isOpen); }}
      />
    </motion.div>
  )
}

export default Works;