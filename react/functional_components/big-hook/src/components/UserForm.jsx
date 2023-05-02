import React, { useState } from 'react';

const Form = props => {
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");


    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, confirmPassword };
        console.log("Welcome", newUser);
        setfirstName("");
        setlastName("");
        setEmail("");
        setPassword("");
        setconfirmPassword("");


    };
    return (
        <form onSubmit={createUser}>
            <div>
                <label>First Name: </label>
                <input type="text" onChange={ (e) => setfirstName(e.target.value) } value={ firstName }/>
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" onChange={ (e) => setlastName(e.target.value) } value={ lastName }/>
            </div>
            <div>
                <label>Email Address: </label>
                <input type="text" onChange={ (e) => setEmail(e.target.value) } value={ email }/>
            </div>
            <div>
                <label>Password: </label>
                <input type="password" onChange={ (e) => setPassword(e.target.value) } value={ password }/>
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" onChange={ (e) => setconfirmPassword(e.target.value) } value={ confirmPassword }/>
            </div>
            <input type="submit" value="Create User" />
            <h1>Form Data</h1>
            <p>First Name: { firstName }</p>
            <p>Last Name: { lastName }</p>
            <p>Email: { email }</p>
            <p>Password: { password } </p>
            <p>Confirm Password: { confirmPassword }</p>
        </form>

    );
}

export default Form;
