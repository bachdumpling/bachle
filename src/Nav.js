import React from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { Link, useParams } from "react-router-dom";

function Nav() {
  // let { about } = useParams();

  // console.log(about)

  return (
    <div className="flex justify-between py-10 md:py-16 max-w-5xl mx-5 lg:mx-auto">
      {/* Left */}
      <Link to="/">
        <div>
          <p className="text-xl font-bold uppercase text-gray-500 tracking-wide cursor-pointer">
            Bach Le.
          </p>
        </div>
      </Link>

      {/* Right */}
      {/* <div className="hidden md:visible"> */}
        <div className="grid-flow-col grid-rows-1 grid-cols-5 w-96 justify-items-center text-gray-500 text-lg sm:hidden md:grid gap-x-10">
          <div className="col-span-1">
            <Link to="/about">
              <p className="navBtn">About</p>
            </Link>

            {/* {about == "about" ? ( */}
            <div className="w-full flex justify-center">
              <div className="w-6 h-[2px] bg-gray-400 rounded-md "></div>
            </div>
            {/* ) : null} */}
          </div>

          <div className="col-span-1">
            <Link to="/resume">
              <p className="navBtn">Resume</p>
            </Link>
            <div className="w-full flex justify-center">
              <div className="w-6 h-[2px] bg-gray-400 rounded-md "></div>
            </div>
          </div>

          <div className="col-span-1">
            <Link to="/project">
              <p className="navBtn">Project</p>
            </Link>
            <div className="w-full flex justify-center">
              <div className="w-6 h-[2px] bg-gray-400 rounded-md "></div>
            </div>
          </div>

          <div className="col-span-1">
            <Link to="/contact">
              <p className="navBtn">Contact</p>
            </Link>
            <div className="w-full flex justify-center">
              <div className="w-6 h-[2px] bg-gray-400 rounded-md "></div>
            </div>
          </div>

          <div className="navBtn col-span-1">☀️</div>
        </div>
      {/* </div> */}

      <div className="md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
    </div>
  );
}

export default Nav;
