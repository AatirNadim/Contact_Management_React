import React from "react";

export const AddContact = () => {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const handleSubmit = (e) => {}
    return <div className = "ui main">
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={handleSubmit}>
            <div className="field">
                <label>Name</label>
                <input type="text" name="name" placeholder={name}
                onChange = {(e) => {
                    setName(e.target.value);
                }}
                />
            </div>
            <div className="field">
                <label>Email</label>
                <input type="text" name="email" placeholder={email}
                onChange = {(e) => {
                    setEmail(e.target.value);  
                }}
                />
            </div>
            <button className="ui button blue">Add</button>
        </form>
    </div>
}