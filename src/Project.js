import { AnimatePresence, motion as m } from "framer-motion";
import React, { useState } from "react";
import Footer from "./Footer";
import ProjectCard from "./ProjectCard";
import Technology, { TechnologyModal } from "./Technology";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";
import ProjectDetail from "./ProjectDetail";
import { Navigate, useNavigate } from "react-router-dom";

function Project({ projects, setOneProjectDetail, oneProjectDetail }) {
  const navigate = useNavigate();
  const [openProject, setOpenProject] = useState(false);
  const [oneProject, setOneProject] = useState([]);
  console.log(oneProjectDetail);

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
      <div className="max-w-4xl mx-5 lg:mx-auto pt-10 overflow-y-hidden">
        <h1 className="text-5xl font-extrabold pb-10">Project.</h1>
        <div className={`grid lg:grid-cols-2 grid-cols-1 grid-flow-row gap-5`}>
          {projectCards}
        </div>

        {openProject ? (
          <div>
            {/* Main modal */}
            <div className="overflow-y-hidden overflow-x-hidden fixed top-0 left-0 right-0 z-50 w-full h-full bg-black bg-opacity-80 transition-all duration-300 ease-in-out">
              <m.div
                initial={{ x: "100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 0.4 }}
                class="absolute w-full h-full md:max-w-xl bg-[#FBFCF8] shadow-md inset-y-0 right-0"
              >
                {/* Modal content */}
                <div class="py-6 px-6 relative h-full w-full">
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
                    <div className="pt-5 flex justify-between items-center">
                      <p className="text-md md:text-lg font-semibold">About</p>
                      <button
                        onClick={() => {
                          setOneProjectDetail(oneProject);
                          navigate(`/project/${oneProject.id}`);
                        }}
                        className="text-sm text-gray-500"
                      >
                        See more ...
                      </button>
                    </div>
                    <p className="text-gray-500 text-justify">
                      {oneProject.longDescription}
                    </p>
                  </div>

                  <div>
                    <p className="pt-5 text-md md:text-lg font-semibold">
                      Technologies
                    </p>
                    <div className="flex space-x-4">
                      {oneProject.technology.map((tech) => {
                        return <TechnologyModal tech={tech} />;
                      })}
                    </div>
                  </div>

                  <div>
                    <p className="pt-5 text-md md:text-lg font-semibold">
                      Website
                    </p>
                    <p>Details coming soon...</p>
                  </div>

                  <div>
                    <p className="pt-5 text-md md:text-lg font-semibold">
                      Github
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
