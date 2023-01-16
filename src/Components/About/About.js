import React from 'react';
import { Typewriter } from "react-simple-typewriter";
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import beauty from "../../Assets/Images/photo.png";

import {
    faGithub,
    faLinkedin,
    faInstagram,
    faFacebookSquare,
  } from "@fortawesome/free-brands-svg-icons";

const About = () => {
    return (
        <div>
            <div className="row mt-5 ">
        <div className=" col-md-5 col-lg-5 col-sm-5">
          <h1 className="about-title font ">
            <span style={{ color: "#4CD7D0" }}> HI !</span> <br />
            I'M <br />
            <Typewriter
              words={[" MOHAMMED", "ANSAR"]}
              loop={5}
              cursor
              cursorStyle="|"
              typeSpeed={10}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>
          <h4 style={{ color: " ##1A4314" }}>
            <Typewriter
              words={[
                "HTML Developer",
                "Fronted Designer",
                "UI/UX Designer",
                "Graphic Designer",
              ]}
              loop={5}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h4>
          <p className="mt-2 paragraph" style={{color:"#4C5270"}}>
            I am an enthusiastic HTML developer <br /> with knowing some
            framework for the <br />bootstrap and the Tailwind. I know Basic{" "}
            <br />
           React but basically a Graphic Designer.
          </p>
          <button className="icon-button">
            <a
              className="icon-button"
              target="blank"
              href="https://www.linkedin.com/in/mohammed-ansar-126362216/"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </button>
          <button className="icon-button">
            <a
              className="icon-button"
              target="blank"
              href="https://github.com/mdAnsar786"
            >
              {" "}
              <FontAwesomeIcon icon={faGithub}/>
            </a>
          </button>
          <button className="icon-button">
            <a
              className="icon-button"
              target="blank"
              href="https://www.facebook.com/danish.mohammad.52"
            >
              <FontAwesomeIcon icon={faFacebookSquare} />
            </a>
          </button>
          {/* <button className="icon-button">
            <a
              className="icon-button"
              target="blank"
              href="/"
            >
              {" "}
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </button> */}
          {/* <button className="icon-button">
            <a
              className="icon-button"
              target="blank"
              href="/"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </button> */}

        </div>
        <div className=" col-md-6 col-lg-6 col-sm-12 col mb-5">
          <div
            className="profile-pic"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <img
              id="image"
              src={beauty}
              alt=".."
              style={{ borderRadius: "50%",}}
            />
          </div>

          <div data-aos="zoom-out-up">
            <button className="btn mt-3 mx-2" style={{background:"#3D550C",color:"#ECF87F"}}>Hire Me</button>
            <button className="btn mt-3 resume-download" style={{background:"#3D550C",color:"#ECF87F"}}>
              <a
                className="text-light"
                href="https://drive.google.com/file/d/1O9n0BYilRGP-eBzE1S-rTJ2hHY2UaSce/view?usp=sharing"
                download
              >
                Download Resume
              </a>
            </button>
          </div>
        </div>
      </div>
        </div>
    );
};

export default About;