import { motion } from "framer-motion";

export default function DrawMe() {
  return (
    <div className="">
      <svg
        className="w-full h-full"
        viewBox="100 100 250 150"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          animate={{ pathLength: 1, opacity: 1 }}
          d="M 189.891 194.896 C 189.891 197.915 193.576 206.977 194.05 208.881 C 196.473 218.607 201.248 215.165 204.964 210.626 C 208.472 206.342 210.576 204.053 214.817 197.392"
          fillOpacity="0"
          initial={{ pathLength: 0, opacity: 0 }}
          stroke="#FFD700"
          strokeLinecap="round"
          strokeWidth="2"
          transition={{ duration: 0.3, delay: 2 }}
        />
        <motion.path
          animate={{ pathLength: 1, opacity: 1 }}
          d="M 199.064 210.099 C 212.602 171.08 183.789 134.851 151.776 138.844"
          fillOpacity="0"
          initial={{ pathLength: 0, opacity: 0 }}
          stroke="#FFD700"
          strokeLinecap="round"
          strokeWidth="2"
          transition={{ duration: 0.3, delay: 2.3 }}
        />
        <motion.path
          animate={{ pathLength: 1, opacity: 1 }}
          d="M 129.277 149.789 C 129.277 143.003 128.458 128.345 129.295 126.972 C 129.726 126.265 131.978 140.674 133.206 140.484 C 133.331 140.465 136.073 125.984 136.073 126.397 C 136.073 131.686 137.204 145.969 137.204 148.641"
          fillOpacity="0"
          initial={{ pathLength: 0, opacity: 0 }}
          stroke="#FFD700"
          strokeLinecap="round"
          strokeWidth="2"
          transition={{ duration: 0.3, delay: 2.6 }}
        />
        <motion.path
          animate={{ pathLength: 1, opacity: 1 }}
          d="M 146.13 146.973 C 143.679 147.238 141.12 148.325 140.993 147.603 C 141.226 142.132 139.73 127.031 140.155 126.708 C 141.1 125.99 142.767 126.079 145.516 125.65"
          fillOpacity="0"
          initial={{ pathLength: 0, opacity: 0 }}
          stroke="#FFD700"
          strokeLinecap="round"
          strokeWidth="2"
          transition={{ duration: 0.3, delay: 2.7 }}
        />
        <motion.path
          animate={{ pathLength: 1, opacity: 1 }}
          d="M 140.365 135.329 C 141.936 134.99 143.598 134.744 145.631 134.556"
          fillOpacity="0"
          initial={{ pathLength: 0, opacity: 0 }}
          stroke="#FFD700"
          strokeLinecap="round"
          strokeWidth="2"
          transition={{ duration: 0.3, delay: 3 }}
        />
      </svg>
    </div>
  );
}
