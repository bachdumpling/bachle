import { motion as m } from "framer-motion";
import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf/dist/esm/entry.webpack";
import resume from "./Assets/resume.pdf";
import Footer from "./Footer";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;


function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

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
              Reach out to me via my contact page. View or <a
                  className="underline text-blue-500"
                  href="https://drive.google.com/file/d/1fIeQUcjpqLTvn1E99HCMOTD6pPSDDOuJ/view?usp=sharing"
                  target="_blank"
                >
                  download
                </a> the resume.</span>
          </div>

          <div className="">
            <Document
              className="w-full flex justify-center scale-75 md:scale-100 -translate-y-40 md:translate-y-0 md:translate-x-0"
              file={resume}
              onLoadSuccess={onDocumentLoadSuccess}
            >
              <Page
                pageNumber={pageNumber}
                className=" scale-75 md:scale-100"
                renderMode="canvas"
              />
            </Document>
          </div>
        </div>
        <div className=" -translate-y-80 md:translate-y-0">
          <Footer />
        </div>
      </div>
    </m.div>
  );
}

export default Resume;
