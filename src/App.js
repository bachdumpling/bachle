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

function App({router}) {
  // const [users, setUsers] = useState([]);
  // const usersCollectionRef = collection(db, "users");
  // useEffect(() => {
  //   const getUsers = async () => {
  //     const data = await getDocs(usersCollectionRef);
  //     setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //   };
  //   getUsers();
  // }, []);
  // console.log(users)

  return (
    <div className="font-inter bg-[F2F2F2]">
      <Nav />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
