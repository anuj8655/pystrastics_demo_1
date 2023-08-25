import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import donto from "../../../Images/about-banner1.png";
import dontoAnimated from "../../../Images/cleaner.png";
import "./About.css";
import feature1 from "../../../Images/emergency-service-icon-vector-12917924.jpg";
import feature2 from "../../../Images/download.png";
import feature3 from "../../../Images/images.jpg";
// import icon from "";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    AOS.refresh();
  }, []);
  return (
    <section>
      <section className="pb-0" id="about">
        <div className="container" style={{ marginTop: "100px" }}>
          <div className="row">
            <div className="col-12 py-3 bg-holder-image">
              <div className="bg-holder bg-size"></div>
              <h1 className="text-center">ABOUT US</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="bg-holder bg-size"></div>

        <div className="container bg-image">
          <div className="row align-items-center">
            <div className="side-left-img col-md-6 order-lg-1 mb-5 mb-lg-0">
              <img
                className="fit-cover rounded-circle w-90"
                src="https://themewagon.github.io/medico/img/top_service.png"
                alt="..."
              />
            </div>
            <div className="col-md-6 text-center text-md-start">
              <h2 className="fw-bold mb-4">
                We are developing a healthcare
                <br className="d-none d-sm-block" />
                system around you
              </h2>
              <p>
                We think that everyone should have easy access to excellent{" "}
                <br className="d-none d-sm-block" />
                healthcare. Our aim is to make the procedure as simple as{" "}
                <br className="d-none d-sm-block" />
                possible for our patients and to offer treatment no matter
                <br className="d-none d-sm-block" />
                where they are — in person or at their convenience.{" "}
              </p>
              <div className="py-3">
                <button
                  className="btn btn-lg btn-outline-primary rounded-pill"
                  type="submit"
                >
                  Known more
                </button>
              </div>
              <div className="banner_item">
                <div className="single_item">
                  <img class="feature-item" src={feature1} alt="" />
                  <h5>Service</h5>
                </div>
                <div className="single_item">
                  <img class="feature-item" src={feature2} alt="" />
                  <h6>Appointment</h6>
                </div>
                <div className="single_item">
                  <img class="feature-item" src={feature3} alt="" />
                  <h5>24/7 Service</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;
