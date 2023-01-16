import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import {
  faGithub,
  faLinkedin,
  // faInstagram,
  faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer pt-4">
      <div className="text-center">
        <p>
          <small>Copyright © 2022 | MD ANSAR</small>
        </p>
        <p>
          <address>Kolkata, West-Bengal, India</address>
        </p>
        <div>
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
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </button>
          {/* <button className="icon-button">
            <a
              className="icon-button"
              target="blank"
              href="/"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </button> */}
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
          <button className="icon-button">
            <a
              className="icon-button"
              target="blank"
              href="https://www.facebook.com/danish.mohammad.52"
            >
              <FontAwesomeIcon icon={faFacebookSquare} />
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;