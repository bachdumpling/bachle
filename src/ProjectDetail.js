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

  console.log(projectDetail);

  return (
    <div>
      {projectDetail.imageDescription.map((item) => {
        return (
          <div className="w-full h-88 shadow-md my-4">
            <img className="bg-cover" src={item} />
          </div>
        );
      })}
      hello {id}
    </div>
  );
}

export default ProjectDetail;
