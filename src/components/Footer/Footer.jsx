import React from "react";
import { Fade } from "react-awesome-reveal";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <Fade>
        <div className="footer-text">
          <a
            className="hover-underline-animation"
            href="https://github.com/imAshutoshGupta"
          >
            Developed with a cup of ☕ by Ashutosh Gupta for Ulhas Narwade
          </a>
        </div>
      </Fade>
    </footer>
  );
};

export default Footer;
