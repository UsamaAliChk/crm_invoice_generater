import React from 'react'
import {
  FormGroup,FormLabel,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import image1 from '../assets/img/1.jpg'
import image2 from '../assets/img/2.png'
import image3 from '../assets/img/3.png'
import image4 from '../assets/img/4.png'
import {Link} from 'react-router-dom';
export default function InvoiceTemplates() {
 
  return (
    <div>
      <Container fluid>
        {
          window.location.pathname==="/admin/info/InvoiceTemplates"?
          <div>
              <Row>
            <Col md='12'>
              <FormGroup>
                <FormLabel>Please Select A Template</FormLabel>
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md='4'>
            <Link to='PDFView' onClick={(e)=>{localStorage.setItem('type','1')}}><img src={image1} style={{width:'180px',height:'250px'}}/></Link>
            </Col>
            <Col md='4'>
            <Link to='PDFView' onClick={(e)=>{localStorage.setItem('type','2')}}><img src={image2} style={{width:'180px',height:'250px'}}/></Link>
            </Col>
            <Col md='4'>
              <Link to='PDFView'><img src={image3} onClick={(e)=>{localStorage.setItem('type','3')}} style={{width:'180px',height:'250px'}}/></Link>
            </Col>
          </Row>
          <Row style={{marginTop:'40px'}}>
             <Col md='4'>
              <Link to='info/PDFView'><img src={image4} onClick={(e)=>{localStorage.setItem('type','4')}} style={{width:'180px',height:'250px'}}/></Link>
            </Col>
          </Row>
          </div>
          
          :
          
          <div>
              <Row>
            <Col md='12'>
              <FormGroup>
                <FormLabel>These are templates in which you can create your invoice</FormLabel>
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md='4'>
            <img src={image1} style={{width:'180px',height:'250px'}}/>
            </Col>
            <Col md='4'>
            <img src={image2} style={{width:'180px',height:'250px'}}/>
            </Col>
            <Col md='4'>
              <img src={image3}  style={{width:'180px',height:'250px'}}/>
            </Col>
          </Row>
          <Row style={{marginTop:'40px'}}>
             <Col md='4'>
            <img src={image4} style={{width:'180px',height:'250px'}}/>
            </Col>
          </Row>
          </div>
        }
          
        
        
      </Container>
    </div>
  )
}
