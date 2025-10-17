import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "./Header";
import Sidebar from "./Sidebar";
import JobSearch from "./JobSearch";
import JobSection from "./JobSection";

function App() {
  return (
    <>
      <Header />
      <Container fluid className="mt-4 px-5">
        <Row>
          <Col md={3}>
            <Sidebar />
          </Col>
          <Col md={9}>
            <JobSearch />
            <JobSection />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
