import React from "react";
import './App.css';
import NavBar from "./components/Navbar.js"
import {Routes, Route} from "react-router-dom";
import Home from "./Pages/Home.js"
import Contacts from "./Pages/Contacts.js"
import AddContact from "./Pages/AddContact.js" ;
import EditContact from "./Pages/EditContact.js";
import Error from "./Pages/Error.js";



function App() {
  return (
    <div className="App">
    <NavBar/>

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/contact" element={<Contacts/>} />
      <Route path="/edit/:id" element={<EditContact/>} />
      <Route path="/add" element={<AddContact/>} />
      <Route path="/*" element={<Error/>} />
    </Routes>
    </div>
  );
}

export default App;
