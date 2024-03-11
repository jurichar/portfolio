import { motion } from 'framer-motion';

function Contact() {
  return (
    <div className="text-white h-[calc(100vh-10rem)] w-full px-20">
      <div className='h-16 overflow-hidden mb-14 md:mb-24'>
        <motion.h1
          initial={{ opacity: 1, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className='text-6xl text-center font-bold'>CONTACT</motion.h1>
      </div>
      <ul className="font-normal">
        <li className='text-2xl mb-4'>
          If you want to contact me, you can use the following links:
        </li>
        <li className='z-40'>
          <span className='text-2xl font-thin'>email:{' '}</span>
          <a className='z-40 text-2xl font-bold hover:tracking-[0.3em] hover:text-[#FFD700] transition-all duration-300' href='mailto:jurichar@student.42.fr' target='_blank'>jurichar@student.42.fr</a>
        </li>
        <li className='z-40'>
          <span className='text-2xl font-thin'>linkedin:{' '}</span>
          <a className='z-40 text-2xl font-bold hover:tracking-[0.3em] hover:text-[#FFD700] transition-all duration-300' href='https://www.linkedin.com/in/julien-rchd/' target='_blank'>/in/julien-rchd</a>
        </li>
        <li className='z-40'>
          <span className='text-2xl font-thin'>github:{' '}</span>
          <a className='z-40 text-2xl font-bold hover:tracking-[0.3em] hover:text-[#FFD700] transition-all duration-300' href='https://github.com/jurichar' target='_blank'>github.com/jurichar</a>
        </li>
      </ul>
    </div >
  )
}

export default Contact;