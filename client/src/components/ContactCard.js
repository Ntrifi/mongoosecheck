import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import {deleteContact} from "../JS/Actions/contact"

const ContactCard = ({contact}) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  return (
    <div>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://res.cloudinary.com/dgs5ufh6i/image/upload/v1705589722/customer-icon-for-your-website-design-logo-app-ui-free-vector_ll3nfy.jpg" />
      <Card.Body>
        <Card.Title>{contact.name}</Card.Title>
        <Card.Text>
          {contact.email}
          <br/>
          {contact.phone}
        </Card.Text>
        <Button variant="primary" onClick={()=>navigate(`/edit/${contact._id}`)}>Edit </Button>
          <Button variant="primary" onClick={()=>dispatch(deleteContact(contact._id))}>Delete</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default ContactCard
