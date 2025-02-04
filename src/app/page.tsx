'use client'

import { motion } from "framer-motion";

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-900 text-white p-6">
      {/* header */}
      <motion.img
        src="/CV/image_CV.png"
        alt="A Picture of the handsome person that I am"
        className="w-64 h-64 rounded-full mb-6 mt-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      />
      <motion.h1
        className="text-5xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Quentin&apos;s Portfolio
      </motion.h1>

      {/* about me */}
      <p className="mt-4 text-lg text-gray-400">
        Software Developer | Multimedia & UI Enthusiast | C++ Expert
      </p>
      <p className="mt-2 text-center text-lg text-gray-400 max-w-2xl">
        I&apos;m a passionate software developer with expertise in multimedia file
        processing, UI color management, and modding games. I have experience with 
        various programming languages, including C, C++, Python, and JavaScript.
      </p>
      <div className="mt-8 text-center text-lg text-gray-400 max-w-xl">
        <p>
          My credo: <em>&quot;You shall live to eat and not eat to live&quot;</em>
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
