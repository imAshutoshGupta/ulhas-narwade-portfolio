import React from "react";
import { Fade } from "react-awesome-reveal";
import profile from "../../assets/images/profileImage.jpg";
import { Link } from "react-router-dom";

const AboutMain = () => {
  return (
    <div>
      <div className="about-main">
        <div className="about-main-left">
          <div className="about-main-left-top">
            <Fade direction="up" damping={0.2} duration="400" cascade>
              <p>
                👋 Hi, I’m Ulhas, a <Link>Training Specialist</Link> based in Bengaluru, Karnataka, with over <Link>14 years</Link> of hands-on experience in which 6 years of Cloud Experience. My passion for mentoring and software engineering has driven me to earn multiple badges as a <Link>Professional and Mentor</Link> on my personal website. 💼✨ I’m always on the lookout for new opportunities to grow and share knowledge with others, empowering them to achieve their best! 🚀I'm open to <Link>mentoring, partnering</Link> on side projects and brainstorming.
              </p>
              <p>
                Here are a few <Link>technologies</Link> I’m proficient in :
              </p>
            </Fade>
          </div>
          <Fade direction="up" damping={0.2} duration="400" cascade>
            <div className="about-main-left-buttom">
              <ul>
                <li>AWS Solutions Architect</li>
                <li>AWS SysOps Administrator</li>
                <li>EC2</li>
                <li>S3</li>
                <li>CloudWatch</li>
                <li>VPC</li>
                <li>SNS</li>
                <li>Docker</li>
                <li>Redshift</li>
                <li>Devops</li>
                <li>Kubernetes</li>
                <li>Terraform</li>
                <li>Jenkins</li>
                <li>CI/CD</li>
              </ul>
            </div>
          </Fade>
        </div>
        <div className="about-main-right">
          <Fade>
            <div className="about-image-cover">
              <img className="about-main-right-image" src={profile} alt="" />
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default AboutMain;
