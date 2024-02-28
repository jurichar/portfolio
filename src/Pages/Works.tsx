import React from 'react'
import { motion } from 'framer-motion';

interface TagProps {
  content: string;
}


function disableScroll() {
  document.body.style.overflow = 'hidden';
}

function enableScroll() {
  document.body.style.overflow = 'visible';
}

function Tag({ content }: TagProps) {
  let color = '';
  switch (content) {
    case 'Python':
      color = 'text-[#FFD700] border-[#FFD700]';
      break;
    case 'C++':
      color = 'text-[#6495ED] border-[#6495ED]';
      break;
    case 'C':
      color = 'text-[#FF6347] border-[#FF6347]';
      break;
    case 'Java':
      color = 'text-[#FF6347] border-[#FF6347]';
      break;
    case 'Docker':
      color = 'text-[#FF6347] border-[#FF6347]';
      break;
    case 'Dolor':
      color = 'text-[#FF6347] border-[#FF6347]';
      break;
    default:
      color = 'text-[#FF6347] border-[#FF6347]';
      break;
  }
  return (
    <span className={`px-3 py-1  border-2 rounded-full ${color}`}>
      {content}
    </span>
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
    {
      "title": "Youtube Clone with Torrent Streaming",
      "link": "./public/assets/JS.svg",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra sapien eget sem mattis, id ullamcorper erat pharetra. Vestibulum conseque",
      "tags": ["Django", "React", "Web"]
    },
    {
      "title": "Showcase Websites",
      "link": "./public/assets/JS.svg",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra sapien eget sem mattis, id ullamcorper erat pharetra. Vestibulum conseque",
      "tags": ["Django", "React", "Web"]
    },
    {
      "title": "MLOps for Exxact Robotics",
      "link": "./public/assets/python.svg",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra sapien eget sem mattis, id ullamcorper erat pharetra. Vestibulum conseque",
      "tags": ["Django", "React", "Web"]
    },
    {
      "title": "Software for AGCO",
      "link": "./public/assets/C++.svg",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra sapien eget sem mattis, id ullamcorper erat pharetra. Vestibulum conseque",
      "tags": ["Django", "React", "Web"]
    },
    {
      "title": "Cloud environment with Ansible and K8s",
      "link": "./public/assets/Docker.svg",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra sapien eget sem mattis, id ullamcorper erat pharetra. Vestibulum conseque",
      "tags": ["Docker", "Ansible", "K8s"]
    },
    {
      "title": "Fully dockerized complex environment",
      "link": "./public/assets/Docker.svg",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra sapien eget sem mattis, id ullamcorper erat pharetra. Vestibulum conseque",
      "tags": ["Docker", "Vagrant", "K8s"]
    },
    {
      "title": "Online game",
      "link": "./public/assets/JS.svg",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra sapien eget sem mattis, id ullamcorper erat pharetra. Vestibulum conseque",
      "tags": ["Web", "Vue", "NodeJS"]
    },
    {
      "title": "IRC Client/Server",
      "link": "./public/assets/C++.svg",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra sapien eget sem mattis, id ullamcorper erat pharetra. Vestibulum conseque",
      "tags": ["C++", "network"]
    },
    {
      "title": "C++ STD Library Implementation",
      "link": "./public/assets/C++.svg",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra sapien eget sem mattis, id ullamcorper erat pharetra. Vestibulum conseque",
      "tags": ["C++"]
    },
    {
      "title": "3D Game in C++",
      "link": "./public/assets/C.svg",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra sapien eget sem mattis, id ullamcorper erat pharetra. Vestibulum conseque",
      "tags": ["C", "GL"]
    },
    {
      "title": "Shell from Scratch",
      "link": "./public/assets/C.svg",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra sapien eget sem mattis, id ullamcorper erat pharetra. Vestibulum conseque",
      "tags": ["C", "shell"]
    },
    {
      "title": "Platform game",
      "link": "./public/assets/Java.svg",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra sapien eget sem mattis, id ullamcorper erat pharetra. Vestibulum conseque",
      "tags": ["C", "shell"]
    },
    {
      "title": "Puzzle Solver",
      "link": "./public/assets/Java.svg",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra sapien eget sem mattis, id ullamcorper erat pharetra. Vestibulum conseque",
      "tags": ["C", "shell"]
    },
  ];

  return (
    <div className="text-white min-h-full w-full md:px-48 px-8">
      <div className='h-16 overflow-hidden mb-14 md:mb-24'>
        <motion.h1
          initial={{ opacity: 1, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className='text-6xl text-center font-bold'>WORKS</motion.h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full mb-10">
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
                  className='w-max h-max object-cover ' />
                <div
                  className='flex flex-col justify-center gap-4 overflow-hidden group-hover:opacity-100 group-hover:max-h-[7rem] transition-all h-full ease-in-bounce duration-700 opacity-0 w-full max-h-0 backdrop-blur-3xl absolute bottom-0 left-0 z-50 p-4 bg-black bg-opacity-50 text-white text-center font-bold'
                >
                  <h1 className=''>
                    {work.title}
                  </h1>
                  <div className='flex flex-row justify-center gap-4'>
                    {work.tags.map((tag, index) => (
                      <Tag key={index} content={tag} />
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