import { ArrowUpIcon } from "@heroicons/react/24/outline";
import { motion as m } from "framer-motion";
import React from "react";
import { useParams } from "react-router-dom";
import Footer from "./Footer";

function About() {
  return (
    <m.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.75 }}
    exit={{opacity: 0}}
    >
      <div className="max-w-4xl mx-5 lg:mx-auto pt-10">
        <h1 className="text-5xl font-extrabold pb-12">About Me.</h1>

        <h2 className="text-2xl font-semibold pb-5">📖 Education</h2>

        <div className="grid grid-flow-row grid-rows-2">
          <div className="row-span-1 px-5 pb-5 md:pb-10 border-l-[1px]">
            <div className="absolute -translate-x-7 bg-white">○</div>
            <div className="flex justify-between font-medium">
              <p className="text-md md:text-lg"> Fordham University</p>
              <p className="text-lg invisible md:visible">Expected May 2024</p>
            </div>
            <div className="text-sm md:text-md leading-6 md:leading-8 text-justify text-gray-600">
              <span>
                I am a junior majoring in Global Business Technology with a
                minor in Computer Science at the Gabelli School of Business,
                Fordham University. As an aspiring product manager, an excellent
                product is not judged solely on its looks, but on its
                functionality and usability as well. My experience as a
                programmer combined with a business mindset allows me to come up
                with intelligent solutions to technical and non-technical
                challenges, while at the same time designing sleek and visually
                appealing products.
              </span>
            </div>
          </div>

          <div className="row-span-1 px-5 mb-10 md:mb-10 border-l-[1px]">
            <div className="absolute -translate-x-7 bg-white">○</div>
            <div className="flex justify-between font-medium">
              <p className="text-md md:text-lg"> Flatiron School</p>
              <p className="text-lg invisible md:visible">
                Graduated August 2022
              </p>
            </div>
            <div className="text-sm md:text-md leading-6 md:leading-8 text-justify text-gray-600">
              <span>
                I have recently graduated from Flatiron School's Software
                Engineering Bootcamp where I learned crucial technical skills to
                work as a developer. I am experienced using frontend and backend
                technologies such as Ruby, Rails, Node, JavaScript, and React.
                With a global business background, I possess strong skills in
                collaboration, problem-solving, and communication. I am
                passionate about learning new things and staying current with
                technology and bringing innovative ideas to accomplish robust
                projects.
              </span>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold pb-5">👨🏻‍💻 Work Experience</h2>
        <div className="grid grid-flow-row grid-rows-2">
          <div className="row-span-1 px-5 pb-5 md:pb-10 border-l-[1px]">
            <div className="absolute -translate-x-7 bg-white">○</div>
            <div className="flex justify-between font-medium">
              <p className="text-md md:text-lg">
                Vietnam - New York Youth Association
              </p>
              <p className="text-lg invisible md:visible">New York, NY</p>
            </div>
            <div className="text-sm md:text-md leading-6 md:leading-8 text-justify text-gray-600 list-disc">
              <div className="flex justify-between font-medium">
                <p>Project Manager</p>
                <p>January 2022 - June 2022</p>
              </div>
              <ul className="list-disc">
                <li>
                  Strategized and budgeted event campaigns for the “2022
                  Vietnamese Lunar New Year Event”
                </li>
                <li>
                  Managed a 6-people team for event planning, budgeting, and
                  marketing by collaborating through Google Suites and tracking
                  progress through Notion
                </li>
                <li>
                  Created written and visual content to increase social media
                  exposure, receiving 17,000 impressions in three weeks
                </li>
                <li>
                  Achieved total profit of $4,000 in 2 weeks, achieving full
                  capacity for the event and obtaining coverage on 10 national
                  news channels and online newspapers
                </li>
              </ul>
            </div>
          </div>

          <div className="row-span-1 px-5 pb-5 md:pb-10 border-l-[1px]">
            <div className="absolute -translate-x-7 bg-white">○</div>
            <div className="flex justify-between font-medium">
              <p className="text-md md:text-lg">The British Council</p>
              <p className="text-lg invisible md:visible">Hanoi, Vietnam</p>
            </div>
            <div className="text-sm md:text-md leading-6 md:leading-8 text-justify text-gray-600 list-disc">
              <div className="flex justify-between font-medium">
                <p>Customer Service Intern</p>
                <p>January 2021 – July 2021</p>
              </div>
              <ul className="list-disc">
                <li>
                  Coordinated customers with advisors for consultation services.
                  Increased customer satisfaction survey scores by 28%
                </li>
                <li>
                  Provided Tier-1 customer service through formally responding
                  to customer inquiries and supporting front desk requests
                </li>
                <li>
                  Managed bi-weekly emails and calls to build rapport with
                  clients, boosting student re-registration rate by 24%
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-12 flex space-x-3 cursor-pointer">
          <p className="text-black text-md hover:underline">
            More detailed information
          </p>
          <div className="rotate-90 ">
            <ArrowUpIcon className="w-5 rotate-90 animate-bounce" />
          </div>
        </div>

        <div className="md:max-w-4xl md:mx-5 lg:mx-auto z-0 pt-14 pb-20">
            <Footer />
        </div>
      </div>
    </m.div>
  );
}

export default About;
