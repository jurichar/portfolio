import { motion } from 'framer-motion';

function Resume() {
  return (
    <div className="text-white h-[calc(100vh-10rem)] w-full px-5 md:px-20">
      <div className='h-16 overflow-hidden mb-14 md:mb-24'>
        <motion.h1
          initial={{ opacity: 1, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className='text-6xl text-center font-bold'>RESUME</motion.h1>
      </div>
      <div className="flex justify-center">
        <iframe
          title="Resume PDF"
          src="./doc/CV.pdf"
          width="100%"
          height="100%"
          className='h-[calc(100vh-10rem)] md:h-[145vh] w-full pb-10'
        />
      </div>
    </div>
  );
}

export default Resume;
