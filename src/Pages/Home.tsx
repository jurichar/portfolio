// Pages/Home.tsx
import { motion } from 'framer-motion';

function Box() {
  return (
    <motion.div
      className='flex flex-col gap-4 p-10'
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
    >
      <img src="https://www.picsum.photos/300/200" alt="random" className='w-[30rem] h-[20rem] rounded' />
      <p className='py-4 text-xl'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra sapien eget sem mattis, id ullamcorper erat pharetra. Vestibulum consequeLorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra sapien eget sem mattis, id ullamcorper erat pharetra. Vestibulum consequeLorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra sapien eget sem mattis, id ullamcorper erat pharetra. Vestibulum conseque
      </p>
    </motion.div>
  )
}


function Home() {
  return (
    <div className="text-white">
      <div className="w-full min-h-screen flex justify-center items-center pb-20 text-3xl">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h1>
            Hi, <br /> I'm Julien Richard
          </h1>
          <p>
            and I'm a fullstack developer
          </p>
        </motion.div>
      </div>
      <div className="flex flex-col gap-32">
        <Box />
        <Box />
        <Box />
      </div>
    </div>
  )
}

export default Home