import React from 'react'
import { motion } from 'framer-motion';
import Tag from '../components/Tag';


interface Work {
  title: string;
  link: string;
  description: string;
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
      className="mb-10 object-cover gap-x-10 flex justify-center items-center min-h-32"
      onClick={onClick}
      viewport={{ once: true }}
    >
      <motion.div className='grayscale hover:grayscale-0 transition-all relative overflow-hidden'
        initial="rest"
        whileHover="hover"
        animate="rest"
      >
        <img
          src={work.link}
          alt="random"
          className='w-max h-max object-cover'
          loading='lazy'
        />
        <motion.div
          className='h-auto w-full flex flex-col justify-center gap-2 backdrop-blur-md absolute bottom-0 left-0 z-50 p-2 bg-black bg-opacity-20 text-white text-center font-bold'
          variants={InfosVariant}
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
      className='min-h-screen w-[80vw] md:w-[50vw] fixed top-0 right-0 bottom-0 backdrop-blur-3xl flex flex-col justify-center items-center z-50 p-10 gap-10 overflow-scroll'
      onClick={onClick}
    >
      <img src={selectedWork?.link} alt="random" loading='lazy' />
      <h1>
        {selectedWork?.title}
      </h1>
      <div className='w-full flex flex-row gap-4 justify-center'>
        {selectedWork?.tags.map((tag, index) => (
          <Tag key={index} content={tag} />
        ))}
      </div>
      <p>
        {selectedWork?.description}
      </p>
    </motion.div>
  );
}

function Works() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedWork, setSelectedWork] = React.useState<Work | undefined>();

  interface Work {
    title: string;
    link: string;
    description: string;
    tags: string[];
  }

  const handleClick = (work: Work) => {
    setSelectedWork(work);
    setIsOpen(!isOpen);
    disableScroll();
  }

  const works = [
    // {
    //   "title": "Sodexo Live !",
    //   "link": "/assets/works/ultratube.png",
    //   "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra sapien eget sem mattis, id ullamcorper erat pharetra. Vestibulum conseque",
    //   "tags": ["JavaScript", "Next.js", "Web", "Framer Motion", "Drupal"]
    // },
    // {
    //   "title": "Chopard: 1 Place Vandôme",
    //   "link": "/assets/works/ultratube.png",
    //   "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra sapien eget sem mattis, id ullamcorper erat pharetra. Vestibulum conseque",
    //   "tags": ["JavaScript", "Web", "Web GL", "Strapi"]
    // },
    {
      "title": "Youtube Clone with Torrent Streaming",
      "link": "/assets/works/ultratube.png",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra sapien eget sem mattis, id ullamcorper erat pharetra. Vestibulum conseque",
      "tags": ["TypeScript", "React.js", "Django", "Web", "Databases", "Torrents"]
    },
    {
      "title": "CRM Tool",
      "link": "/assets/works/focusflow.png",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra sapien eget sem mattis, id ullamcorper erat pharetra. Vestibulum conseque",
      "tags": ["TypeScript", "React.js", "Django", "Web", "Databases"]
    },
    {
      "title": "Reddit Clone",
      "link": "/assets/works/nextspace.png",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra sapien eget sem mattis, id ullamcorper erat pharetra. Vestibulum conseque",
      "tags": ["TypeScript", "Next.js", "Web", "Databases"]
    },
    {
      "title": "Landing Page",
      "link": "/assets/works/landing.png",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra sapien eget sem mattis, id ullamcorper erat pharetra. Vestibulum conseque",
      "tags": ["JavaScript", "React.js", "Web"]
    },
    {
      "title": "3D Ligands Viewer",
      "link": "/assets/works/proteins.gif",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra sapien eget sem mattis, id ullamcorper erat pharetra. Vestibulum conseque",
      "tags": ["Swift", "Mobile", "Graphics", "Databases"]
    },
    {
      'title': "42's Mobile App",
      'link': '/assets/works/companion.gif',
      'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra sapien eget sem mattis, id ullamcorper erat pharetra. Vestibulum conseque',
      'tags': ['Swift', 'Mobile', "Databases"]
    },
    {
      "title": "MLOps for Exxact Robotics",
      "link": "/assets/works/exaact.jpeg",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra sapien eget sem mattis, id ullamcorper erat pharetra. Vestibulum conseque",
      "tags": ["Python", "AI", "Docker", "Kubernetes", "MLOps", "Databases", "Cloud"]
    },
    {
      "title": "Software for AGCO",
      "link": "/assets/works/agco.jpeg",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra sapien eget sem mattis, id ullamcorper erat pharetra. Vestibulum conseque",
      "tags": ["C++", 'Qt', "Embedded"]
    },
    {
      "title": "Cloud environment with Ansible and K8s",
      "link": "/assets/works/cloud.png",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra sapien eget sem mattis, id ullamcorper erat pharetra. Vestibulum conseque",
      "tags": ["Docker", "Ansible", "Kubernetes", "Wordpress", "DevOps", "Cloud"]
    },
    {
      "title": "Fully dockerized complex environment",
      "link": "/assets/works/iot.gif",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra sapien eget sem mattis, id ullamcorper erat pharetra. Vestibulum conseque",
      "tags": ["Docker", "Vagrant", "Kubernetes", "Wordpress", "DevOps", "Databases"]
    },
    {
      "title": "Online game",
      "link": "/assets/works/pong.jpeg",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra sapien eget sem mattis, id ullamcorper erat pharetra. Vestibulum conseque",
      "tags": ["Vue.js", "Node.js", "Web", "Databases"]
    },
    {
      "title": "IRC Client/Server",
      "link": "/assets/works/irc.gif",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra sapien eget sem mattis, id ullamcorper erat pharetra. Vestibulum conseque",
      "tags": ["C++", "Networks", "Software"]
    },
    {
      "title": "C++ STD Library Implementation",
      "link": "/assets/C++.svg",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra sapien eget sem mattis, id ullamcorper erat pharetra. Vestibulum conseque",
      "tags": ["C++", "Software"]
    },
    {
      "title": "3D Game in C++",
      "link": "/assets/works/cub3d.gif",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra sapien eget sem mattis, id ullamcorper erat pharetra. Vestibulum conseque",
      "tags": ["C", "Graphics", "Software"]
    },
    {
      "title": "Shell from Scratch",
      "link": "/assets/works/minishell.gif",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra sapien eget sem mattis, id ullamcorper erat pharetra. Vestibulum conseque",
      "tags": ["C", "Software"]
    },
    {
      "title": "Platform game",
      "link": "/assets/works/platform_game.gif",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra sapien eget sem mattis, id ullamcorper erat pharetra. Vestibulum conseque",
      "tags": ["Java", "Graphics"]
    },
    {
      "title": "Olymipcs planning",
      "link": "/assets/Java.svg",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra sapien eget sem mattis, id ullamcorper erat pharetra. Vestibulum conseque",
      "tags": ["Java", "Databases", "Software"]
    },
    {
      "title": "Puzzle Solver",
      "link": "/assets/works/puzzle_solver.gif",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra sapien eget sem mattis, id ullamcorper erat pharetra. Vestibulum conseque",
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