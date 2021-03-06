import React,{useState} from 'react'
import axios from 'axios';
import EditUserInfo from './EditUserInfo'
import EditUserAddressInfo from './EditUserAddressInfo'


export default function EditContact({Edit,contactData,setEdit,setLoading}) {
    
    const [userInfo,setuserInfo]=useState('');
    const [open2,setopen2]=useState(false)

  

    const editContact=async(payload)=>{
      setLoading(true)
      setEdit(false)
      let addressInfo=JSON.parse(localStorage.getItem("userAddressInfo"));
    const body={id:contactData.contactId,
    title:userInfo.title,
    first:userInfo.first,
    last:userInfo.last,
    Ccountry:addressInfo.Ccountry,
    Cemail:userInfo.Cemail,
    companyName:userInfo.companyName
    ,town:addressInfo.town,
    contactType:userInfo.contactType,
    postalcode:addressInfo.postalcode
    ,address1:addressInfo.address1,
    address2:addressInfo.address2,
    address3:addressInfo.address3,
    CNumber:userInfo.CNumber,
    county:addressInfo.county}
        await axios
          .post("https://100.25.147.176:5000/contactUpdate",body)
          .then(res => {console.log(res); setLoading(false)})
          .catch(err => console.error(err));
    }

    return (
      <div>
        <EditUserInfo Edit={Edit} contactData={contactData} setuserInfo={setuserInfo} setEdit={setEdit}  setopen2={setopen2}/>
        <EditUserAddressInfo open2={open2} setEdit={setEdit} contactData={contactData} setopen2={setopen2} editContact={editContact}/>
      {/* <Formik 
          enableReinitialize
        validationSchema={valScheema}  
        validateOnChange={false}
        onSubmit={editContact}
        initialValues={{
          first:contactData.firstName,
          last:contactData.lastName,
          title:contactData.title,
          Ccountry:contactData.Country,
          Cemail:contactData.contactEmail,
          county:contactData.County,
          postalcode:contactData.postalCode,
          town:contactData.Town,
          address3:contactData.Address3,
          address1:contactData.Address1,
          address2:contactData.Address2
        }}
      >
        {
          ({
            handleSubmit,
            handleChange,
            handleBlur,
            values,
            touched,
            isValid,
            errors,
            isSubmitting,
            isValidating
          })=>(

         
      
        
        <Modal show={Edit} size="lg">
    {
      console.log(isSubmitting,isValidating)
    }
    <Modal.Header>Edit CONTACT</Modal.Header>
    <Modal.Body>
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col md="4">
          <FormLabel>Title</FormLabel>
          <FormControl id="title" type="text" value={values.title} isInvalid={!!errors.title}  onChange={handleChange} isValid={errors.title}></FormControl>
          <Form.Control.Feedback type="invalid">{errors.title}</Form.Control.Feedback>
         </Col>
         <Col md="4">
          <FormLabel>First Name</FormLabel>
          <FormControl id="first" type="text" value={values.first} onChange={handleChange} isValid={errors.first} isInvalid={!!errors.first}></FormControl>
          <Form.Control.Feedback type="invalid">{errors.first}</Form.Control.Feedback>
         </Col>
         <Col md="4">
          <FormLabel>Last Name</FormLabel>
          <FormControl id="last" isInvalid={!!errors.last} isValid={errors.last} type="text" value={values.last} onChange={handleChange}></FormControl>
          <Form.Control.Feedback type="invalid">{errors.last}</Form.Control.Feedback>
         </Col>
      </Row>
      <Row>
      <Col md="6">
          <FormLabel>Email</FormLabel>
          <FormControl id="Cemail" type="text" isInvalid={!!errors.Cemail} isValid={errors.Cemail} value={values.Cemail} onChange={handleChange}></FormControl>
          <Form.Control.Feedback type="invalid">{errors.Cemail}</Form.Control.Feedback>
        </Col>
      <Col md="4">
          <FormLabel>Postal Code</FormLabel>
          <FormControl type="text" id="postalcode" isInvalid={!!errors.postalcode} isValid={errors.postalcode} value={values.postalcode} onChange={handleChange}></FormControl>
          <Form.Control.Feedback type="invalid">{errors.postalcode}</Form.Control.Feedback>
        </Col>
      </Row>
      <Row>
        <Col md="6">
          <FormLabel>Address 1</FormLabel>
          <FormControl type="text" id="address1" isInvalid={!!errors.address1} isValid={errors.address1} value={values.address1} onChange={handleChange}></FormControl>
          <Form.Control.Feedback type="invalid">{errors.address1}</Form.Control.Feedback>
        </Col>
        <Col md="6">
          <FormLabel>Address 2</FormLabel>
          <FormControl type="text" id="address2" isInvalid={!!errors.address2} isValid={errors.address2} value={values.address2} onChange={handleChange}></FormControl>
          <Form.Control.Feedback type="invalid">{errors.address2}</Form.Control.Feedback>
        </Col>
      </Row>
        <Row>
        <Col md="6">
          <FormLabel>Address 3</FormLabel>
          <FormControl type="text" id="address3" value={values.address3} isInvalid={!!errors.address3} isValid={errors.address3} onChange={handleChange}></FormControl>
          <Form.Control.Feedback type="invalid">{errors.address3}</Form.Control.Feedback>
        </Col>
        <Col md="6">
          <FormLabel>Phone Number</FormLabel>
          <FormControl type="text" id="CNumber" isInvalid={!!errors.CNumber} isValid={errors.CNumber} value={values.CNumber} onChange={handleChange}></FormControl>
          <Form.Control.Feedback type="invalid">{errors.CNumber}</Form.Control.Feedback>
        </Col>
      </Row>

      <Row>
        <Col md="4">
          <FormLabel>Country</FormLabel>
          <FormControl type="text" id="Ccountry" isValid={errors.Ccountry} isInvalid={!!errors.Ccountry} value={values.Ccountry} onChange={handleChange}></FormControl>
          <Form.Control.Feedback type="invalid">{errors.Ccountry}</Form.Control.Feedback>
        </Col>
      <Col md="4">
          <FormLabel>Town</FormLabel>
          <FormControl type="text" id="town" isValid={errors.title} isInvalid={!!errors.town} value={values.town} onChange={handleChange}></FormControl>
          <Form.Control.Feedback type="invalid">{errors.town}</Form.Control.Feedback>
        </Col>
        
        <Col md="4">
          <FormLabel>County</FormLabel>
          <FormControl type="text" isInvalid={!!errors.county} isValid={errors.address3} id="county" value={values.county} onChange={handleChange}></FormControl>
          <Form.Control.Feedback type="invalid">{errors.county}</Form.Control.Feedback>
        </Col>
      </Row>
      <Row style={{marginTop:"30px"}}>
        <Col md="4">
        <Button type="submit" >Save</Button>
     
        </Col>
        <Col md="4">
        <Button color="secondary" onClick={e=>setEdit(false)}>Cancel</Button>
        </Col>
      </Row>
      </Form>
    </Modal.Body>
    <Modal.Footer>
     
    </Modal.Footer>
  </Modal>
   )}
  </Formik> */}

    </div>
    )
}
