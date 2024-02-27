// Pages/Home.tsx
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const icon = (name: IconProp, link: string, index: number) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.1 + 1.5 }}
      viewport={{ once: true }}
      className='z-10'
    >
      <a className="pointer-events-auto"
        href={link} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={name} size="xl" className=' h-8 w-8 text-white hover:scale-110 hover:text-[#FFD700] transition-all duration-300' />
      </a>
    </motion.div>
  );
};

function Home() {
  return (
    <div className="text-white">
      <div className="w-full h-[calc(100vh-10rem)] flex justify-center items-center pb-20 text-3xl">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h1 className='font-bold'>
            Hi, <br /> I'm Julien Richard
          </h1>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 0.5, x: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            viewport={{ once: true }}
            className='opacity-50'>
            and I'm a developer
          </motion.p>
          <div className="flex flex-row justify-start gap-4">
            {icon(faGithubSquare, "https://github.com/jurichar/", 0)}
            {icon(faLinkedin, "https://www.linkedin.com/in/julien-rchd/", 1)}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Home