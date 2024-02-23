// Pages/About.tsx

import React from 'react'
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useTransform, useScroll } from 'framer-motion';

interface BoxProps {
  index: number;
  title: string;
  img: string;
  content: string;
}

function Box({ index, title, img, content }: BoxProps) {
  const [isOpen, setOpen] = useState(false)

  const { scrollYProgress } = useScroll();

  const parallaxY = useTransform(scrollYProgress, [0, 1], ['0px', '-200px']);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
      className='relative w-full overflow-hidden border-solid p-4 rounded'>
      <motion.img style={{ y: parallaxY }} src="https://www.picsum.photos/200/300" alt="image" className={`rounded transition-all z-0 w-full absolute top-0 left-0 ${isOpen ? 'brightness-[25%]' : "brightness-50"}`} />
      <div className={`flex flex-row items-center justify-between ${isOpen ? 'pb-4' : ''}`}>
        <h1 className='z-10 text-xl'>
          {title}
        </h1>
        <button onClick={() => setOpen(!isOpen)} className='flex justify-center items-center'>
          <img src="/src/assets/icons/Arrow.svg" alt="Arrow icon" className={`z-10 h-10 w-10 transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-[180deg]' : ''}`} />
        </button>
      </div>
      <motion.div
        initial={{ opacity: 0, scaleY: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0, scaleY: isOpen ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className='flex flex-col gap-8'
      >
        <div className='relative w-full h-60 overflow-hidden rounded' >
          <motion.img style={{ y: parallaxY }} src={img} alt="image" className='rounded z-0 w-full absolute top-0 left-0' />
        </div>
        <p className='z-10 relative'>
          {content}
        </p>
      </motion.div>
    </motion.div >
  )
}

function About() {
  const items = [
    {
      'title': '2024 - Frontend Engineer',
      'image': 'https://www.picsum.photos/200/300',
      'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra sapien eget sem mattis, id ullamcorper erat pharetra. Vestibulum consequeLorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra sapien eget sem mattis, id ullamcorper erat pharetra. Vestibulum consequeLorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra sapien eget sem mattis, id ullamcorper erat pharetra. Vestibulum conseque'
    },
    {
      'title': '2023 - Fullstack Freelance',
      'image': 'https://www.picsum.photos/200/300',
      'content': 'As a freelance front-end engineer, I work on a variety of projects, including a web applications and websites for small business and with a wide range of technologies, including Next, React, Django, Tailwind and more. I have also gained valuable experiences in back-end development.'
    },
    {
      'title': '2023 - MLOps Engineer',
      'image': 'https://www.picsum.photos/200/300',
      'content': 'During my time at ExxactRobotics as an MLOps, I played a crucial role in optimizing data processing pipelines. By refactoring the pipelines in Python and automating processes with tools such as Jenkins, Azure, Minio, ZenML, Kubernetes (K8s), and Ansible, we were able to dramatically speed up data processing. In fact, our code enabled speeds up to 30 times faster than before. This significant improvement in data processing speed had a direct impact on the overall efficiency of the company, reducing wait times and enabling quicker decision-making.'
    },
    {
      'title': '2022 - Front-end Engineer',
      'image': 'https://www.picsum.photos/200/300',
      'content': 'I had the opportunity to work on integration in QSkinny (a Qt framework) for the user interface of an AGCO tractor. This experience allowed me to develop programming skills in C++ and gain a deep understanding of designing complex and efficient user interfaces. These programming and interface design skills have strengthened my ability to create user experiences as a front-end engineer.'
    },
    {
      'title': '2020 - Student',
      'image': 'https://www.picsum.photos/200/300',
      'content': 'Studying at École 42 has provided me with a strong foundation in software engineering, including but not limited to algorithms, data structures, and low-level programming. The school\'s project- based, peer - to - peer learning environment has also equipped me with excellent problem - solving and teamwork skills.'
    },
    {
      'title': '2018 - Educational Engineer',
      'image': 'https://www.picsum.photos/200/300',
      'content': 'In my previous role as a Computer and Robotics Instructor, I was responsible for teaching Scratch and other playful learning platforms to young learners. This experience was not only rewarding but also honed my skills in educational technology and curriculum development. I was able to create engaging and interactive lessons that made complex concepts accessible and fun. This role enhanced my understanding of user engagement, which is an invaluable skill in front-end development.'
    },
    {
      'title': '2018 - Student',
      'image': 'https://www.picsum.photos/200/300',
      'content': 'My computer science degree at Université Paris 7 Diderot has given me a solid grounding in various domains like programming, operating systems, networks, and databases. The curriculum also included a strong mathematical component, which has been invaluable in my coding projects.'
    },
    {
      'title': '2014 - Early Coding Experience',
      'image': 'https://www.picsum.photos/200/300',
      'content': 'I started coding during my high school years, initially as a hobby. This early exposure to programming has given me a long runway to develop my skills and has been instrumental in shaping my career path.'
    },
  ]


  return (
    <div className="text-white h-full min-h-screen w-full px-20">
      <h1 className='text-6xl text-center mb-24'>ABOUT</h1>
      <div className="flex flex-col gap-10">
        {items.map((item, index) => (
          <Box index={index} title={item.title} img={item.image} content={item.content} />
        ))}
      </div>
    </div>
  )
}

export default About