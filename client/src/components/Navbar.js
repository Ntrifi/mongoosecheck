import React from 'react';
import Nav  from "react-bootstrap";
import Navbar  from "react-bootstrap";
import Container  from "react-bootstrap";


const Navbare = () => {
  return (
    <div>
       <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/contact">Contacts</Nav.Link>
            <Nav.Link href="/add">Add Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navbare
