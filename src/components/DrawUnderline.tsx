import React from "react";
import { motion } from "framer-motion";

export default function DrawUnderline() {
  return (
    <div className="">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          d="M 162.347 121.49 C 173.061 120.86 230.337 122.099 236.784 122.099 C 242.781 122.099 169.154 124.822 169.141 124.861 C 168.69 126.215 222.411 126.881 233.551 126.881"
          fillOpacity="0"
          strokeWidth="2"
          stroke="#FFD700"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.3, delay: 2 }}
        />
      </svg>
    </div >
  );
}
