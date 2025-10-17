import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import Search from "./assets/png/search_white.png";

function JobSearch() {
  return (
    <div className="job-search">
      <h4>
        Find your Dream Job, <span>Albert!</span>
      </h4>
      <p>
        Explore the latest job openings and apply for the best opportunities
        available today!
      </p>
      <div className="job-type">
        <Row>
          <Col md={6}>
            <Form.Control
              type="text"
              placeholder="Job Title, Company or Keywords"
            />
          </Col>
          <Col md={2} style={{ borderLeft: "1px solid #E9ECEF" }}>
            <Form.Select>
              <option>Select Location</option>
              <option>Remote</option>
              <option>USA</option>
            </Form.Select>
          </Col>
          <Col md={2} style={{ borderLeft: "1px solid #E9ECEF" }}>
            <Form.Select>
              <option>Job Type</option>
              <option>Full-Time</option>
              <option>Part-Time</option>
            </Form.Select>
          </Col>
          <Col md={2}>
            <button type="submit">
              <img src={Search} alt="" /> Search
            </button>
          </Col>
        </Row>
      </div>
      <div className="similar">
        <h6>Similar:</h6>
        <div className="box">Frontend</div>
        <div className="box">Backend</div>
        <div className="box">Graphic Designer</div>
      </div>
    </div>
  );
}

export default JobSearch;
