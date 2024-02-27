// Pages/About.tsx

import React from 'react'
import { motion } from 'framer-motion';

function About() {
  // const items = [
  //   {
  //     'title': '2024 - Frontend Engineer',
  //     'image': 'https://www.picsum.photos/200/300',
  //     'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra sapien eget sem mattis, id ullamcorper erat pharetra. Vestibulum consequeLorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra sapien eget sem mattis, id ullamcorper erat pharetra. Vestibulum consequeLorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra sapien eget sem mattis, id ullamcorper erat pharetra. Vestibulum conseque'
  //   },
  //   {
  //     'title': '2023 - Fullstack Freelance',
  //     'image': 'https://www.picsum.photos/200/300',
  //     'content': 'As a freelance front-end engineer, I work on a variety of projects, including a web applications and websites for small business and with a wide range of technologies, including Next, React, Django, Tailwind and more. I have also gained valuable experiences in back-end development.'
  //   },
  //   {
  //     'title': '2023 - MLOps Engineer',
  //     'image': 'https://www.picsum.photos/200/300',
  //     'content': 'During my time at ExxactRobotics as an MLOps, I played a crucial role in optimizing data processing pipelines. By refactoring the pipelines in Python and automating processes with tools such as Jenkins, Azure, Minio, ZenML, Kubernetes (K8s), and Ansible, we were able to dramatically speed up data processing. In fact, our code enabled speeds up to 30 times faster than before. This significant improvement in data processing speed had a direct impact on the overall efficiency of the company, reducing wait times and enabling quicker decision-making.'
  //   },
  //   {
  //     'title': '2022 - Front-end Engineer',
  //     'image': 'https://www.picsum.photos/200/300',
  //     'content': 'I had the opportunity to work on integration in QSkinny (a Qt framework) for the user interface of an AGCO tractor. This experience allowed me to develop programming skills in C++ and gain a deep understanding of designing complex and efficient user interfaces. These programming and interface design skills have strengthened my ability to create user experiences as a front-end engineer.'
  //   },
  //   {
  //     'title': '2020 - Student',
  //     'image': 'https://www.picsum.photos/200/300',
  //     'content': 'Studying at École 42 has provided me with a strong foundation in software engineering, including but not limited to algorithms, data structures, and low-level programming. The school\'s project- based, peer - to - peer learning environment has also equipped me with excellent problem - solving and teamwork skills.'
  //   },
  //   {
  //     'title': '2018 - Educational Engineer',
  //     'image': 'https://www.picsum.photos/200/300',
  //     'content': 'In my previous role as a Computer and Robotics Instructor, I was responsible for teaching Scratch and other playful learning platforms to young learners. This experience was not only rewarding but also honed my skills in educational technology and curriculum development. I was able to create engaging and interactive lessons that made complex concepts accessible and fun. This role enhanced my understanding of user engagement, which is an invaluable skill in front-end development.'
  //   },
  //   {
  //     'title': '2018 - Student',
  //     'image': 'https://www.picsum.photos/200/300',
  //     'content': 'My computer science degree at Université Paris 7 Diderot has given me a solid grounding in various domains like programming, operating systems, networks, and databases. The curriculum also included a strong mathematical component, which has been invaluable in my coding projects.'
  //   },
  //   {
  //     'title': '2014 - Early Coding Experience',
  //     'image': 'https://www.picsum.photos/200/300',
  //     'content': 'I started coding during my high school years, initially as a hobby. This early exposure to programming has given me a long runway to develop my skills and has been instrumental in shaping my career path.'
  //   },
  // ]


  return (
    <div className="text-white h-full min-h-screen w-full px-20">
      <div className='h-16 overflow-hidden mb-14 md:mb-24'>
        <motion.h1
          initial={{ opacity: 1, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className='text-6xl text-center font-bold'>ABOUT</motion.h1>
      </div>
      <div className='flex flex-col gap-10'>
        <div className="flex flex-col-reverse md:flex-row gap-10 justify-center items-center">
          <div>
            <h1 className='font-bold'>Lorem Ipsum</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere, orci sit amet ullamcorper mattis, felis nulla malesuada erat, quis tristique augue diam rutrum nulla. Quisque varius sagittis purus, vitae porttitor risus congue in. Mauris rutrum, ante sed egestas pharetra, sapien elit placerat urna, quis faucibus tellus nunc in dui. Nunc hendrerit tellus ac ante eleifend finibus porta sed arcu. Proin sagittis ante at auctor ultricies. Aliquam lacinia commodo metus id fringilla. Vivamus convallis blandit blandit.</p>
          </div>
          <img src="public/profil.png" alt="random" className='w-[50vw]' />
        </div>
        <div>
          <h1 className='font-bold'>Experience</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere, orci sit amet ullamcorper mattis, felis nulla malesuada erat, quis tristique augue diam rutrum nulla. Quisque varius sagittis purus, vitae porttitor risus congue in. Mauris rutrum, ante sed egestas pharetra, sapien elit placerat urna, quis faucibus tellus nunc in dui. Nunc hendrerit tellus ac ante eleifend finibus porta sed arcu. Proin sagittis ante at auctor ultricies. Aliquam lacinia commodo metus id fringilla. Vivamus convallis blandit blandit.</p>
        </div>
        <div>
          <h1 className='font-bold'>Skills</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere, orci sit amet ullamcorper mattis, felis nulla malesuada erat, quis tristique augue diam rutrum nulla. Quisque varius sagittis purus, vitae porttitor risus congue in. Mauris rutrum, ante sed egestas pharetra, sapien elit placerat urna, quis faucibus tellus nunc in dui. Nunc hendrerit tellus ac ante eleifend finibus porta sed arcu. Proin sagittis ante at auctor ultricies. Aliquam lacinia commodo metus id fringilla. Vivamus convallis blandit blandit.</p>
        </div>
      </div>
    </div>
  )
}

export default About