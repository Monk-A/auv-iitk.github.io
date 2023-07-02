import React from "react";
import { Link } from "react-router-dom";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./Subsystems.css";

function SubSystems() {
  const subsystemsData = [
    {
      title: "MECHANICAL",
      description:
        "The mechanical subsystem is responsible for design and manufacture of the vehicle...",
      link: "/mechanical",
    },
    {
      title: "ELECTRICAL",
      description:
        "The Electrical Subsystem builds the framework powering our AUV consisting of Power Distribution System and the Monitoring system...",
      link: "/electrical",
    },
    {
      title: "SOFTWARE",
      description:
        "The software subsystem develops the algorithms controlling the robot and making it autonomous...",
      link: "/software",
    },
    {
      title: "BUSINESS",
      description:
        "The Business subsystem manages the fundings and outreach activities of the team...",
      link: "/business",
    },
  ];

  return (
    <div className="section team-data landing-section">
      <Container>
        <Row className="d-flex justify-content-center">
          <Col md="12">
            <h2 className="text-center heading-main">Subsystems</h2>
          </Col>
        </Row>
        <Row>
          {subsystemsData.map((subsystem) => (
            <Col className="container text-center" key={subsystem.title}>
              <Card className="card-plain bg-light card-subsystems">
                <div className="row w-100 justify-content-center font-weight-bold h5">
                  {subsystem.title}
                </div>
                <p className="hide">{subsystem.description}</p>
                <Link to={subsystem.link}>
                  <p className="redirect">Know More</p>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default SubSystems;
