import React from "react";
import { ContactCard } from "./Contact_Card";

export const ContactList = (props) => {
    console.log(props);
    const deleteHandler = (id) => {
        props.removeContactHandler(id);
    }

    return <div className="ui celled list" >
        <h2 className="ui center"
        >Contact List</h2>
        {
            props.contacts.map((contact) => {
                return <ContactCard  
                contact = {contact}
                clickHandler = {deleteHandler}
                key = {contact.id}
                />
            })
        }
    </div>
}