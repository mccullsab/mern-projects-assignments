import React from 'react';
import { Routes, Route, Link } from 'react-router-dom'
import Form from './components/Form';

import People from './components/People';
import Starships from './components/Starships';
import Planets from './components/Planets';


function App() {
  return (
    <div className="App">
      <h1>Luke APIwalker</h1>
      <Form />
      <Routes>
        <Route path="/people/:id" element = {<People />}/>
        <Route path="/planets/:id" element = {<Planets />}/>
        <Route path="/starships/:id" element = {<Starships />}/>
      </Routes>
    </div>
  );
}

export default App;
