"use client";

import Link from "next/link";
import { Github, Mail } from "lucide-react";
import { Button } from "./button";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <Link href="/" passHref>
          <h1 className="text-3xl font-bold cursor-pointer">
            Quentin&apos;s Portfolio
          </h1>
        </Link>

        <div className="space-x-4 flex items-center">
          <Link href="/about" passHref>
            <Button variant="outline" name="About me Button">About Me</Button>
          </Link>
          <Link href="/projects" passHref>
            <Button variant="outline" name="Projects Button">Projects</Button>
          </Link>
          <Link href="/experience" passHref>
            <Button variant="outline" name="Experience Button">Experience</Button>
          </Link>
          <Link href="/CV" passHref>
            <Button variant="outline" name="My Resume Button">My resume</Button>
          </Link>
          <Button
            name="Contact me Button"
            className="flex items-center"
            style={{
              backgroundColor: "blue",
              color: "white",
              padding: "10px",
              borderRadius: "10px",
            }}
          >
            <Link
              href="mailto:quentin.leguay@epitech.eu"
              className="flex items-center"
              passHref
            >
              <Mail className="w-5 h-5 mr-2" />
              <span>Contact me</span>
            </Link>
          </Button>
          <div className="h-6 border-l border-gray-600 mx-2"></div>
          <Link
            aria-label="GitHub - Quentin Leguay"
            href="https://github.com/QuentinLeguay"
            target="_blank"
            passHref
            style={{ margin : "0px" }}
          >
            <Button variant="ghost" style={{ padding: "px-2" }} name="GitHub Button">
              <Github className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
