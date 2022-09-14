import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiPython,
  DiGit,
  DiMysql,
  DiGithubBadge,
  DiFirebase,
  DiPhp,
  DiJava
} from "react-icons/di";
import {
  SiPytorch,
  SiFirebase,
  SiNextdotjs,
} from "react-icons/si";
import { BsFillCloudFill } from "react-icons/bs";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGithubBadge />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiFirebase />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiPhp/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BsFillCloudFill/>
      </Col>
    </Row>
  );
}

export default Techstack;