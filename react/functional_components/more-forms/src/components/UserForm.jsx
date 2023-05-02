import React, { useState } from 'react';

// props comes from the component = items defined and will not change - access here 
const Form = props => {
    const [firstName, setfirstName] = useState("");
    // usestate returns and array with 2 values
    // the current state (the variable with the value) is what the value is at the moment 
    // ...and takes the first position of array
    // the second item in the array lets you change the value
    const [lastName, setlastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");
    const [nameError, setnameError] = useState("");
    const [emailError, setemailError] = useState("");
    const [passwordError, setpasswordError] = useState("");
    const [confirmpasswordError, setconfirmpasswordError] = useState("");

    const handleName = (e) => {
        setfirstName(e.target.value);
        if(e.target.value.length < 1) {
            setnameError("First and last names are required!");
        } else if(e.target.value.length < 2) {
            setnameError("First and last names must be 3 characters or longer!");
        } else {
            setnameError("");
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 1) {
            setpasswordError("Password required!");
        } else if(e.target.value.length < 8) {
            setpasswordError("Password must be at least 8 characters.");
        } else {
            setpasswordError("");
        }
    }

    const handleConfirmPassword = (e) => {
        setconfirmPassword(e.target.value);
        if(e.target.value !== password) {
            setconfirmpasswordError("Passwords must match");
        } else {
            setconfirmpasswordError("");
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1) {
            setemailError("Email required!");
        } else if(e.target.value.length < 5) {
            setemailError("Email must be 5 characters or longer!");
        } else {
            setemailError("");
        }
    }

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
                <input type="text" onChange={handleName}/>
                {
                    nameError ?
                    <p style={{color:'red'}}>{ nameError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" onChange={handleName}/>
            </div>
            <div>
                <label>Email Address: </label>
                <input type="text" onChange={ handleEmail }/>
                {
                    emailError ?
                    <p style={{color:'red'}}>{ emailError }</p> : ''
                }
            </div>
            <div>
                <label>Password: </label>
                <input type="password" onChange={ handlePassword }/>
                {
                    passwordError ?
                    <p style={{color:'red'}}>{ passwordError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" onChange={ handleConfirmPassword }/>
                {
                    confirmpasswordError ?
                    <p style={{color:'red'}}>{ confirmpasswordError }</p> :
                    ''
                }
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
