"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Switch from "@/components/ui/switch";

const ProjectsPage: React.FC = () => {
  const [divState, setDivState] = useState("recap");

  const toggleDiv = (setState?: string) => {
    if (setState) 
      setDivState(setState);
    else
      setDivState(divState === "recap" ? "project_list" : "recap");
  };

  return (
    <div className="mt-14 flex flex-col items-center justify-center bg-gray-900 text-white p-6">
      {/* header */}
      <motion.h1
        className="text-5xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Projects
      </motion.h1>
      <Switch toggleDiv={toggleDiv} title1="recap" title2="project list"></Switch>

      {/* Recap Section */} 
      <div id="recap" hidden={divState !== "recap"} className={`${divState !== "recap" ? "hidden" : "" } flex flex-col items-center justify-center bg-gray-900 text-white p-6`}>
        {/* GitHub Repository */}
        <div className="mt-8 text-center text-lg text-gray-400 max-w-xl">
          <p className="font-bold mb-4">Here are of my best projects :</p>
          <a
            href="https://github.com/QuentinLeguay/Area"
            aria-label="GitHub - Area Project"
            target="_blank"
            className="text-blue-500 hover:underline flex items-center justify-center"
          >
            GitHub - Area Project &nbsp;
            <img
              src="/Logos/PerimeterIcon.png"
              alt="Perimeter Icon"
              className="h-8 w-8"
            />
          </a>
          <a
            aria-label="GitHub - R-Type Project"
            href="https://github.com/QuentinLeguay/R-Type"
            target="_blank"
            className="text-blue-500 hover:underline flex items-center justify-center"
          >
            GitHub - R-Type Project &nbsp;
            <img
              src="/Logos/R-Type_Logo.png"
              alt="Perimeter Icon"
              className="h-8 w-16"
            />
          </a>
          <a
            aria-label="GitHub - Dante Project"
            href="https://github.com/QuentinLeguay/Dante"
            target="_blank"
            className="text-blue-500 hover:underline"
          >
            GitHub - Dante Project
          </a>
        </div>

        {/* Personnal projects */}
        <div className="mt-12 max-w-3xl text-center text-lg text-gray-400">
          <p className="font-bold mb-4">Other Projects</p>
          <p>
            In addition to the "Area" project, I have worked on several other
            interesting projects, including game modding for RimWorld and Super
            Smash Bros. Ultimate (SSBU), mobile applications in React Native,
            and web applications built with JavaScript and TypeScript. More
            details on each of these can be found below:
          </p>
          <ul className="list-disc list-inside mt-6 text-left">
            <li>
              <strong>RimWorld Modding:</strong> Updating mods to be compatible
              with new game versions.
            </li>
            <li>
              <strong>SSBU Modding:</strong> Creating and sharing mods for Super
              Smash Bros. Ultimate.
            </li>
            <li>
              <strong>React Native Mobile App:</strong> A mobile app developed
              using React Native, designed for ease of use and performance.
            </li>
            <li>
              <strong>JavaScript Web App:</strong> A web application focused on
              providing an interactive user experience.
            </li>
          </ul>
        </div>
      </div>

      {/* Project list section */}
      <div id="project_list" hidden={divState !== "project_list"} className={`${divState !== "recap" ? "hidden" : "" } flex flex-col items-center justify-center bg-gray-900 text-white p-6`}>

      </div>
    </div>
  );
};

export default ProjectsPage;
