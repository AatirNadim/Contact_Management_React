import React from "react";

export const ContactCard = (props) => {
    const { id, name, email } = {};
    return (
        <div className="item">
            <div className="content">
                <div className="header">{name ? name : 'no value'}</div>
                <div>{email ? email : 'no value'}</div>
            </div>
            <i className="trash alternate outline icon" style={{ color: "red", marginTop: "7px" }}></i>
        </div>
    );
}