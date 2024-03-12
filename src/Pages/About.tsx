// Pages/About.tsx

import { motion } from 'framer-motion';
import DrawMe from '../components/DrawMe';
import Tag from '../components/Tag';
import { Link } from 'react-router-dom';

type ItemType = {
  duration: string;
  company: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
}

function AboutItem({ item, index }: { item: ItemType, index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
      className='flex flex-col gap-6 md:gap-8 md:flex-row md:justify-end'
      key={index}
      viewport={{ once: true }}
    >
      <h1 className='font-bold opacity-70 whitespace-nowrap pointer-events-none'>{item.duration}</h1>
      <div>
        <div className='group outline-2 transition-all outline-[rgba(255,215,0,0.5)]  hover:outline outline-offset-[1rem] rounded'>
          <Link to={item.link} target='_blank'>
            <h1 className='font-bold whitespace-nowrap group-hover:opacity-100 opacity-80'>
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
            <p className='group-hover:opacity-80 opacity-70'>{item.description}</p>
            <div className='group-hover:opacity-100 opacity-50 mt-4 flex flex-row justify-start gap-x-2 gap-y-2 flex-wrap'>
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
          </Link>
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
      'description': 'As a front-end engineer at BETC, I have been responsible for developing websites of various scales, from luxury brands to big corporations. I have also been involved in the development of specials projects, such as interactive experiences and web applications with headless CMS. ',
      'tags': ['JavaScript', 'TypeScript', 'React.js', 'Next.js', 'Web', 'SASS', 'Tailwind', 'Framer Motion', 'Web GL', 'Drupal', 'Strapi'],
      'link': 'https://betcfullsix.com/'
    },
    {
      'duration': '2023 - 2024',
      'company': 'Freelance',
      'title': 'Fullstack Freelance',
      'description': 'As a freelance front-end engineer, I work on a variety of projects, including a web applications and websites for small business and with a wide range of technologies, including Next, React, Django, Tailwind and more. I have also gained valuable experiences in back-end development.',
      'tags': ['JavaScript', 'TypeScript', 'React.js', 'Next.js', 'Web', 'SASS', 'Tailwind', 'WordPress'],
      'link': 'https://www.malt.fr/profile/jurichar'
    },
    {
      'duration': '2023 - 2023',
      'company': 'ExxactRobotics',
      'title': 'MLOps Engineer',
      'description': 'During my time at ExxactRobotics as an MLOps, I played a crucial role in optimizing data processing pipelines. By refactoring the pipelines in Python and automating processes with tools such as Jenkins, Azure, Minio, ZenML, Kubernetes (K8s), and Ansible, we were able to dramatically speed up data processing. In fact, our code enabled speeds up to 30 times faster than before. This significant improvement in data processing speed had a direct impact on the overall efficiency of the company, reducing wait times and enabling quicker decision-making.',
      "tags": ["Python", "AI", "Docker", "Kubernetes", "MLOps", "Databases", "Cloud"],
      'link': 'https://exxact-robotics.com/'
    },
    {
      'duration': '2022 - 2023',
      'company': 'AGCO',
      'title': 'Front-end Engineer',
      'description': 'I had the opportunity to work on integration in QSkinny (a Qt framework) for the user interface of an AGCO tractor. This experience allowed me to develop programming skills in C++ and gain a deep understanding of designing complex and efficient user interfaces. These programming and interface design skills have strengthened my ability to create user experiences as a front-end engineer.',
      "tags": ["C++", 'Qt', "Embedded"],
      'link': 'https://www.agcocorp.fr/'
    },
    {
      'duration': '2020 - 2022',
      'company': 'École 42',
      'title': 'Student',
      'description': 'Studying at École 42 has provided me with a strong foundation in software engineering, including but not limited to algorithms, data structures, and low-level programming. The school\'s project- based, peer - to - peer learning environment has also equipped me with excellent problem - solving and teamwork skills.',
      "tags": ["JavaScript", "TypeScript", "Python", "Swift", "C++", "C", "Docker", "Web", "Mobile", "Django", "Node.js", "Databases"],
      'link': 'https://42.fr/'
    },
    {
      'duration': '2018 - 2020',
      'company': 'Colombbus',
      'title': 'Educational Engineer',
      'description': 'In my previous role as a Computer and Robotics Instructor, I was responsible for teaching Scratch and other playful learning platforms to young learners. This experience was not only rewarding but also honed my skills in educational technology and curriculum development. I was able to create engaging and interactive lessons that made complex concepts accessible and fun. This role enhanced my understanding of user engagement, which is an invaluable skill in front-end development.',
      'tags': ['JavaScript', 'Education', 'Scratch'],
      'link': 'https://www.colombbus.org/'
    },
    {
      'duration': '2017 - 2018',
      'company': 'University of Paris',
      'title': 'Student',
      'description': 'My computer science degree at Université Paris 7 Diderot has given me a solid grounding in various domains like programming, computer sciences, and databases. The curriculum also included a strong mathematical component, which has been invaluable in my coding projects.',
      'tags': ['Java', 'C', 'Python', 'Web', 'Databases', 'Mathematics'],
      'link': 'https://u-paris.fr/'
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
          <h1 className='font-bold text-3xl pb-4'>Few things about me</h1>
          <p className='text-xl'>
            Hi, my name is Julien Richard, I grow and I live in Paris, France. I started programming at the university of Paris, where I studied computer sciences and after the pandemic, I decided to join the 42 school to learn more about software engineering. I did a lot of projects in different languages. After 2 internships, I started to work as software engineer and I am currently working at BETC as a front-end engineer.
          </p>
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