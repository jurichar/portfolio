// src/components/SelectedWorkOverlay.tsx

import { motion } from 'framer-motion';
import Tag from './Tag';

interface Work {
  title: string;
  image: string[];
  description: string;
  link?: string;
  tags: string[];
}

const SelectedWorkOverlay = ({ isOpen, selectedWork, onClick }: { isOpen: boolean; selectedWork: Work | undefined; onClick: () => void }) => (
  <motion.div
    initial={{ opacity: 0, x: 500 }}
    animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : 500 }}
    transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
    className='min-h-screen w-[80vw] md:w-[50vw] fixed top-0 right-0 bottom-0 backdrop-blur-3xl bg-black bg-opacity-50 flex flex-col justify-center items-center z-50 p-4 gap-10 overflow-scroll'
    onClick={onClick}
  >
    <div className='h-1/2 overflow-hidden'>
      <img src={selectedWork?.image[0]} alt={selectedWork?.title} loading='lazy' className=' w-full h-full object-contain max-w-full max-h-full' />
    </div>
    <h1 className='text-3xl'>{selectedWork?.title}</h1>
    <p className='text-xl p-4'>{selectedWork?.description}</p>
    <div className='flex flex-row justify-start gap-x-2 gap-y-2 flex-wrap'>
      {selectedWork?.tags.map((tag, index) => (
        <Tag key={index} content={tag} />
      ))}
    </div>
  </motion.div>
);

export default SelectedWorkOverlay;