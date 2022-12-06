import React from "react";
import Technology from "./Technology";

function ProjectCard({ project, setOpenProject }) {
  return (
    <div
      // onClick={(e) => {
      //   console.log(project)
      //   setOpenProject(true);
      // }}
      className="col-span-1 row-span-1 flex cursor-pointer shadow-xl rounded-lg h-full w-full"
    >
      <div className="relative overflow-hidden bg-no-repeat bg-cover w-full h-full">
        <img className="w-full h-full rounded-lg" src={project?.image} />

        <div className="absolute flex flex-col top-0 right-0 bottom-0 left-0 justify-center items-center w-full h-full hover:opacity-100 opacity-0 z-50 transition duration-300 ease-in-out text-sm md:text-lg text-white bg-gray-700 bg-opacity-60 space-y-2 rounded-lg">
          {/* <div className=""> */}

          <p className="font-bold text-lg md:text-xl">{project?.name}</p>

          <p className="text-sm md:text-md mx-10 py-2 text-center">
            {project?.shortDescription}
          </p>

          <div className="flex flex-row space-x-2 text-xs mx-10">
            {project?.technology.map((tech) => {
              return <Technology tech={tech} key={tech} />;
            })}
          </div>

          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
