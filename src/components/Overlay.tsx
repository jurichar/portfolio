// src/components/Overlay.tsx

import { motion } from 'framer-motion';

const Overlay = ({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) => (
  isOpen && <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: isOpen ? 0.3 : 0 }}
    transition={{ duration: 1.3 }}
    className='h-screen w-[20vw] md:w-[50vw] fixed top-0 left-0 z-[100] bg-black'
    onClick={onClick}
  ></motion.div>
);

export default Overlay;