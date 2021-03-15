import React from "react";

// react-bootstrap components
import {Col, Row,Badge, Button, Navbar, Nav, Container } from "react-bootstrap";

function Maps() {
  
  return (
  
      <Container fluid>
        <Col md="3">
        <Row>
          <Col>
        <div class="form-group">
    <label for="exampleFormControlSelect1">Company</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
  </Col>

  <Col md="6">
  <div class="form-group">
    <label for="exampleFormControlSelect2">Company</label>
    <select class="form-control" id="exampleFormControlSelect2">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
  </Col>
        </Row>
        </Col>
      </Container>
    
  );
}

export default Maps;
