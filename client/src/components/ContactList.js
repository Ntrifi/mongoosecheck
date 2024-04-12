import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getContacts} from "../JS/Actions/contact"
import ContactCard from './ContactCard';

const ContactList = () => {
  const listContacts = userSelecor(
    (state) => state.contactReducer.listContacts
  );
  const load =useSelector((state) => state.contactReducer.listeContacts)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <div>
      {load ? (
        <h1>loading loading ..</h1>
      ) : (
        listContacts.map((elt, key) => (
          <ContactCard contact={elt} key={elt.id} />
        ))
      )}
    </div>
  )
}

export default ContactList
