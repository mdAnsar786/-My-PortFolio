import React from 'react';
import './Services.css';
import UxDesign from "../../Assets/Images/UxDesign.jpg"
import allIcon from  "../../Assets/Images/AllIcon.jpg"


const Service = () => {
    return (
        <div>
               <div className=" mt-5 ">
        <h1 className="text-center font pt-5"> Choose I Provide</h1>
        <div>
          <div className="row d-flex justify-content-center align-items-center lg">
            <div className="col-md-6 col-lg-4 col-sm-12">
              <div className="service">
                <img src={allIcon} alt="" style={{width:"250px",marginTop:"15px"}}/>

                <h3>Web Designing</h3>
                <p className="paragraph3">
                  I am expert in web designing. I can add functionality besides
                  designing a webpage. I use HTML, CSS, Bootstrap, Vanilla Js,
                  React JS for it. You can see some of my works below
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-sm-12">
              <div className="service ">
                <img
                  className="mern-image "
                  src= {UxDesign}
                  alt=""
                  style={{width:"250px",marginTop:"15px"}} />
                <h3>UI/UX Designer</h3>
                <p className="paragraph3">
                  I am a UI/UX Designer. I can convert  Html to adobe xd, html to psd, html to Figma,html to photoshop,
                  html to illustrator
                 You can see i have done some HTML project.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-sm-12">
              <div className="service">
                <img src="https://i.ibb.co/DrhMrzg/psd.png" alt="" style={{width:"250px"}} />

                <h3>PSD To HTML</h3>
                <p className="paragraph3">
                  I can covert any PSD design to a responsive webpage. I use
                  HTML, CSS, Bootstrap, Vanilla Js, React JS for it. You can see
                  some of my works in portfolio tab in this website.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Service;