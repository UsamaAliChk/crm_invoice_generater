import React from "react";

// react-bootstrap components
import {Col, Row,Badge, 
  Button, Navbar, Nav,
   Container,Form } from "react-bootstrap";

function Maps() {
  
  return (
  
      <Container fluid>
        <Row>
          <Col md="10">
            <Form>
              <Row>
                <Col md="4">
                <Form.Group>
                  <Form.Label>Select Company</Form.Label>
                  <Form.Control as="select">
                      <option>SAMWAYS</option>
                      <option>Usama Test Company</option>
                      <option>Rizwan Test Company</option>
                      <option>SIYAHAT</option>
                      <option>Khareed O Frokht</option>
                  </Form.Control>
                </Form.Group>
                </Col>
                <Col md="4">
                <Form.Label>Address</Form.Label>
                <Form.Control
                defaultValue="ABC CHAKWAL"
                disabled
                type="text"
                >
                </Form.Control>
                </Col>
                <Col md="4">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                defaultValue="909889897879"
                disabled
                type="text"
                >
                </Form.Control>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    
  );
}

export default Maps;