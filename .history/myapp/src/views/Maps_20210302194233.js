import React from "react";

// react-bootstrap components
import {Col, Row,Badge, Button, Navbar, Nav, Container } from "react-bootstrap";

function Maps() {
  
  return (
  
      <Container fluid>
        <Col md="12">
        <Row>
        <div class="form-group">
    <label for="exampleFormControlSelect1">Example select</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
        </Row>
        </Col>
      </Container>
    
  );
}

export default Maps;