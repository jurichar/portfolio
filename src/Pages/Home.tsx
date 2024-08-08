// Pages/Home.tsx
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import DrawUnderline from "../components/DrawUnderline";
import { Draw } from "../components/Draw";

const icon = (name: IconProp, link: string, index: number) => {
  return (
    <motion.div
      className="z-10"
      initial={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 + 1.5 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1, scale: 1 }}
    >
      <a
        className="pointer-events-auto"
        href={link}
        rel="noopener noreferrer"
        target="_blank"
      >
        <FontAwesomeIcon
          className=" h-8 w-8 text-white hover:scale-110 hover:text-[#FFD700] transition-all duration-300"
          icon={name}
          size="xl"
        />
      </a>
    </motion.div>
  );
};

const Home = () => {
  return (
    <div className="text-white w-full h-[calc(100vh-10rem)] flex justify-center items-center pb-20 text-3xl">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, scale: 1 }}
      >
        <h1 className="font-bold">
          Hi, <br /> I'm Julien Richard
        </h1>
        <div className="absolute">
          <motion.p
            animate={{ opacity: 0.5, x: 0 }}
            className="opacity-50"
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, delay: 1 }}
            viewport={{ once: true }}
          >
            and I'm a developer
          </motion.p>
          <div className="relative -top-[7.5rem]">
            <DrawUnderline />
          </div>
        </div>
        <div className="mt-10 flex flex-row justify-start gap-4">
          {icon(faGithubSquare, "https://github.com/jurichar/", 0)}
          {icon(faLinkedin, "https://www.linkedin.com/in/julien-rchd/", 1)}
        </div>
      </motion.div>
      <div className="absolute top-8 left-20 w-[7rem] h-[5rem]">
        <Draw />
      </div>
    </div>
  );
};

export default Home;
