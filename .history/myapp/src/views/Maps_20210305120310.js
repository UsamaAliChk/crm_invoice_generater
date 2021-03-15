import React,{useState} from "react";

// react-bootstrap components
import {Col, Row,Badge, 
  Button, Navbar, Nav,
   Container,Form } from "react-bootstrap";
import { Link } from "react-router-dom";






function Maps() {
  const [price,setprice]=useState('');
const [totalPrice,settotalPrice]=useState();
const [Uints,setUnits]=useState([]);
const [qty,setqty]=useState('');
const [description,setdescription]=useState('')
const [items,setitems]=useState([])

  return (
  
      <Container fluid>
        <Row>
          <Col md="12">
            <Form>
              <Row>
                <Col md="4">
                <Form.Group>
                  <Form.Label>Select Company</Form.Label>
                  <Form.Control as="select">
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

              <Row>
                <Col md="4">
                <Form.Group>
                  <Form.Label>Country</Form.Label>
                  <Form.Control 
                  type="text"
                  defaultValue="Pakistan"
                  disabled
                  >
            
                  </Form.Control>
                </Form.Group>
                </Col>
                <Col md="4">
                <Form.Label>City</Form.Label>
                <Form.Control
                defaultValue="CHAKWAL"
                disabled
                type="text"
                >
                </Form.Control>
                </Col>
                <Col md="4">
                <Form.Label>Postal Code</Form.Label>
                <Form.Control
                defaultValue="484848"
                disabled
                type="text"
                >
                </Form.Control>
                </Col>
              </Row>
              <Row>
                <Link to='/typography'><Button >CREATE</Button></Link>
              </Row>

              {
                (items!==[])?
                items.map(e=>{
                  return(
                    <div>
                        <Row>
                          <Col md="6">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" defaultValue={e.description}></Form.Control>
                          </Col>
                          <Col md="2">
                            <Form.Label>QTY</Form.Label>
                            <Form.Control type="text" defaultValue={e.qty}></Form.Control>
                          </Col>
                          <Col md="3">
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="text" defaultValue={e.price}></Form.Control>
                          </Col>
                          <Col md="1">
                              <Button type="Dangour">DELETE</Button>
                          </Col>
                        </Row>
                    </div>
                  )
                }):null
              }

              <Row>
                <Col md="6">
                
                    <Form.Label>Description</Form.Label>
                    <Form.Control onchange={e=>{setdescription(e.target.value)}} type="text">

                    </Form.Control>
                </Col>
                <Col md="1">
                  <Form.Label>QTY</Form.Label>
                <Form.Control as="select" onChange={(e)=>{setqty(e.target.value)}}>
                      <option>Select QTY</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                      <option>9</option>
                      <option>10</option>
                  </Form.Control>
                </Col>
                <Col md="2">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="text" onChange={(e)=>{let value=parseInt(e.target.value) ;setprice(value)}}></Form.Control>
                </Col>
                <Col md="2">
                    <Form.Label>Total Price</Form.Label>
                    <Form.Control type="text"></Form.Control>
                </Col>
                <Col md="1">
                    <Button style={{marginTop:"30px"}} onClick={e=>{setitems(old=>[...old,{description,qty,price}])}}>ADD</Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    
  );
}

export default Maps;
