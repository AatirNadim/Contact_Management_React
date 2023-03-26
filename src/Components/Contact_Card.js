import React from "react";
import user from '../Images/user.png';


export const ContactCard = (props) => {
    console.log(props);

    const { id, email, name } = props.contact;
    return <div className="item"
    style = {{
        display : 'flex',
        justifyContent : 'space-around'
    }}
    
    >
        <img className="ui avatar image" src = {user} alt = 'user'/> 
        <div className="item" >
            <div className="header"> {name}</div>
            <div>{email}</div>
        </div>
        <i className="trash alternate outline icon"  
            style = {{
                color: "red",
                marginTop: "7px",
            }}
            onClick = {() => {
                props.clickHandler(id)
            }}
        />
    </div>
}

