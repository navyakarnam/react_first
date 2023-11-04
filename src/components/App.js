import React from "react";
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

//in order to pass the contacts listed in the contact list we use props.

function App() {
  const contacts=[
    {
      id:"1",
      name:"Navya",
      email:"navya@gmail.com",
    },
    
    {
      id:"2",
      name:"Bhavya",
      email:"bhavya@gmail.com",
    },
  ];
  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactList contacts={contacts} /> 
    </div>
  );
}

export default App;

