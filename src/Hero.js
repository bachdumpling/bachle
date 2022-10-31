import React from "react";
import avatar from "./Assets/avatar1.png";
import { ArrowUpIcon } from "@heroicons/react/24/outline";

function Hero() {
  return (
    <div>
      <div className="max-w-4xl mx-5 lg:mx-auto border- pt-10">
        <div className="flex">
          <div className="bg-gray-900/5 relative w-28 h-28 grid place-items-center rounded-full drop-shadow-sm">
            <img className="w-28 h-28" src={avatar} />
            <div className="absolute w-9 h-9 right-2 grid place-items-center rounded-full bg-slate-50 drop-shadow-md bottom-0 translate-y-2">
              <p className="text-2xl">🤝</p>
            </div>
          </div>
        </div>

        <div className="">
          <p className="py-5 font-medium text-5xl">Hi, I'm Bach!</p>
          <p className="text-gray-500 text-md">
            Full-stack web developer based in New York City, business mindset,
            enthusiast, and a minimalist.{" "}
          </p>
        </div>

        <div className="pt-10 flex space-x-3 cursor-pointer">
          <p className="text-gray-500 text-md hover:underline">See more about me</p>
          <div className="rotate-90 ">
            <ArrowUpIcon className="w-5 rotate-90 animate-bounce" />
          </div>
        </div>

        <div>
          {/* <FontAwesomeIcon icon="fa-brands fa-linkedin" /> */}
        </div>
      </div>
    </div>
  );
}

export default Hero;
