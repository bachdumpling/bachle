import GitHub from "./icons/github.svg";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import projectData from "./projectData";

function ProjectDetail({ oneProjectDetail }) {
  let projectDetail = oneProjectDetail;
  let { id } = useParams();

  projectData.find((project) => {
    if (project.id == id) {
      projectDetail = project;
    }
  });

  return (
    <div className="max-w-4xl mx-5 lg:mx-auto pt-10 mb-40">
      <h1 className="text-5xl font-extrabold">{projectDetail.name}</h1>
      <div className="flex gap-2">
          <a href="https://github.com/bachdumpling">
            <img src={GitHub} className="w-5 h-5" name="My github" />
          </a>
        GitHub
      </div>

      <div className="pt-5 pb-12 text-gray-500 text-lg">
        <span>{projectDetail.shortDescription}</span>
      </div>
      {projectDetail?.imageDescription?.splice(0, 1).map((item) => {
        return (
          <div className="w-full h-88 shadow-md my-4">
            <img className="bg-cover" src={item} />
          </div>
        );
      })}
    </div>
  );
}

export default ProjectDetail;
