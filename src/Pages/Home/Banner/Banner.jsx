import "@fontsource/josefin-sans";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
// import doctorfinding from '../../../Images/doctorfinding.c2532ac3.png';
// import heroTeeth from '../../../Images/hero-theeth.54c2c4e9.png';
// import womanbrush from '../../../Images/backgroud_image-removebg-preview.png';
import "./Banner.css";
import Header from "../../../Pages/Home/Header/Header";
import side_image from "../../../Images/banned-side-img.jfif";

const Banner = () => {
  return (
    <section className="single-hero-slide text-white d-flex justify-content-center align-items-center">
      <Container>
        <Row className="align-items-center single-hero-row">
          <div class="col-md-75 col-xl-6 col-xxl-5 text-md-start text-center py-6">
            {/* <Col md={12} sm={12} lg={6}> */}
            <div className="hero-slide-left justify-content-end align-items-center text-center text-lg-start">
              <h2>Better Life Through</h2>
              <h1>Better Mental Health</h1>
              <p className="mb-xs-5">
                Join us to a fun and friendly dental environment. Our
                professionals are working so hard to see smile on your face that
                you deserve! We are dedicated about our duties.
              </p>
              <div className="banner-btn m-sm-auto">
                <Link to="/">
                  <button className="theme-btn btn-fill">
                    Book Appoinment
                  </button>
                </Link>
                  <button className="theme-btn btn-fill">Know More</button>
              </div>
            </div>
          </div>
          {/* </Col> */}
          {/* <Col md={12} sm={12} lg={6} className="mt-sm-5"> */}
          <div
            class="hero-slide-right col-md-5 col-xl-6 col-xxl-7 order-0 order-md-1 text-end mt-sm-5"
          >
            <img class="pt-7 pt-md-0 w-100" src={side_image} />
          </div>
          {/* </Col> */}
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
