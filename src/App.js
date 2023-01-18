import { useEffect, useState } from "react";
import "./App.css";
import { db } from "./firebase-config.js";
import { collection, getDocs } from "firebase/firestore";
import Hero from "./Hero";
import Nav from "./Nav";
import Resume from "./Resume";
import { Routes, Route } from "react-router-dom";
import Contact from "./Contact";
import About from "./About";
import Project from "./Project";
import projectData from "./projectData";
import ProjectDetail from "./ProjectDetail";

function App({ router }) {
  console.log(
    `%c
    / / / o.o
    / / / >^<
    /___/ /
    Thank you for checking out my website. To explore more, visit this github repo: https://github.com/bachdumpling/bachle
`,
    `font-family: monospace`
  );

  const [oneProjectDetail, setOneProjectDetail] = useState(null);

  return (
    <div className="font-inter bg-[F2F2F2]">
      <Nav />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route
          path="/project"
          element={
            <Project
              setOneProjectDetail={setOneProjectDetail}
              oneProjectDetail={oneProjectDetail}
            />
          }
        />
        <Route
          path="/project/:id"
          element={<ProjectDetail oneProjectDetail={oneProjectDetail} />}
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
