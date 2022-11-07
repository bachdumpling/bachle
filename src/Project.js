import { motion as m} from "framer-motion";
import React from "react";

function Project() {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75 }}
      exit={{ opacity: 0 }}
    >
      <div className="max-w-4xl mx-5 lg:mx-auto pt-10 border-2">
        <h1 className="text-5xl font-extrabold pb-10">Project.</h1>

        <div className="grid grid-cols-2 grid-rows-1 grid-flow-col">
          <div className="col-span-1 row-span-1 border-2 flex">
            <div className="w-full h-full">
              <img />.
            </div>
            <p>Boomergram</p>
          </div>

          <div className="col-span-1 row-span-1 border-2 flex">
            <div className="w-full h-full">
              <img />.
            </div>

            <div className="absolute">
              <p className="p-5">Boomergram</p>
            </div>
          </div>

          <div></div>
        </div>
      </div>
    </m.div>
  );
}

export default Project;
