import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BsPersonWorkspace } from "react-icons/bs";
import AnimationLottie from "./AnimationLottie";
import GlowCard from "./GlowCard";
import educationData from "./educationData";
import experienceData from "./experienceData";
import certificationData from "./certificationData";
import educationLottie from "../../lottie/study.json";
import experienceLottie from "../../lottie/exp.json";
import certificationLottie from "../../lottie/certi.json";
import "./Education.css"; // Ensure the CSS file path is correct

function EducationExperience() {
  return (
    <Container fluid className="education-experience-section">
      <Container>
        <Row className="justify-content-center text-center mt-5">
          <Col md={8}>
            <h4 className="section-title">Education</h4>
            <div className="section-line"></div>
          </Col>
        </Row>
        <Row className="justify-content-center align-items-center">
          <Col md={5} className="d-flex justify-content-center mb-4">
            <div className="lottie-animation-container">
              <AnimationLottie animationData={educationLottie} />
            </div>
          </Col>
          <Col md={7}>
            <div className="education-list position-relative">
              <div className="timeline-line"></div>
              {educationData.map((education, index) => (
                <GlowCard key={index} className="education-card mb-3">
                  <div className="p-3 text-white">
                    <div className="text-center">
                      <p className="text-xs sm:text-sm text-primary mb-1">
                        {education.duration}
                      </p>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                      <div className="text-primary transition-all duration-300 hover:scale-125">
                        <BsPersonWorkspace size={30} />
                      </div>
                      <div>
                        <p className="text-base sm:text-lg mb-1 font-medium uppercase">
                          {education.title}
                        </p>
                        <p className="text-sm sm:text-base">
                          {education.institution}
                        </p>
                      </div>
                    </div>
                  </div>
                </GlowCard>
              ))}
            </div>
          </Col>
        </Row>

        <Row className="justify-content-center text-center mt-5">
          <Col md={8}>
            <h4 className="section-title">Experience</h4>
            <div className="section-line"></div>
          </Col>
        </Row>
        <Row className="justify-content-center align-items-center">
          <Col md={5} className="d-flex justify-content-center mb-4">
            <div className="lottie-animation-container">
              <AnimationLottie animationData={experienceLottie} />
            </div>
          </Col>
          <Col md={7}>
            <div className="experience-list position-relative">
              <div className="timeline-line"></div>
              {experienceData.map((experience, index) => (
                <GlowCard key={index} className="experience-card mb-4">
                  <div className="p-3 text-white">
                    <div className="text-center">
                      <p className="text-xs sm:text-sm text-primary mb-1">
                        {experience.duration}
                      </p>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                      <div className="text-primary transition-all duration-300 hover:scale-125">
                        <BsPersonWorkspace size={30} />
                      </div>
                      <div>
                        <p className="text-base sm:text-lg mb-1 font-medium uppercase">
                          {experience.title}
                        </p>
                        <p className="text-sm sm:text-base">
                          {experience.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </GlowCard>
              ))}
            </div>
          </Col>
        </Row>

        <Row className="justify-content-center text-center mt-5">
          <Col md={8}>
            <h4 className="section-title">Certifications</h4>
            <div className="section-line"></div>
          </Col>
        </Row>
        <Row className="justify-content-center align-items-center">
          <Col md={5} className="d-flex justify-content-center mb-4">
            <div className="lottie-animation-container">
              <AnimationLottie animationData={certificationLottie} />
            </div>
          </Col>
          <Col md={7}>
            <div className="certification-list position-relative">
              <div className="timeline-line"></div>
              {certificationData.map((certification, index) => (
                <GlowCard key={index} className="certification-card mb-3">
                  <div className="p-3 text-white">
                    <div className="text-center">
                      <p className="text-xs sm:text-sm text-primary mb-1">
                        {certification.date}
                      </p>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                      <div className="text-primary transition-all duration-300 hover:scale-125">
                        <BsPersonWorkspace size={30} />
                      </div>
                      <div>
                        <p className="text-base sm:text-lg mb-1 font-medium uppercase">
                          {certification.title}
                        </p>
                        <p className="text-sm sm:text-base">
                          {certification.issuer}
                        </p>
                      </div>
                    </div>
                  </div>
                </GlowCard>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default EducationExperience;
