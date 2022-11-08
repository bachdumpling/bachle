import React, { useEffect, useState } from "react";
import avatar from "./Assets/avatar1.png";
import { ArrowUpIcon } from "@heroicons/react/24/outline";
import { animate, motion as m } from "framer-motion";
import { Link } from "react-router-dom";
import { shuffle } from "lodash";

function Hero() {
  const [color, setColor] = useState("bg-indigo-800")

  function copyText() {
    /* Copy text into clipboard */
    navigator.clipboard.writeText("lehoangbach7802@gmail.com");
  }

  const colors = [
    "indigo",
    "blue",
    "green"
  ];

  useEffect(() => {
    setColor(shuffle(colors).pop());
  }, []);

  console.log(`hover:bg-${color}`)

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

        <div className="space-y-5 md:space-y-2">
          <p className="py-5 font-medium text-5xl">Hi, I'm Bach!</p>
          <p className="text-gray-500 text-md leading-10">
            Full-stack web developer based in New York City, business mindset,
            enthusiast, and a minimalist.
          </p>
          <p className="text-gray-500 text-md leading-10">
            I'm currently probably exploring new hobbies, activities, and
            knowledge; but I'm always looking to collaborate with creatives and
            businesses.
          </p>
          <p className="text-gray-500 text-md leading-10">
            View my
            <Link to="/about">
              <span className={`hover:bg-${color}-800 heroBtn`}>About</span>,
            </Link>{" "}
            <Link to="/resume">
              <span className={`hover:bg-${color} heroBtn`}>Resume</span>,
            </Link>{" "}
            <Link to="/project">
              <span className={`hover:${color} heroBtn`}>Projects</span>,
            </Link>{" "}
            <Link to="/contact">
              <span className={`hover:${color} heroBtn`}>Contact</span>
            </Link>
            , or send me an email at
            <span
              title="Click to copy to clipboard"
              onClick={() => copyText()}
              className="heroBtn"
            >
              lehoangbach7802@gmail.com
            </span>
          </p>
        </div>

        <Link to="/about">
          <div className="pt-10 flex space-x-3 cursor-pointer">
            <p className="text-gray-500 text-md hover:underline">
              See more about me
            </p>
            <div className="rotate-90 ">
              <ArrowUpIcon className="w-5 rotate-90 animate-bounce" />
            </div>
          </div>
        </Link>

        <div>{/* <FontAwesomeIcon icon="fa-brands fa-linkedin" /> */}</div>
      </div>
    </m.div>
  );
}

export default Hero;
