import React from "react";

export const AddContact = ({addContactHandler}) => {
    // console.log('Add contact component props -->\n', addContactHandler)
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");

    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(name === '' || email === '') {
            alert('Please enter valid name and email address'); return;
        }
        addContactHandler({name, email})
        setName('');
        setEmail('');
    }
    return <div className = "ui main">
        <h2 className="" >Add Contact</h2>
        <form className="ui form" onSubmit={handleSubmit}>
            <div className="field">
                <label>Name</label>
                <input type="text" name="name" placeholder="Name here" value = {name}
                onChange = {(e) => {
                    setName(e.target.value);
                }}
                />
            </div>
            <div className="field">
                <label>Email</label>
                <input type="text" name="email" placeholder='Email here' value={email}
                onChange = {(e) => {
                    setEmail(e.target.value);  
                }}
                />
            </div>
            <button className="ui button blue">Add</button>
        </form>
    </div>
}