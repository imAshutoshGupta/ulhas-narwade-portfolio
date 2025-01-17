import React, { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import AnimatedLettersFast from "../RuberBand/RubberBand";
import { useTypewriter, Cursor } from "react-simple-typewriter";

import "./Introduction.css";

const Introduction = () => {
  const [letterClass, setLetterClass] = useState("text-animate-fast");

  const [typeEffect] = useTypewriter({
    words: ["Cloud Messenger", "3X AWS Certified", "Software Engineer", "Mentor & Professional", "Training Specialist"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 50,
  });

  const introName = "Ulhas Narwade.".split("");
  // const introTitle = "Cloud Messenger.".split("");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-fast-hover");
    }, 30);
  });

  return (
    <section className="intro-center-main">
      <div className="center-container">
        <Fade direction="up" duration={300} cascade>
          <h3 className="intro-intro">Hello, I’m</h3>
          <h1 className="intro-name">
            <AnimatedLettersFast
              letterClass={letterClass}
              strArray={introName}
              idx={15}
            />
          </h1>
          {/* <h1 className="intro-main">
            <AnimatedLettersFast
              letterClass={letterClass}
              strArray={introTitle}
              idx={15}
            />
          </h1> */}
          <h1
            className="intro-main">
            {typeEffect}
            <Cursor />
          </h1>
          <h3 className="intro-sub">
            I'm a <Link>Software Engineer, Mentor, & Professional</Link> based in Bengaluru, Karnataka - currently working at Itvedant Education Pvt. Ltd. As a <Link>Senior Trainer</Link>, I specialize in mentoring and applying cutting-edge cloud technologies on the <Link>Amazon Web Services (AWS)☁️</Link> platform with <Link>DevOps</Link> tools.
          </h3>
          <h3 className="intro-button">
            <a
              target="-blank"
              href="https://drive.google.com/file/d/1nYDiYC3sERCWLEkRuje76Ph8BmPAvHHd/view?usp=sharing"
            >
              Check out my resume !
            </a>
          </h3>
        </Fade>
      </div>
    </section>
  );
};

export default Introduction;
