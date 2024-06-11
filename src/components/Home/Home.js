import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import myImg from "../../Assets/avatar.svg";
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
// import "./Home.css"; // Import the CSS file

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row className="align-items-center">
            <Col md={7} className="text-left">
              <h1 className="heading">Web Developer</h1>
              <h2 className="main-name">Sushanth Reddy</h2>
              
              <p className="description">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> Java, Python and Javascript. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new ;
              <i>
                <b className="purple">Web Technologies and Products </b>

              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              ; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
            </p>
            </Col>
            <Col md={5} className="text-center">
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>

    </section>
  );
}

export default Home;
