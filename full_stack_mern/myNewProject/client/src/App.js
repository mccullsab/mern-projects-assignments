import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './views/Main';
import Detail from './components/Detail';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Main />} path="/people/" />
        <Route element={<Detail />} path="/people/:id" />
        <Route element={<Update />} path="/people/:id/edit" />
      </Routes>
    </div>
  );
}
export default App;

