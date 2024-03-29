import React, { useEffect, useState } from "react";
import avatar from "./Assets/avatar1.png";
import { ArrowUpIcon } from "@heroicons/react/24/outline";
import { animate, motion as m } from "framer-motion";
import { Link } from "react-router-dom";
import { shuffle } from "lodash";
import { Echo } from "echo3d";
import MainIntro from "./MainIntro";
import Footer from "./Footer";
import projectData from "./projectData";
import Technology from "./Technology";
import ProjectCard from "./ProjectCard";

function Hero() {
  function copyText() {
    /* Copy text into clipboard */
    navigator.clipboard.writeText("lehoangbach7802@gmail.com");
  }

  const [project1, project2] = projectData
    .sort((a, b) => b.createdAt - a.createdAt)
    .slice(0, 2);

  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75 }}
      exit={{ opacity: 0 }}
    >
      <div className="md:max-w-4xl md:mx-5 lg:mx-auto z-0 pt-10 mx-5 pb-10">
        <div className="flex">
          <div className="bg-gray-900/5 relative w-32 h-32 grid place-items-center rounded-full drop-shadow-sm">
            <img className="w-32 h-32" src={avatar} />
            <div className="absolute w-10 h-10 right-2 grid place-items-center rounded-full bg-slate-50 drop-shadow-md bottom-0 translate-y-2">
              <p className="text-3xl">🤝</p>
            </div>
          </div>
        </div>

        <div className="space-y-2 md:space-y-2 mb-10">
          <div className="md:pt-14 md:pb-5 pt-10">
            <MainIntro />
          </div>
          <p className="text-gray-500 text-sm md:text-lg py-5 text-justify md:text-left">
            I'm a developer 📱, digital creator 📷, & curious optimist 🦦. Right
            now, I'm probably exploring new hobbies, activities, and general
            knowledge; but I'm always ready to collaborate with creatives and
            businesses.
          </p>
          <p className="text-gray-500 text-sm md:text-lg leading-10 md:leading-normal">
            View my
            <Link to="/about">
              <span className={`heroBtn`}>About</span>,
            </Link>{" "}
            {/* <Link to="/resume">
              <span className={`heroBtn`}>Resume</span>,
            </Link>{" "} */}
            <Link to="/project">
              <span className={`heroBtn`}>Projects</span>, or
            </Link>{" "}
            <Link to="/contact">
              <span className={`heroBtn`}>Contact</span> me.
            </Link>
          </p>
        </div>

        <h2 className="text-2xl font-semibold pb-5 mb-5">Recent Projects</h2>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 py-2">
          {[project1, project2].map((project) => (
            <Link to={`/project`}>
              <ProjectCard project={project} />
            </Link>
          ))}
        </div>

        <Link to="/project">
          <div className="pt-5 md:pt-5 flex space-x-3 cursor-pointer">
            <p className="text-gray-500 text-md hover:underline">
              See more projects
            </p>
            <div className="rotate-90 ">
              <ArrowUpIcon className="w-5 rotate-90 animate-bounce" />
            </div>
          </div>
        </Link>

        <Footer />
      </div>
    </m.div>
  );
}

export default Hero;
