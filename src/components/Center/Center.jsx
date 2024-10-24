import React from "react";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Introduction from "../Introduction/Introduction";
import Blogs from "../Blogs/Blogs";
import Project from "../Project/Project";
import "./Center.css";

const Center = () => {
  return (
    <div className="center-items">
      <Introduction />
      <About />
      {/* <Project />
      <Blogs/> */}
      <Contact/>
    </div>
  );
};

export default Center;
