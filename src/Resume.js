import { motion as m } from "framer-motion";
import React, { useState } from "react";
import Footer from "./Footer";

function Resume() {

  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75 }}
      exit={{ opacity: 0 }}
    >
      <div className="max-w-4xl mx-5 lg:mx-auto pt-10">
        <div>
          <h1 className="text-5xl font-extrabold">Resumé.</h1>

          <div className="py-5 text-gray-500">
            <span>
              Reach out to me via my contact page. View or download the resume.
            </span>
          </div>

          <div className="">
            
          </div>
        </div>

        <Footer />
      </div>
    </m.div>
  );
}

export default Resume;
