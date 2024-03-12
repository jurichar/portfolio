import React from 'react'
import { motion } from 'framer-motion';
import Tag from '../components/Tag';

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

  const works = [
    {
      "title": "Sodexo Live !",
      "image": ["/assets/works/sodexo.png"],
      "description": "A web app, written in JavaScript, with Next.js, with a lot of animations with Framer Motion. It uses a custom API in Drupal to retrieve data.",
      "tags": ["JavaScript", "Next.js", "Tailwind", "Framer Motion", "Web", "Drupal"]
    },
    {
      "title": "Chopard: 1 Place Vandôme",
      "image": ["/assets/works/chopard.gif"],
      "description": "Creation of a website for the Chopard 1 Place Vendôme hotel, aiming to create an immersive experience with WebGL.",
      "tags": ["JavaScript", "SASS", "Web GL", "Web", "Strapi"]
    },
    {
      "title": "Youtube Clone with Torrent Streaming",
      "image": ["/assets/works/ultratube.png"],
      "description": "A Youtube clone, with a torrent streaming feature, written in Django, with a custom API to retrieve data.",
      "tags": ["TypeScript", "React.js", "Tailwind", "Web", "Django", "Databases", "Torrents"]
    },
    {
      "title": "CRM Tool",
      "image": ["/assets/works/focusflow.png"],
      "description": "A CRM tool, written in TypeScript, with React.js, and uses a custom API to retrieve data.",
      "tags": ["TypeScript", "React.js", "Web", "Django", "Databases"]
    },
    {
      "title": "Reddit Clone",
      "image": ["/assets/works/nextspace.png"],
      "description": "A Reddit clone, written in Next (front + back), with Next.js, and uses a custom API to retrieve data.",
      "tags": ["TypeScript", "Next.js", "Web", "Databases"]
    },
    {
      "title": "Landing Page",
      "image": ["/assets/works/landing.png"],
      "description": "Landing pages built with various JavaScript frameworks and libraries.",
      "tags": ["JavaScript", "React.js", "Web"]
    },
    {
      "title": "3D Ligands Viewer",
      "image": ["/assets/works/proteins.gif"],
      "description": "A 3D ligands viewer, written in Swift. It uses a custom API to retrieve data and display it in 3D.",
      "tags": ["Swift", "Graphics", "Mobile", "Databases"]
    },
    {
      'title': "42's Mobile App",
      'image': ['/assets/works/companion.gif'],
      'description': 'A mobile app for 42 students, written in Swift. It uses a custom API to retrieve data. ',
      'tags': ['Swift', 'Mobile', "Databases"]
    },
    {
      "title": "MLOps for Exxact Robotics",
      "image": ["/assets/works/exaact.jpeg"],
      "description": "Optimization of machine learning pipelines in Python using Azure.",
      "tags": ["Python", "AI", "Docker", "Kubernetes", "MLOps", "Databases", "Cloud"]
    },
    {
      "title": "Software for AGCO",
      "image": ["/assets/works/agco.jpeg"],
      "description": "A software for a tractor, written in Qt / QSkinny.",
      "tags": ["C++", 'Qt', "Embedded"]
    },
    {
      "title": "Cloud environment with Ansible and K8s",
      "image": ["/assets/works/cloud.png"],
      "description": "Deployment of a complex WordPress environment in the cloud using Ansible and Kubernetes.",
      "tags": ["Docker", "Ansible", "Kubernetes", "Wordpress", "DevOps", "Cloud"]
    },
    {
      "title": "Fully dockerized complex environment",
      "image": ["/assets/works/iot.gif"],
      "description": "A fully dockerized complex environment with a database, a web server, a reverse proxy, and a monitoring tool. This project was made in a team of 3.",
      "tags": ["Docker", "Vagrant", "Kubernetes", "Wordpress", "DevOps", "Databases"]
    },
    {
      "title": "Online game",
      "image": ["/assets/works/pong.jpeg"],
      "description": "An online game platform with a game of pong, this project was made in a team of 5. It was written in Vue.js, Node.js and uses PostgreSQL.",
      "tags": ["Vue.js", "Web", "Node.js", "Databases"]
    },
    {
      "title": "IRC Client/Server",
      "image": ["/assets/works/irc.gif"],
      "description": "An IRC client and server, written in C++, from scratch. This project is network-oriented.",
      "tags": ["C++", "Networks", "Software"]
    },
    {
      "title": "C++ STD Library Implementation",
      "image": ["/assets/C++.svg"],
      "description": "A reimplementation of the C++ Standard Library, written in C++ from scratch. This project is software-oriented.",
      "tags": ["C++", "Software"]
    },
    {
      "title": "3D Game in C++",
      "image": ["/assets/works/cub3d.gif"],
      "description": "A 3D game, written in C, from scratch. It uses the raycasting technique to render the 3D world. This project is graphics-oriented.",
      "tags": ["C", "Graphics", "Software"]
    },
    {
      "title": "Shell from Scratch",
      "image": ["/assets/works/minishell.gif"],
      "description": "A shell, written in C, from scratch. It uses the termcaps library to handle the terminal.",
      "tags": ["C", "Software"]
    },
    {
      "title": "Platform game",
      "image": ["/assets/works/platform_game.gif"],
      "description": "A platform game, written in Java, we made in a team of 4. It uses a custom game engine. This project is game-oriented.",
      "tags": ["Java", "Graphics"]
    },
    {
      "title": "Olymipcs planning",
      "image": ["/assets/Java.svg"],
      "description": "An Olympics planning software, written in Java. It uses a database to store and retrieve data. This project is database-oriented.",
      "tags": ["Java", "Databases", "Software"]
    },
    {
      "title": "Puzzle Solver",
      "image": ["/assets/works/puzzle_solver.gif"],
      "description": "A puzzle slider solver, written in Java. It uses the A* algorithm to solve the puzzle.",
      "tags": ["Java", "AI", "Software"]
    },
  ];

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