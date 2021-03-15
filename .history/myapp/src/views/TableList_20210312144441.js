import React,{useState,useEffect} from "react";
//import axios from 'axios'

import {setContacts,showLoader,hideLoader} from '../redux/action/index'
import {useDispatch} from 'react-redux'
import Image1 from '../Logos/1.jpeg'
import Image2 from '../Logos/2.jpeg'
import Image3 from '../Logos/3.jpeg'
import Image4 from '../Logos/4.jpeg'
import Image5 from '../Logos/5.jpeg'
import {Link} from 'react-router-dom'
import axios from 'axios'
// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import Loader  from 'react-loader-spinner'
function TableList() {
const dispatch=useDispatch()

  const handelClick=async()=>{
    dispatch(showLoader())
     const data= await axios
        .get("http://localhost:5000/contacts/1")
        .then(res => {return res.data})
        .catch(err => console.error(err));
    dispatch(setContacts(data))
    dispatch(hideLoader())
  }

  const getCompanies=async()=>{
    const data= await axios
      .get("http://localhost:5000/companies")
      .then(res => {console.log(res.data); return res.data})
      .catch(err => console.error(err));
      setcompnies(data);
      
  }
  useEffect(()=>{
    getCompanies();
    setloading(false);
  })

  const [companies,setcompnies]=useState([]);
  const [loading,setloading]=useState(true);
  const styles = {textAlign: 'center', fontSize: '26px', color: '#ff9900', position: 'fixed', verticalAlign: 'middle', left:'0px', top: '0px', width:'100%', height:'100%', backgroundColor: 'rgba(0,0,0,0.2)'}
  return (
      <>
      {
        loading?
      <div style={styles}>
       <div style={{paddingTop:"300px",paddingLeft:"50px"}}>
     <Loader  type="Circles"
     color="#595959"
     height={100}
     width={100}/>
     </div>
     </div>
   :
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">COMPANIES</Card.Title>
                <p className="card-category">
                  Here is a the list of all companies
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    
                  </thead>
                  <tbody>
                  
                    {
                      companies.map(e=>{
                        return (
                          <tr>
                            <td><img src={Image1} style={{height:"50px",width:"50px"}} /></td>
                            <td ><Link to={'user'} onClick={handelClick} style={{textTransform:'capitalize'}}>{e.companyName}</Link></td>
                        </tr>
                        )
                      })
                    }
                   
                    
                    <tr>
                    <td><img src={Image5} style={{height:"50px",width:"50px"}} /></td>
                      <td>Rizwan Test</td>
                    </tr>
                  
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
          <Col md="12">
            <Card className="card-plain table-plain-bg">
              <Card.Header>
                <Card.Title as="h4">Table on Plain Background</Card.Title>
                <p className="card-category">
                  Here is a subtitle for this table
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover">
                  <thead>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">Name</th>
                      <th className="border-0">Salary</th>
                      <th className="border-0">Country</th>
                      <th className="border-0">City</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Dakota Rice</td>
                      <td>$36,738</td>
                      <td>Niger</td>
                      <td>Oud-Turnhout</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Minerva Hooper</td>
                      <td>$23,789</td>
                      <td>Curaçao</td>
                      <td>Sinaai-Waas</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Sage Rodriguez</td>
                      <td>$56,142</td>
                      <td>Netherlands</td>
                      <td>Baileux</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Philip Chaney</td>
                      <td>$38,735</td>
                      <td>Korea, South</td>
                      <td>Overland Park</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Doris Greene</td>
                      <td>$63,542</td>
                      <td>Malawi</td>
                      <td>Feldkirchen in Kärnten</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Mason Porter</td>
                      <td>$78,615</td>
                      <td>Chile</td>
                      <td>Gloucester</td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
}

    </>
  );
}

export default TableList;
