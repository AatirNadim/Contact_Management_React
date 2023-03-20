import React from "react";
import user from '../Images/user.png';


export const ContactCard = (props) => {
    console.log(props);
    return <div className="item">
        <img className="ui avatar image" src = {user} alt = 'user'/> 
        <div className="item" >
            <div className="header"> {'name'}</div>
            <div>{'email'}</div>
        </div>
        <i className="trach alternate outline icon"  
            style = {{
                color: "red",
                marginTop: "7px",
            }}
            onClick = {() => {
                
            }}
        />
    </div>
}

