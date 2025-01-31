'use client'

import { motion } from "framer-motion";

const ProjectsPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
      {/* Header with animation */}
      <motion.h1
        className="text-5xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Projects
      </motion.h1>

      {/* Area Project */}
      <div className="mt-8 max-w-3xl text-center text-lg text-gray-400">
        <p className="font-bold mb-4">Area Project</p>
        <p>
          The "Area" project is a personal endeavor that showcases my skills in
          software development, UI/UX design, and system-level programming. It
          focuses on delivering a seamless user experience while integrating
          multimedia processing and modern technologies.
        </p>
        <p className="mt-4">
          You can check out the full repository and get more details on the
          project by visiting my GitHub.
        </p>
        <a
          href="https://github.com/QuentinLeguay/Area"
          target="_blank"
          className="text-blue-500 hover:underline mt-4 inline-block"
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

      {/* Additional Projects */}
      <div className="mt-12 max-w-3xl text-center text-lg text-gray-400">
        <p className="font-bold mb-4">Other Projects</p>
        <p>
          In addition to the "Area" project, I have worked on several other
          interesting projects, including game modding for RimWorld and Super
          Smash Bros. Ultimate (SSBU), mobile applications in React Native, and
          web applications built with JavaScript and TypeScript. More details on
          each of these can be found below:
        </p>
        <ul className="list-disc list-inside mt-6 text-left">
          <li>
            <strong>RimWorld Modding:</strong> Updating mods to be compatible with
            new game versions.
          </li>
          <li>
            <strong>SSBU Modding:</strong> Creating and sharing mods for Super
            Smash Bros. Ultimate.
          </li>
          <li>
            <strong>React Native Mobile App:</strong> A mobile app developed using
            React Native, designed for ease of use and performance.
          </li>
          <li>
            <strong>JavaScript Web App:</strong> A web application focused on
            providing an interactive user experience.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProjectsPage;
