import React from "react";

function Technology({tech}) {
  return (
    <div className="px-2 py-1 rounded-full bg-gray-400 bg-opacity-60 text-white shadow-md">
      <p>{tech}</p>
    </div>
  );
}

export default Technology;
