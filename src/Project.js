import { AnimatePresence, motion as m } from "framer-motion";
import React, { useState } from "react";
import Footer from "./Footer";
import ProjectCard from "./ProjectCard";
import Technology from "./Technology";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";

function Project({ projects }) {
  // console.log(projects)
  const [openProject, setOpenProject] = useState(false);
  const [oneProject, setOneProject] = useState([]);

  const projectCards = projects.map((project) => {
    return (
      <div
        onClick={(e) => {
          setOneProject(project);
          setOpenProject(!openProject);
        }}
      >
        <ProjectCard
          project={project}
          key={project.id}
          setOpenProject={setOpenProject}
        />
      </div>
    );
  });

  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75 }}
      exit={{ opacity: 0 }}
    >
      <div className="max-w-4xl mx-5 lg:mx-auto pt-10">
        <h1 className="text-5xl font-extrabold pb-10">Project.</h1>
        <div className={`grid lg:grid-cols-2 grid-cols-1 grid-flow-row gap-5`}>
          {projectCards}
        </div>

        {openProject ? (
          <div>
            {/* Main modal */}
            <div className="fixed top-0 left-0 right-0 z-50 overflow-y-hidden w-full h-full bg-black bg-opacity-80 transition-all duration-300 ease-in-out">
              <m.div
                initial={{ x: "100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 0.4 }}
                class="absolute w-full h-full md:max-w-xl bg-[#FBFCF8] shadow-md inset-y-0 right-0"
              >
                {/* Modal content */}
                <div class="py-6 px-6 relative overflow-y-auto overflow-x-hidden">
                  <div
                    onClick={() => {
                      setOpenProject(false);
                    }}
                    className="border-b-2 pb-3 cursor-pointer"
                  >
                    <ArrowLeftCircleIcon className="w-7 h-7" />
                  </div>
                  <div>
                    <p className="pt-5 text-lg md:text-xl font-bold">
                      {oneProject.name}
                    </p>
                  </div>
                  <div>
                    <p className="pb-2 text-sm md:text-md text-gray-500">
                      {oneProject.shortDescription}
                    </p>
                  </div>

                  <div className="w-full h-88 shadow-md">
                    <img className="bg-cover" src={oneProject.image} />
                  </div>

                  <div>
                    <p className="pt-5 text-md md:text-lg font-semibold">
                      About
                    </p>
                    <p>Details coming soon...</p>
                  </div>

                  <div>
                    <p className="pt-5 text-md md:text-lg font-semibold">
                      Technologies
                    </p>
                    <p>Details coming soon...</p>
                  </div>

                  <div>
                    <p className="pt-5 text-md md:text-lg font-semibold">
                      Website
                    </p>
                    <p>Details coming soon...</p>
                  </div>
                </div>
              </m.div>
            </div>
          </div>
        ) : null}

        <Footer />
      </div>
    </m.div>
  );
}

export default Project;
