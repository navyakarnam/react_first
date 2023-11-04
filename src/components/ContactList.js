//functional component

import React from "react";
import ContactCard from "./ContactCard";
const ContactList = (props) => {
    console.log(props);

//renderContactList is a function that returns the contacts.
    const renderContactList =props.contacts.map((contact) => {
        return 
            <ContactCard contact ={contact} />;
        
    });
    //rendering the list
    return <div className="ui celled list">
        {renderContactList}{/*referencing the fn.*/}
    </div>;
};

export default ContactList;