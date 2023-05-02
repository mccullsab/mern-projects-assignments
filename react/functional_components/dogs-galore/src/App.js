import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";

import Display from "/Users/abbymcculloch/Documents/Coding Dojo/mern/react/functional_components/dogs-galore/src/components/Display.jsx";
import Form from "/Users/abbymcculloch/Documents/Coding Dojo/mern/react/functional_components/dogs-galore/src/components/Form.jsx";

function App() {
  const[picture, setPicture] = useState({})
  
  const addPicture = (newPicture) => {
    setPicture(newPicture);
  }
  return (
    <div className="App">
      <h1>Doggos Galore!</h1>
      <Form addPicture = {addPicture}/>
      <Display picture={picture}/>
    </div>
  );
}

export default App;
