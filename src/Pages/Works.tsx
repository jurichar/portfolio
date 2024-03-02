import React from 'react'
import { motion } from 'framer-motion';
import Tag from '../components/Tag';

function disableScroll() {
  document.body.style.overflow = 'hidden';
}

function enableScroll() {
  document.body.style.overflow = 'visible';
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
    {
      "title": "Youtube Clone with Torrent Streaming",
      "link": "/assets/JS.svg",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra sapien eget sem mattis, id ullamcorper erat pharetra. Vestibulum conseque",
      "tags": ["Django", "React", "Web", "Databases"]
    },
    {
      "title": "Social Network",
      "link": "/assets/JS.svg",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra sapien eget sem mattis, id ullamcorper erat pharetra. Vestibulum conseque",
      "tags": ["Django", "React", "Web", "Databases"]
    },
    {
      "title": "Reddit Clone",
      "link": "/assets/JS.svg",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra sapien eget sem mattis, id ullamcorper erat pharetra. Vestibulum conseque",
      "tags": ["NextJS", "Web", "CMS", "Databases"]
    },
    {
      "title": "Mobile Game",
      "link": "/assets/JS.svg",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra sapien eget sem mattis, id ullamcorper erat pharetra. Vestibulum conseque",
      "tags": ["React Native", "Mobile", "Databases"]
    },
    {
      "title": "3D Ligands Viewer",
      "link": "/assets/JS.svg",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra sapien eget sem mattis, id ullamcorper erat pharetra. Vestibulum conseque",
      "tags": ["Swift", "GL", "Mobile", "Databases"]
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
      "tags": ["Python", "AI", "DevOps", "Cloud", "K8s", "Docker", "Databases"]
    },
    {
      "title": "Software for AGCO",
      "link": "/assets/works/agco.jpeg",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra sapien eget sem mattis, id ullamcorper erat pharetra. Vestibulum conseque",
      "tags": ["C++", "Embedded"]
    },
    {
      "title": "Cloud environment with Ansible and K8s",
      "link": "/assets/works/cloud.gif",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra sapien eget sem mattis, id ullamcorper erat pharetra. Vestibulum conseque",
      "tags": ["Docker", "Ansible", "K8s", "CMS", "DevOps", "Cloud"]
    },
    {
      "title": "Fully dockerized complex environment",
      "link": "/assets/works/iot.gif",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra sapien eget sem mattis, id ullamcorper erat pharetra. Vestibulum conseque",
      "tags": ["Docker", "Vagrant", "K8s", "CMS", "DevOps", "Databases"]
    },
    {
      "title": "Online game",
      "link": "/assets/JS.svg",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra sapien eget sem mattis, id ullamcorper erat pharetra. Vestibulum conseque",
      "tags": ["Web", "Vue", "NodeJS", "Databases"]
    },
    {
      "title": "IRC Client/Server",
      "link": "/assets/works/irc.gif",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra sapien eget sem mattis, id ullamcorper erat pharetra. Vestibulum conseque",
      "tags": ["C++", "Network"]
    },
    {
      "title": "C++ STD Library Implementation",
      "link": "/assets/C++.svg",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra sapien eget sem mattis, id ullamcorper erat pharetra. Vestibulum conseque",
      "tags": ["C++"]
    },
    {
      "title": "3D Game in C++",
      "link": "/assets/works/cub3d.gif",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra sapien eget sem mattis, id ullamcorper erat pharetra. Vestibulum conseque",
      "tags": ["C", "GL"]
    },
    {
      "title": "Shell from Scratch",
      "link": "/assets/works/minishell.gif",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra sapien eget sem mattis, id ullamcorper erat pharetra. Vestibulum conseque",
      "tags": ["C", "shell"]
    },
    {
      "title": "Platform game",
      "link": "/assets/works/platform_game.gif",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra sapien eget sem mattis, id ullamcorper erat pharetra. Vestibulum conseque",
      "tags": ["Java"]
    },
    {
      "title": "Olymipcs planning",
      "link": "/assets/Java.svg",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra sapien eget sem mattis, id ullamcorper erat pharetra. Vestibulum conseque",
      "tags": ["Java", "Databases"]
    },
    {
      "title": "Puzzle Solver",
      "link": "/assets/works/puzzle_solver.gif",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra sapien eget sem mattis, id ullamcorper erat pharetra. Vestibulum conseque",
      "tags": ["Java"]
    },
  ];

  return (
    <div className="text-white min-h-full w-full md:px-32 px-8">
      <div className='h-16 overflow-hidden mb-14 md:mb-24'>
        <motion.h1
          initial={{ opacity: 1, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className='text-6xl text-center font-bold'>WORKS</motion.h1>
      </div>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 w-full h-full mb-10"> */}
      <div className="columns-1 md:columns-2 xl:columns-3 grid-flow-col gap-4 w-full h-full mb-10">
        {
          works.map((work, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="mb-10 object-cover gap-x-10 flex justify-center items-center min-h-32"
              onClick={() => handleClick(work)}
            >
              <div className='group relative'>
                <img
                  src={work.link}
                  alt="random"
                  className='w-max h-max object-cover' />
                <div
                  className='flex flex-col justify-center gap-2 opacity-0 w-full overflow-hidden group-hover:opacity-100 max-h-0 group-hover:max-h-[8rem] transition-all h-full ease-out duration-400 backdrop-blur-xl absolute bottom-0 left-0 z-50 p-2 bg-black bg-opacity-50 text-white text-center font-bold'
                >
                  <h1 className=''>
                    {work.title}
                  </h1>
                  <div className='flex flex-row justify-start gap-x-2 gap-y-2 flex-wrap'>
                    {work.tags.map((tag) => (
                      <Tag content={tag} />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))
        }
      </div >
      {
        isOpen && <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isOpen ? 0.3 : 0 }}
          className='h-screen w-[20vw] md:w-[50vw] fixed top-0 left-0 z-[100] bg-black'
          onClick={() => {
            setIsOpen(!isOpen);
            enableScroll();
          }
          }
        ></motion.div>
      }
      <motion.div
        initial={{ opacity: 0, x: 500 }}
        animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : 500 }}
        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
        className='min-h-screen w-[80vw] md:w-[50vw] fixed top-0 right-0 bottom-0 backdrop-blur-3xl flex flex-col justify-center items-center z-50 p-10 gap-10 overflow-scroll'
        onClick={() => setIsOpen(!isOpen)}
      >
        <img src={selectedWork?.link} alt="random" className='' />
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
    </div >
  )
}

export default Works;