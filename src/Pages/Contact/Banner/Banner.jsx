import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import brushMan from '../../../Images/brushman.png';
import HeroMainbg from '../../../Images/hero-main-bg.png';
import injectTool from '../../../Images/inject-tool.png';
import inject from '../../../Images/injection.png';
import staircaseMan from '../../../Images/staircase.png';
const Banner = () => {
    return (
        <section className="banner-all text-white">
            <Container>
                <Row className="align-items-center">
                        <div className="section-title">
                            <h1>Contact Us</h1>
                        </div>
                        <div className="breadcrumb-nav">
                            <a href="/" className="text-decoration-none">Home Page</a>
                            <span href="/" className="text-decoration-none ml-2">Contact Us</span>
                        </div>
                </Row>
            </Container>
        </section>
    );
};

export default Banner;