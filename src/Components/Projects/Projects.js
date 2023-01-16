import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import contact from "../../Assets/Images/Ema-john.png";
import explore from "../../Assets/Images/Ema-john1.png";
import order from "../../Assets/Images/Ema-john2.png";
import purchaseItem from "../../Assets/Images/Ema-john3.png";
import ProjectsCarousel from "../Carousel/ProjectsCarousel";
import match from "../../Assets/Images/FIFAWORLDCUP.png";
import live from "../../Assets/Images/FIFAWORLDCUP1.png";
import stadium from "../../Assets/Images/FIFAWORLDCUP3.png";
import booking from "../../Assets/Images/FIFAWORLDCUP4.png";
import webpage from "../../Assets/Images/PANDA.png";
import service3 from "../../Assets/Images/PANDA1.png";
import helpline from "../../Assets/Images/PANDA2.png";
import service1 from "../../Assets/Images/PANDA3.png"
import "./Projects.css";

const Projects = () => {
  return (
    <div>
      <div className="container w-75">
        <h1
          className="text-center mt-5 mb-5"
          style={{ color: " rgb(70, 104, 8)" }}
        >
          {" "}
          My All Projects Details{" "}
        </h1>
        <div className="row mt-2 carousel-area">
          <div className="col-md-5 col-lg-5 col-sm-5">
            <ProjectsCarousel
              home={contact}
              about={explore}
              manage={order}
              add={purchaseItem}
            ></ProjectsCarousel>
          </div>
          <div className="col-md-7 col-lg-7 col-sm-7">
            <h3 className="project-title">Ema- Jhon Website</h3>
            <p className="project-description">
              This is an Frontend website.User can Select
              products and  for Buy also can Complete payment via Online
              payment.
            </p>
            <div className="project-detailsP">
              <li>Have admin and user different dashboard.</li>
              <li> Admin can delete, add, manage services.</li>
              {/* <li> Admin can Make Admin also</li> */}
              {/* <li>User can Login via (Google Sign-in,Email & Password) </li> */}
              <li>
                <strong className="technology">Front-end technology:</strong>{" "}
                React js, Bootstrap,React-Router-Dom, 
              </li>
            </div>
          </div>
          <div className="text-center w-100 m-auto">
            <button className="btn project-button" style={{background:" #3D550C",color:"#ECF87F"}}>
              <a
                target="blank"
                href="https://github.com/mdAnsar786/Ema-John"
              >
                Live Preview
              </a>
            </button>
            <button className="btn ml-5 project-button" style={{background:" #3D550C",color:"#ECF87F"}}>
              <a
                target="blank"
                href="https://github.com/mdAnsar786/Ema-John"
              >
                Source Code
              </a>
            </button>
          </div>
        </div>

      <h2 style={{color:"#3D550C"}}>second project info</h2>
        <div className="row mt-2 carousel-area">
          <div className="col-md-5 col-lg-5 col-sm-5">
            <ProjectsCarousel
              home={match}
              about={live}
              manage={stadium}
              add={booking}
            ></ProjectsCarousel>
          </div>
          <div className="col-md-7 col-lg-7 col-sm-7">
            <h3 className="project-title">Fifa World cup Qatar 2022</h3>
            <p className="project-description">
              This is Front-end website.The abiding memories of
               this World Cup will be its many controversies and the 
               historic brilliance of the final, as well as much of 
               the rest of the football. .
            </p>
            <div className="project-detailsP">
              <li>
                User must need to Login via Google or create an free account
              </li>
              {/* <li>User need to Book Tourist Place and give review</li> */}
              {/* <li>
                Tourista Travel service Agency give special winter offer for
                their foreign tourist..
              </li> */}
              {/* <li>
                User will allow to give Feed Back about his/her tourist journey
                after finished their Journey{" "}
              </li> */}
              <li>
                <strong className="technology">Front-end technology:</strong>{" "}
                React js, Bootstrap,React Router,
                Authentication,React,.
              </li>
              {/* <li>
                <strong className="technology">Back-end technology:</strong>{" "}
                Node js,Express js, MongoDB, Heroku,
              </li> */}
            </div>
          </div>
          <div className="text-center w-100 m-auto">
            <button className="btn project-button" style={{background:" #3D550C",color:"#ECF87F"}}>
              <a target="blank" href="https://github.com/mdAnsar786/Fifa-World-cup">
                Live Preview
              </a>
            </button>
            <button className="btn ml-5 project-button" style={{background:" #3D550C",color:"#ECF87F"}}>
              <a
                target="blank"
                href="https://github.com/mdAnsar786/Fifa-World-cup"
              >
                Source Code
              </a>
            </button>
          </div>
        </div>

      <h2 style={{color:"#3D550C"}}>  third project info </h2>

        <div className="row mt-2 carousel-area">
          <div className="col-md-5 col-lg-5 col-sm-5">
            <ProjectsCarousel
              home={webpage}
              about={service3}
              manage={helpline}
              add={service1}
            ></ProjectsCarousel>
          </div>
          <div className="col-md-7 col-lg-7 col-sm-7">
            <h3 className="project-title">Panda Website</h3>
            <p className="project-description">
              This is one of my responsive Website.Anyone can shopping
              to visit shopping site.
              {/* user can Login via Google sign, and email and password. */}
            </p>
            <div className="project-detailsP">
              <li>
                Users can Purchase and give a review for each product.
              </li>
              <li>User can view various types of  bag</li>
              <li>User can view various types of  Shoes and watch</li>
              {/* <li> Admin can delete, add, manage Foods.</li> */}
              {/* <li>
                User Can Create an Account and Login Via firebase authentication
              </li> */}
              <li>
                <strong className="technology">Front-end technology::</strong>{" "}
                React js, Bootstrap,React Router,
              </li>
              {/* <li>
                <strong className="technology">Back-end technology:</strong>{" "}
                Node js,Express js, MongoDB,Session Storage
              </li> */}
            </div>
          </div>
          <div className="text-center w-100 m-auto">
            <button className="btn project-button" style={{background:" #3D550C",color:":#ECF87F"}}>
              <a
                target="blank"
                href="https://github.com/mdAnsar786/panda-commerce-bootstrap"
              >
                Live Preview
              </a>
            </button>
            <button className="btn ml-5 project-button" style={{background:" #3D550C",color:"#ECF87F"}}>
              <a
                target="blank"
                href="https://github.com/mdAnsar786/panda-commerce-bootstrap"
              >
                Source Code
              </a>
            </button>
          </div>
        </div>

        {/* <div className="row mt-2 carousel-area">
          <div className="col-md-5 col-lg-5 col-sm-5">
            <ProjectsCarousel
              home={home4}
              about={service4}
              manage={service4}
              add={product}
            ></ProjectsCarousel>
          </div>
          <div
            className="col-md-7 col-lg-7 col-sm-7"
            // style={styles.slideInLeft}
          >
            <h3 className="project-title">Our Code Education</h3>
            <p className="project-description">
              This is Our Code Education website.user can Choice the service as
              he/she want.
            </p>
            <div className="project-detailsP">
              <li>User can Choice the perfect teaching as he/she Want</li>
              <li>
                We strive to provide the highest learning standards in
                programming at low cost.
              </li>
              <li>
                The most advanced service among our services is to spread the
                details of programming in line with the advanced technology of
                the world
              </li>
              <li>
                Separate campuses for students and teachers have our own way of
                doing private gym services
              </li>
              <li>
                <strong className="technology">Front-end Technology:</strong>{" "}
                React js, Bootstrap,React Router,Firebase Authentication,Wow js
              </li>
            </div>
          </div>
          <div className="text-center w-100 m-auto">
            <button className="btn btn-info project-button">
              <a
                target="blank"
                href="https://jahanara-assignment-9.netlify.app/"
              >
                Live Preview
              </a>
            </button>
            <button className="btn btn-info ml-5 project-button">
              <a
                target="blank"
                href="https://github.com/zarakhatun58/review-pro"
              >
                Source Code
              </a>
            </button>
          </div>
        </div>
        <div id="moreButton" className="text-center pb-5 more-projects-btn">
          <Link to="/projects">
            <button className="btn ">More Projects</button>
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default Projects;
