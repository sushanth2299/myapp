import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import laptopImg from "../../Assets/about.png";
// import "./About.css"; // Ensure you have the CSS file imported

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row className="justify-content-center" style={{ padding: "10px" }}>
          <Col
            md={7}
            className="d-flex flex-column align-items-center"
            style={{ paddingTop: "20px", paddingBottom: "60px" }}
          >
            <h1 className="heading">
              Know Who <strong className="purple">I AM</strong>
            </h1>
            <p className="about-description">
            Hi there! I'm a passionate web developer with a knack for full-stack development, specializing in React and Java.
              <br /><br />
              When I'm not busy squashing bugs or optimizing code, you might find me trying to teach my pet cat to code (she's still working on her "Hello World" app). With a keyboard in one hand and a cup of coffee in the other, I strive to build seamless and user-friendly web applications that not only function perfectly but also bring a smile to your face.

Whether it's creating dynamic front-ends with React or robust back-ends with Java, I love diving into the nitty-gritty of development and making magic happen on the screen. And yes, I've even been known to dream in code. So, if you see me staring off into space, don't worry—I'm probably just debugging in my head.
<br /><br />

Let's build something amazing together, and who knows, maybe my cat will join the project too (as soon as she masters her typing skills)!
</p>
          </Col>
          <Col
            md={5}
            className="d-flex justify-content-center align-items-center about-img"
            style={{ paddingTop: "30px", paddingBottom: "50px" }}
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset</strong>
        </h1>
        <Techstack />
      </Container>
    </Container>
  );
}

export default About;
