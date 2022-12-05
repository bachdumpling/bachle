import React from "react";
import Technology from "./Technology";

function ProjectCard({project}) {
  return (
    <div className="col-span-1 row-span-1 border-2 rounded-md flex">
      <div className="relative overflow-hidden bg-no-repeat bg-cover w-full h-full">
        <img src={project?.image} />
        <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"></div>
        <div className="absolute flex flex-col top-0 right-0 bottom-0 left-0 justify-center items-center w-full h-full hover:opacity-100 opacity-0 z-50 transition duration-300 ease-in-out text-sm md:text-lg text-white bg-gray-700 bg-opacity-60 space-y-2">
          {/* <div className=""> */}

          <p className="font-bold text-lg md:text-xl">{project?.name}</p>

          <p className="text-sm md:text-md">{project?.shortDescription}</p>

          <div className="flex flex-row space-x-2 text-xs md:text-sm">
              {project?.technology.map((tech) =>{
                return <Technology tech={tech}/>
              })}
           
          </div>

          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
