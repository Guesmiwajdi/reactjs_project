import React from 'react'
import {Navbar, Container,Nav, Form, Button, FormControl} from 'react-bootstrap';
import './Headerr.css'

function Headerr() {
  return (
    <div>
      
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">welcome</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#AboutUs">AboutUs</Nav.Link>
    </Nav>
    </Container>
    <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
  </Navbar>
 

    </div>
  )
}

export default Headerr
