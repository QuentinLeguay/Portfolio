'use client'

import { motion } from "framer-motion";

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
      {/* Header with animation */}
      <motion.h1
        className="text-5xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Quentin's Portfolio
      </motion.h1>

      {/* Short bio */}
      <p className="mt-4 text-lg text-gray-400">
        Software Developer | Multimedia & UI Enthusiast | C++ Expert
      </p>
      <p className="mt-2 text-center text-lg text-gray-400 max-w-2xl">
        I'm a passionate software developer with expertise in multimedia file
        processing, UI color management, and modding games. I have experience with 
        various programming languages, including C, C++, Python, and JavaScript.
      </p>
      {/* Personal Statement */}
      <div className="mt-8 text-center text-lg text-gray-400 max-w-xl">
        <p>
          My credo: <em>"Il faut vivre pour manger et non manger pour vivre."</em>
        </p>
        <p className="mt-4">
          Explore my work, check out my CV, and get in touch for collaboration
          opportunities!
        </p>
      </div>
    </div>
  );
};

export default HomePage;
