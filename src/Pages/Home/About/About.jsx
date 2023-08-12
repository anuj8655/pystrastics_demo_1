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
    // <section className="about-wrapper">
    //     <Container>
    //         <Row>
    //             <Col md={12} lg={6}>
    //                 <div className="about-left">
    //                     <img src={donto} alt="donto" className="img-fluid donto" />
    //                     <img src={dontoAnimated} alt="donto" className="img-fluid animated dontoAnim" />
    //                 </div>
    //             </Col>
    //             <Col md={12} lg={6}>
    //                 <div className="about-right mt-5 mt-lg-0">
    //                     <div className="about-content text-start" data-aos="zoom-in">
    //                         <h1>Welcome to a Family</h1>
    //                         <p>Welcome to Datobbo Dental represents everything going to dentist necessary. We have upgraded your dreaded dentist appointment and transformed it into a relaxing. Consectetur adipisicing elit. Quod ea, consequuntur itaque enim et expedita, optio omnis ipsa magni, perspiciatis totam ipsum! Voluptatibus, neque at.</p>
    //                         <a href='/page/about'>About Us</a>
    //                     </div>
    //                     <div className="fun-fact-sec" data-aos="fade-right">
    //                         <div className="single-fun">
    //                             <span>500</span>
    //                             <span>+</span>
    //                             <p>Happy Patients</p>
    //                         </div>
    //                         <div className="single-fun sp-fun" data-aos="fade-right">
    //                             <span>88</span>
    //                             <span>+</span>
    //                             <p>Qualified Doctors</p>
    //                         </div>
    //                         <div className="single-fun" data-aos="fade-left">
    //                             <span>25</span>
    //                             <span>+</span>
    //                             <p>Years Experience</p>
    //                         </div>
    //                         <div className="single-fun sp-fun" data-aos="fade-left">
    //                             <span>50</span>
    //                             <span>+</span>
    //                             <p>Dental Awards</p>
    //                         </div>
    //                         <span className="line"></span>
    //                     </div>
    //                 </div>
    //             </Col>
    //         </Row>
    //     </Container>
    // </section>
    <section>
      <section className="pb-0" id="about">
        <div className="container" style={{ marginTop: "10rem" }}>
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
            <div
              className="col-md-6 order-lg-1 mb-5 mb-lg-0"
              style={{ borderRadius: "50%" }}
            >
              <img
                className="fit-cover rounded-circle w-100"
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
                  Learn more
                </button>
              </div>
              <div class="banner_item">
                <div class="single_item">
                  <img
                    src={feature1}
                    alt=""
                    style={{ height: "5rem", width: "5rem" }}
                  />
                  <h5>Service</h5>
                </div>
                <div class="single_item">
                  <img
                    src={feature2}
                    alt=""
                    style={{ height: "5rem", width: "5rem" }}
                  />
                  <h5>Appointment</h5>
                </div>
                <div class="single_item">
                <img
                    src={feature3}
                    alt=""
                    style={{ height: "5rem", width: "5rem" }}
                  />
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
