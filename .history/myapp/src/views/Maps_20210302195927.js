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
                <Col md="12">
                <Form.Group>
                  <Form.Label>Select Company</Form.Label>
                  <Form.Control as="control">
                  <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
                  </Form.Control>
                </Form.Group>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    
  );
}

export default Maps;
