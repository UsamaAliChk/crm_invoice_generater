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
                <Col md="5">
                <select>
                  <option>
                      Select Company
                  </option>
                </select>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    
  );
}

export default Maps;
