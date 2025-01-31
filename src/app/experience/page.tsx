"use client";

import { motion } from "framer-motion";

const ExperiencePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
      {/* Header with animation */}
      <motion.h1
        className="text-5xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Experience
      </motion.h1>

      {/* Short introduction */}
      <p className="mt-4 text-lg text-gray-400 text-center max-w-3xl">
        Hi, I'm Quentin! I'm a passionate software developer with a focus on
        multimedia processing and UI design. My journey in tech began with C and
        C++ programming, where I developed an interest in creating automated
        solutions for color management in UI elements and processing multimedia
        files. Over the years, I've gained experience with various technologies
        and have honed my skills in game modding using C#, Python programming,
        and system-level coding.
      </p>

      {/* Current Projects */}
      <div className="mt-6 max-w-3xl text-center text-lg text-gray-400">
        <p>
          Currently, I'm working on multiple personal projects, including
          RimWorld modding, where I'm updating mods to be compatible with newer
          versions of the game, and tackling challenges in Python video playback
          and syncing. I have a strong drive to learn new technologies, tackle
          complex problems, and make things work as smoothly as possible.
        </p>
      </div>

      {/* Skills Section */}
      <div className="mt-8 text-center text-lg text-gray-400 max-w-xl">
        <p className="font-bold mb-4">My Skills</p>
        <ul className="list-disc list-inside">
          <li>⚡ C, C++, C# Programming</li>
          <li>⚡ React-native mobile application</li>
          <li>⚡ JavaScript & TypeScript Development</li>
          <li>⚡ Python Development</li>
          <li>⚡ Game Modding (RimWorld, SSBU)</li>
          <li>⚡ Multimedia File Processing</li>
          <li>⚡ UI/UX Design & Color Management</li>
          <li>⚡ Working with External Libraries and APIs</li>
        </ul>
      </div>

      {/* GitHub Repository */}
      <div className="mt-8 text-center text-lg text-gray-400 max-w-xl">
        <p className="font-bold mb-4">Here are of my best projects :</p>
        <a
          href="https://github.com/QuentinLeguay/Area"
          target="_blank"
          className="text-blue-500 hover:underline"
        >
          GitHub - Area Project
        </a>
        <br />
        <a
          href="https://github.com/QuentinLeguay/R-Type"
          target="_blank"
          className="text-blue-500 hover:underline"
        >
          GitHub - R-Type Project
        </a>
        <br />
        <a
          href="https://github.com/QuentinLeguay/Dante"
          target="_blank"
          className="text-blue-500 hover:underline"
        >
          GitHub - Dante Project
        </a>
      </div>

      {/* Credo Section */}
      <div className="mt-8 text-center text-lg text-gray-400 max-w-xl">
        <p>
          My Credo:{" "}
          <em>"Il faut vivre pour manger et non manger pour vivre."</em>
        </p>
        <p className="mt-4">
          A simple, yet profound philosophy that reflects how I approach my work
          and life. I believe in living fully, making meaningful contributions,
          and enjoying the process of creating and solving problems.
        </p>
      </div>
    </div>
  );
};

export default ExperiencePage;
