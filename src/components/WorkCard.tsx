// src/components/WorkCard.tsx

import { motion } from "framer-motion";
import Tag from "./Tag";

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

  const isVideo: boolean = work.image[0].includes(".mp4") ?? false;

  return (
    <motion.div
      className="cursor-pointer h-full w-full"
      initial={{ opacity: 0, scale: 0 }}
      onClick={onClick}
      viewport={{ once: true }}
      whileInView={{ opacity: 1, scale: 1 }}
    >
      <motion.div
        animate="rest"
        className="grayscale hover:grayscale-0 transition-all relative overflow-hidden h-full"
        initial="rest"
        whileHover="hover"
      >
        {isVideo ? (
          <video autoPlay className="w-full h-full object-cover" loop muted>
            <source src={work.image[0]} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img
            alt={work.title}
            className="w-full h-full object-cover"
            loading="lazy"
            src={work.image[0]}
          />
        )}
        <motion.div
          className="absolute bottom-0 left-0 w-full flex flex-col justify-center gap-2 backdrop-blur-md p-2 bg-black bg-opacity-20 text-white text-center font-bold"
          transition={{ ease: "easeOut" }}
          variants={InfosVariant}
        >
          <h1>{work.title}</h1>
          <div className="flex flex-row justify-start gap-x-2 gap-y-2 flex-wrap">
            {work.tags.map((tag, index) => (
              <Tag content={tag} key={index} />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default WorkCard;
