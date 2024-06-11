import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "./ProjectCards";
import projectData from "./projectData"; // Ensure you have your project data

import "./Projects.css"; // Ensure you have the CSS file

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <Row className="justify-content-center text-center mt-5">
          <Col md={8}>
            <h4 className="section-title">Projects</h4>
            <div className="section-line"></div>
          </Col>
        </Row>
        <Row className="justify-content-center mt-5">
          {projectData.map((project, index) => (
            <Col md={4} className="mb-4" key={index}>
              <ProjectCards
                id={project.id}
                name={project.name}
                desc={project.desc}
                tags={project.tags}
                code={project.code}
                demo={project.demo}
                image={project.image}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
