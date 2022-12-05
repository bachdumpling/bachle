import { motion as m } from "framer-motion";
import React from "react";
import ProjectCard from "./ProjectCard";
import Technology from "./Technology";

function Project({ projects }) {
  console.log(projects);

  const projectCards = projects.map((project) => {
    return <ProjectCard project={project} key={project.id} />;
  })

  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75 }}
      exit={{ opacity: 0 }}
    >
      <div className="max-w-4xl mx-5 lg:mx-auto pt-10">
        <h1 className="text-5xl font-extrabold pb-10">Project.</h1>

        <div
          className={`grid lg:grid-cols-2 grid-cols-1 grid-flow-row gap-5 px-2`}
        >
          {projectCards}
        </div>
      </div>
    </m.div>
  );
}

export default Project;
