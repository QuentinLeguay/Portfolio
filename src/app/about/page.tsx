"use client";

import React from "react";
// app/about/page.tsx (About Page)

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
      {/* Title */}
      <h1 className="text-5xl font-bold">About Me</h1>

      {/* Bio Section */}
      <div className="mt-6 text-center max-w-3xl">
        <p className="text-lg text-gray-400">
          Hi, I'm Quentin! <br />
          I'm a passionate software developer with a focus on multimedia
          processing and UI design. My journey in tech began with C and C++
          programming, where I developed an interest in creating automated
          solutions for color management in UI elements and processing
          multimedia files. Over the years, I've gained experience with various
          technologies and have honed my skills in game modding using C#, Python
          programming, and system-level coding.
        </p>
        <p className="mt-4 text-lg text-gray-400">
          Currently, I'm working on multiple personal projects, including
          RimWorld modding, where I'm updating mods to be compatible with newer
          versions of the game, and tackling challenges in Python video playback
          and syncing. I have a strong drive to learn new technologies, tackle
          complex problems, and make things work as smoothly as possible.
        </p>
        <p className="mt-4 text-lg text-gray-400">
            During my studies, I was able to work on a variety of projects, 
            including a React-native mobile application, a JavaScript-based 
            web application, and a TypeScript-based web application. 
            I also had the opportunity to work on developping a small game (R-Type).<br/>
            I have experience working with external libraries and APIs, 
            and I'm always looking for new opportunities to collaborate and learn from others.
        </p>
      </div>

      {/* Skills Section */}
      <div className="mt-8 text-center">
        <h2 className="text-3xl font-semibold">My Skills</h2>
        <ul className="mt-4 text-lg text-gray-400">
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

      {/* Personal Philosophy */}
      <div className="mt-8 text-center max-w-xl">
        <h2 className="text-3xl font-semibold">My Credo</h2>
        <p className="mt-4 text-lg text-gray-400">
          "Il faut vivre pour manger et non manger pour vivre." — A simple, yet
          profound philosophy that reflects how I approach my work and life. I
          believe in living fully, making meaningful contributions, and enjoying
          the process of creating and solving problems.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
