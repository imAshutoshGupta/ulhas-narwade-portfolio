import React, { useState } from "react";
import "./Blogs.css";
import BlogEach from "./BlogEach";
import List from '../../config/List'
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
const Blogs = () => {
  const [showMore, setshowMore] = useState(false);
 

  const numberOfItems = showMore ? List.length : 6;

  return (
    <section>
      <div className="blogMain">
        <div className="blog-heading">
          <Fade>
            <h2 className="hover-underline-animation"><Link>03.</Link>My Blogs</h2>
          </Fade>
        </div>
        <div className="blog-container">
          <ul className="blog-container-ul">
            <Fade direction="up" damping={0.1} duration="500" cascade>
              {List.slice(0, numberOfItems).map((item) => {
                return (
                  <BlogEach
                    siteLink={item.siteLink}
                    title={item.title}
                    description={item.description}
                  />
                );
              })}
            </Fade>
          </ul>
        </div>
        <div className="otherbtn">
          <Fade>
            <h3 onClick={() => setshowMore(!showMore)} className="intro-button">
              {showMore ? "Show Less" : "Show More"}
            </h3>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
