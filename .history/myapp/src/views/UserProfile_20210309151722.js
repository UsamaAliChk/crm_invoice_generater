import React from "react";
import Image1 from '../Logos/1.jpeg'
import Image2 from '../Logos/2.jpeg'
import Image3 from '../Logos/3.jpeg'
import Image4 from '../Logos/4.jpeg'
import Image5 from '../Logos/5.jpeg'
import Image6 from '../Logos/6.jpeg'
import invoice from '../Logos/7.jpeg'
import {Link} from 'react-router-dom'
import BigLoad from '../components/BigLoad'
// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Form,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Table
} from "react-bootstrap";
import {useSelector} from 'react-redux';
import Loader from 'react-loader-spinner';
function User() {
  const data=useSelector(state=>state.getContacts)
  if(data.length===0){
      return(
        <Loader  type="Puff"
        color="#00BFFF"
        height={100}
        width={100}/>
      )   
  }
  else{
  return (
    
    <>
      <Container fluid>
        <Row>
          <Col md="8">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Companey Profile</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Row>
                    <Col className="pr-1" md="5">
                      <Form.Group>
                        <label>Company</label>
                        <Form.Control
                          defaultValue="SAMWAYS"
                          disabled
                          placeholder="SAMWAYS"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="px-1" md="3">
                      <Form.Group>
                        <label>Contact Number</label>
                        <Form.Control
                          defaultValue="00923135556986"
                          placeholder="Number"
                          type="text"
                          disabled
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="4">
                      <Form.Group>
                        <label htmlFor="exampleInputEmail1">
                          Email address
                        </label>
                        <Form.Control
                        defaultValue="www.samways.com"
                          placeholder="Email"
                          type="email"
                          disabled
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  {/* <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>First Name</label>
                        <Form.Control
                          defaultValue="Mike"
                          placeholder="Company"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="6">
                      <Form.Group>
                        <label>Last Name</label>
                        <Form.Control
                          defaultValue="Andrew"
                          placeholder="Last Name"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row> */}
                  <Row>
                    <Col md="12">
                      <Form.Group>
                        <label>Address</label>
                        <Form.Control
                          defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                          placeholder="Home Address"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="4">
                      <Form.Group>
                        <label>City</label>
                        <Form.Control
                          defaultValue="Chakwal"
                          placeholder="City"
                          type="text"
                          disabled
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="px-1" md="4">
                      <Form.Group>
                        <label>Country</label>
                        <Form.Control
                          defaultValue="Pakistan"
                          placeholder="Country"
                          type="text"
                          disabled
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="4">
                      <Form.Group>
                        <label>Postal Code</label>
                        <Form.Control
                          defaultValue="48800"
                          placeholder="ZIP Code"
                          type="number"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <Form.Group>
                        <label>About</label>
                        <Form.Control
                          cols="80"
                          defaultValue="Samways, Inc. is a Pakistani online travel company that operates a website and mobile app with user-generated content and a comparison shopping website.It also offers online hotel reservations and bookings for transportation, lodging, travel experiences, and restaurants."
                          placeholder="Here can be your description"
                          rows="4"
                          as="textarea"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>

        
                  {/* <Button
                    className="btn-fill pull-right"
                    type="submit"
                    variant="info"
                  >
                    
                  </Button> */}
                  <div className="clearfix"></div>
                </Form>
              </Card.Body>
            </Card>
           
          </Col>
          <Col md="4">
            <Card className="card-user">
              <div className="card-image">
                <img
                  alt="..."
                  src={
                    require("assets/img/photo-1431578500526-4d9613015464.jpeg")
                      .default
                  }
                ></img>
              </div>
              <Card.Body>
                <div className="author">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar border-gray"
                      src={Image1}
                    ></img>
                    <h5 className="title">SAMWAYS</h5>
                  </a>
                  <p className="description">michael24</p>
                </div>
                <p className="description text-center">
                  "Lamborghini Mercy <br></br>
                  Your chick she so thirsty <br></br>
                  I'm in that two seat Lambo"
                </p>
              </Card.Body>
              <hr></hr>
              <div className="button-container mr-auto ml-auto">
                <Button
                  className="btn-simple btn-icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-facebook-square"></i>
                </Button>
                <Button
                  className="btn-simple btn-icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-twitter"></i>
                </Button>
                <Button
                  className="btn-simple btn-icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-google-plus-square"></i>
                </Button>
              </div>
            </Card>
          </Col>
        </Row>

 
        
            <Row>
              <Col md='8'>
              <Card>
                  <Card.Header>
                <Card.Title as="h4">Samways Contacts List</Card.Title>
                <p className="card-category">
                  Here is a list of all contacts
                </p>
              </Card.Header>
                  <Card.Body>
                <Table >
                  <tbody>
                    {
                      data.map((e,i)=>{
                        console.log("PPPPP")
                        return(
                          <tr>
                          <td>{i+1}</td>
                          <td><img style={{height:"50px",width:"60px"}} src={Image2}/></td>
                          <td>{e.Name}</td>
                          <td>B 2 B Market</td>
                        </tr>
                        )
                      })
                    }
                   
                    
                    
                   
                  
                  </tbody>
                </Table>
              </Card.Body>
              </Card>
              </Col>
                
              <Col md="4">
                <Row>
                <div>
                <img src={invoice} style={{height:"360px",width:"330px"}}/>
                </div>
                </Row>
                <Row>
                <Link to={"maps"}><Button style={{marginLeft:"15px",width:"230px"}}>GENERATE INVOICE</Button></Link>
                </Row>
              
              </Col>
            
        </Row>



      </Container>
    </>
  );}
}

export default User;
