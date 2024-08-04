// src/components/WorkCard.tsx

import { motion } from 'framer-motion';
import Tag from './Tag';

interface Work {
  title: string;
  image: string[];
  description: string;
  link?: string;
  tags: string[];
}

const WorkCard = ({ work, onClick }: { work: Work; onClick: () => void }) => {
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
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      className="cursor-pointer h-full w-full"
      onClick={onClick}
      viewport={{ once: true }}
    >
      <motion.div
        className="grayscale hover:grayscale-0 transition-all relative overflow-hidden h-full"
        initial="rest"
        whileHover="hover"
        animate="rest"
      >
        <img
          src={work.image[0]}
          alt={work.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <motion.div
          className="absolute bottom-0 left-0 w-full flex flex-col justify-center gap-2 backdrop-blur-md p-2 bg-black bg-opacity-20 text-white text-center font-bold"
          variants={InfosVariant}
          transition={{ ease: 'easeOut' }}
        >
          <h1>{work.title}</h1>
          <div className="flex flex-row justify-start gap-x-2 gap-y-2 flex-wrap">
            {work.tags.map((tag, index) => (
              <Tag key={index} content={tag} />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default WorkCard;