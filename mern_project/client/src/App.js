import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';


import Dashboard from './views/Dashboard';
import CreatePage from './views/CreatePage';
import DetailsPage from './views/DetailsPage';
import UpdatePage from './views/UpdatePage';
import LandingPage from './views/LandingPage';
import MapContainer from './components/MapContainer';
import MapTwo from './components/MapTwo';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage/> } />
        <Route path='/maps' element={<MapContainer/> } />
        <Route path='/mapstwo' element={<MapTwo/> } />
        <Route path='/courts' element={<Dashboard/> } />
        <Route path='/courts/new' element={<CreatePage/> } />
        <Route path='/courts/:id' element={<DetailsPage/>} />
        <Route path='/courts/:id/edit' element={<UpdatePage/>} />
      </Routes>
    </div>
  );
}

export default App;
