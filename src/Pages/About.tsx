// Pages/About.tsx

import { motion } from 'framer-motion';
import DrawMe from '../components/DrawMe';
import Tag from '../components/Tag';
import { Link } from 'react-router-dom';

type ItemType = {
  duration: string;
  company: string;
  title: string;
  // image: string;
  description: string;
  tags: string[];
}

function AboutItem({ item, index }: { item: ItemType, index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
      className='flex flex-col gap-2 md:gap-8 md:flex-row'
      key={index}
      viewport={{ once: true }}
    >
      <h1 className='font-bold opacity-70 whitespace-nowrap pointer-events-none'>{item.duration}</h1>
      <div>
        <div className='outline-2 transition-all outline-[#FFD700] hover:outline outline-offset-8 rounded'>
          <Link to='/works'>
            <h1 className='font-bold whitespace-nowrap'>
              <span>
                {item.title}
              </span>
              <span>
                {" • "}
              </span>
              <span>
                {item.company}
              </span>
            </h1>
            <p className='opacity-80'>{item.description}</p>
          </Link>
        </div>
        <div className='mt-4 flex flex-row justify-start gap-x-2 gap-y-2 flex-wrap'>
          {item.tags.map((tag, index) => (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={index}
              viewport={{ once: true }}
              className='pt-2'
            >
              <Tag content={tag} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}


function About() {
  const items = [
    {
      'duration': '2024 - Present',
      'company': 'BETC',
      'title': 'Frontend Engineer',
      'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra sapien eget sem mattis, id ullamcorper erat pharetra. Vestibulum consequeLorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra sapien eget sem mattis, id ullamcorper erat pharetra. Vestibulum consequeLorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra sapien eget sem mattis, id ullamcorper erat pharetra. Vestibulum conseque',
      'tags': ['JavaScript', 'TypeScript', 'React.js', 'Next.js', 'Web', 'SASS', 'Tailwind', 'Framer Motion', 'Web GL', 'Drupal', 'Strapi']
    },
    {
      'duration': '2023 - 2024',
      'company': 'Freelance',
      'title': 'Fullstack Freelance',
      'description': 'As a freelance front-end engineer, I work on a variety of projects, including a web applications and websites for small business and with a wide range of technologies, including Next, React, Django, Tailwind and more. I have also gained valuable experiences in back-end development.',
      'tags': ['JavaScript', 'TypeScript', 'React.js', 'Next.js', 'Web', 'SASS', 'Tailwind', 'WordPress']
    },
    {
      'duration': '2023 - 2023',
      'company': 'ExxactRobotics',
      'title': 'MLOps Engineer',
      'description': 'During my time at ExxactRobotics as an MLOps, I played a crucial role in optimizing data processing pipelines. By refactoring the pipelines in Python and automating processes with tools such as Jenkins, Azure, Minio, ZenML, Kubernetes (K8s), and Ansible, we were able to dramatically speed up data processing. In fact, our code enabled speeds up to 30 times faster than before. This significant improvement in data processing speed had a direct impact on the overall efficiency of the company, reducing wait times and enabling quicker decision-making.',
      "tags": ["Python", "AI", "Docker", "Kubernetes", "MLOps", "Databases", "Cloud"]
    },
    {
      'duration': '2022 - 2023',
      'company': 'AGCO',
      'title': 'Front-end Engineer',
      'description': 'I had the opportunity to work on integration in QSkinny (a Qt framework) for the user interface of an AGCO tractor. This experience allowed me to develop programming skills in C++ and gain a deep understanding of designing complex and efficient user interfaces. These programming and interface design skills have strengthened my ability to create user experiences as a front-end engineer.',
      "tags": ["C++", 'Qt', "Embedded"]
    },
    {
      'duration': '2020 - 2022',
      'company': 'École 42',
      'title': 'Student',
      'description': 'Studying at École 42 has provided me with a strong foundation in software engineering, including but not limited to algorithms, data structures, and low-level programming. The school\'s project- based, peer - to - peer learning environment has also equipped me with excellent problem - solving and teamwork skills.',
      "tags": ["JavaScript", "TypeScript", "Python", "Swift", "C++", "C", "Docker", "Web", "Mobile", "Django", "Node.js", "Databases"]
    },
    {
      'duration': '2018 - 2020',
      'company': 'Freelance',
      'title': 'Educational Engineer',
      'description': 'In my previous role as a Computer and Robotics Instructor, I was responsible for teaching Scratch and other playful learning platforms to young learners. This experience was not only rewarding but also honed my skills in educational technology and curriculum development. I was able to create engaging and interactive lessons that made complex concepts accessible and fun. This role enhanced my understanding of user engagement, which is an invaluable skill in front-end development.',
      'tags': ['JavaScript', 'Education', 'Scratch']
    },
    {
      'duration': '2017 - 2018',
      'company': 'Université Paris 7 Diderot',
      'title': 'Student',
      'image': 'https://www.picsum.photos/200/300',
      'description': 'My computer science degree at Université Paris 7 Diderot has given me a solid grounding in various domains like programming, computer sciences, and databases. The curriculum also included a strong mathematical component, which has been invaluable in my coding projects.',
      'tags': ['Java', 'C', 'Python', 'Web', 'Databases', 'Mathematics']
    },
  ]


  return (
    <motion.div className="text-white h-full min-h-screen w-full px-12 md:px-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: 'easeIn', delay: 0.5 }}
    >
      <div className='h-16 overflow-hidden mb-14 md:mb-24'>
        <motion.h1
          initial={{ opacity: 1, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 1 }}
          className='text-6xl text-center font-bold'>ABOUT</motion.h1>
      </div>
      <div
        className="flex flex-col-reverse md:flex-row gap-10 justify-center items-center"
      >
        <div>
          <h1 className='font-bold'>Lorem Ipsum</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere, orci sit amet ullamcorper mattis, felis nulla malesuada erat, quis tristique augue diam rutrum nulla. Quisque varius sagittis purus, vitae porttitor risus congue in. Mauris rutrum, ante sed egestas pharetra, sapien elit placerat urna, quis faucibus tellus nunc in dui. Nunc hendrerit tellus ac ante eleifend finibus porta sed arcu. Proin sagittis ante at auctor ultricies. Aliquam lacinia commodo metus id fringilla. Vivamus convallis blandit blandit.</p>
        </div>
        <div className='relative min-w-[50vw] w-full'>
          <img src="/profil.png" alt="random" loading='lazy' draggable='false' />
          <div className='z-30 absolute md:left-[35%] md:-top-[10%] left-[20%] -top-[25%]'>
            <DrawMe />
          </div>
        </div>
      </div>
      <h1 className='font-bold text-3xl my-8'>Experience</h1>
      <div className='flex flex-col gap-14'>
        {items.map((item, index) => (
          <AboutItem item={item} index={index} />
        ))}
      </div>
    </motion.div >
  )
}

export default About