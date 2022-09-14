import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import dance from '../../Assets/Projects/dance.jpg'
import gym2 from '../../Assets/Projects/gym2.jpg'
import loan from '../../Assets/Projects/loan.jpg'
import amazon from '../../Assets/Projects/amazon.jpg'

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gym2}
              isBlog={false}
              title="Gym Management System"
              description="Gym Management System provides functionality to manage schedules, memberships, and facilities. The capabilities of gym management systems include storing member information in a database, managing financial records, scheduling classes, and reserving facilities."
              ghLink="https://github.com/deepak852k1/Gym-management-system"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dance}
              isBlog={false}
              title="Dance Image Classifier"
              description="A Machine Learning Algorithm that can classify the given images
              into different categories of Indian classical dance.        "
              ghLink="https://github.com/deepak852k1"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={loan}
              isBlog={false}
              title="Loan Repay Predictor."
              description="A Machine Learning project that predicts whether a loan case will be paid off or not using different Machine Learning algorithms and find the best classifier algorithm for the given dataset."
              ghLink="https://github.com/deepak852k1"
                           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={amazon}
              isBlog={false}
              title="Amazon Clone"
              description="Fully functional Amazon-Clone web application built with React
              JS and Firebase."
              ghLink="https://github.com/deepak852k1"
             
            />
          </Col>

         

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;