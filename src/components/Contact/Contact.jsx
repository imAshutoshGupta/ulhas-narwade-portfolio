import React, { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import AnimatedLettersFast from "../RuberBand/RubberBand";
import "./Contact.css";
const Contact = () => {

  const [letterClass, setLetterClass] = useState("text-animate-fast");
  const getInTouch = "Get In Touch".split("");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-fast-hover");
    }, 30);
  });


  return (
    <section>
      <div id="contact" className="contact-container">
        <p className="intro-intro">
          <span>02.</span> What’s Next?
        </p>
        <Fade>

          <h2>
            <AnimatedLettersFast
              letterClass={letterClass}
              strArray={getInTouch}
              idx={15}
            />
          </h2>
        </Fade>
        <p className="contact-des">
          You can drop me an email or connect with me via LinkedIn, I'll surely get back to you at the earliest.
        </p>
        <a href="mailto:narwade.uu@gmail.com">
          <Fade> <h3 className="intro-button contact-btn">Drop me an email</h3></Fade> </a>
        <a href="https://in.linkedin.com/in/ulhas-narwade-aws-certified-devops">
          <Fade> <h3 className="intro-button contact-btn">Connect via LinkedIn</h3></Fade> </a>

        <a href="https://api.whatsapp.com/send?phone=919403666037" target='_blank'>
          <Fade> <h3 className="intro-button contact-btn">Message me on WhatsApp <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-activity"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg></h3></Fade></a>
      </div>
    </section>
  );
};

export default Contact;
