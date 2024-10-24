import React from "react";
import { Fade } from "react-awesome-reveal";
import "./Project.css";
import ProjectContainer from "./ProjectContainer";
import ProjectContainerLast from "./ProjectContainerLast";
import ProjectFlip from "./ProjectFlip";
import ProjectFlip2 from "./ProjectFlip2";
import ProjectContainer1 from "./ProjectContainer1";
import ProjectFlip3 from "./ProjectFlip3";
const Project = () => {
  return (
    <div id="work" className="projects">
        <h2 className="head">
        <Fade direction="left" duration="300" cascade>
          <div className="span">
            <span>02.</span>
          </div>
          <div className="head-name">Some Things I’ve Built</div>
      </Fade>
      <Fade direction="right">

          <div className="hline"></div>
      </Fade>
        </h2>
      <div className="section">
        <div className="project-main-main">
          <Fade  damping={0.2}>
            <ProjectContainer1 />
            <ProjectFlip3 />
            <ProjectContainer />
            <ProjectFlip />
            <ProjectContainerLast />
            <ProjectFlip2 />
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Project;
