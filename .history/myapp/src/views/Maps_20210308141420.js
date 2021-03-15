import React,{useState} from "react";
import {setData} from '../redux/action/index'
import {useDispatch} from 'react-redux'

// react-bootstrap components
import {Col, Row,Badge, 
  Button, Navbar, Nav,
   Container,Form } from "react-bootstrap";
import { Link } from "react-router-dom";

function Maps() {
  const dispatch=useDispatch();
  const [price,setprice]=useState('');
  const [company,setcompany]=useState('')
  const [address,setaddress]=useState('city chakwal pakistan near Kahout Palaza')
const [totalPrice,settotalPrice]=useState();
const [Uints,setUnits]=useState([]);
const [qty,setqty]=useState('');
const [description,setdescription]=useState('')
const [items,setitems]=useState([])
const [member,setmember]=useState()
const handelDelete=(index)=>{
  console.log(index)
  console.log(items)
     let data=[]
     for(let i=0;i<items.length;i++){
       if(i!=index)
        data.push(items[i])
     }
     setitems(data)

     console.log(data)

     console.log(items)
}
const handelClick=()=>{
  dispatch(setData({company,address,items}))
}

  return (
  
      <Container fluid>
        <Row>
          <Col md="12">
            <Form>
              <Row>
                <Col md="4">
                <Form.Group>
                  <Form.Label>Select Company</Form.Label>
                  <Form.Control as="select" onChange={e=>{setcompany(e.target.value)}}>
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
                <Form.Label>Select Billing Member</Form.Label>
                <Form.Control
                as="select"
                >
                  <option>Select Member</option>
                  <option>Usama Ali</option>
                  <option>Arslan Ali</option>
                  <option>Waseel Fawad</option>
                  <option>Riwan</option>
                </Form.Control>
                </Col>
              </Row>
              

              {
                (items!==[])?
                items.map((e,i)=>{
                  return(
                    <div>
                        <Row>
                          <Col md="5">
                            <Form.Control type="text" defaultValue={e.description}></Form.Control>
                          </Col>
                          <Col md="1">
                            <Form.Control type="text" defaultValue={e.qty}></Form.Control>
                          </Col>
                          <Col md="2">
                       
                            <Form.Control type="text" defaultValue={e.price}></Form.Control>
                          </Col>
                          <Col md="1">
                           
                            <Form.Control defaultValue={e.total} disabled></Form.Control>
                          </Col>
                          <Col md="1">
                              <Button variant="danger" id={i} onClick={e=>{handelDelete(e.target.id)}} >DELETE</Button>
                          </Col>
                        </Row>
                    </div>
                  )
                }):null
              }

              <Row>
                <Col md="6">
                
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" onChange={e=>{setdescription(e.target.value);}} >
                    </Form.Control>
                </Col>
                <Col md="2">
                  <Form.Label>QTY</Form.Label>
                <Form.Control as="select" onChange={(e)=>{let val=parseInt(e.target.value);setqty(val)}}>
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
                <Col md="1">
                    <Button style={{marginTop:"30px"}} onClick={e=>{let total=qty*price;setitems(old=>[...old,{description,qty,price,total}])}}>ADD</Button>
                </Col>
              </Row>
              <Row>
                <Link to='typography'><Button style={{marginTop:"20px",marginLeft:"10px"}} onClick={handelClick}>CREATE</Button></Link>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    
  );
}

export default Maps;
