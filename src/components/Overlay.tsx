// src/components/Overlay.tsx

import { motion } from "framer-motion";

const Overlay = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) =>
  isOpen && (
    <motion.div
      animate={{ opacity: isOpen ? 0.3 : 0 }}
      className="h-screen w-[20vw] md:w-[50vw] fixed top-0 left-0 z-[100] bg-black"
      initial={{ opacity: 0 }}
      onClick={onClick}
      transition={{ duration: 1.3 }}
    />
  );

export default Overlay;
