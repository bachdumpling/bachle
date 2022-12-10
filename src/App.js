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

function App({ router }) {
  // const [users, setUsers] = useState([]);
  // const [projects, setProjects] = useState([]);

  // const usersCollectionRef = collection(db, "users");
  // useEffect(() => {
  //   const getUsers = async () => {
  //     const data = await getDocs(usersCollectionRef);
  //     setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //   };
  //   getUsers();
  // }, []);
  // const projectCollectionRef = collection(db, "project");

  // useEffect(() => {
  //   const getProjects = async () => {
  //     const data = await getDocs(projectCollectionRef);
  //     // console.log(data)
  //     setProjects(
  //       data.docs.map((doc) => ({
  //         ...doc.data(),
  //         id: doc.id,
  //       }))
  //     );
  //   };
  //   getProjects();
  // }, []);
  // console.log(projectData);

  return (
    <div className="font-inter bg-[F2F2F2]">
      <Nav />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/project" element={<Project projects={projectData} />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
