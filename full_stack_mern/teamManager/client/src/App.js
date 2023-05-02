import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Dashboard from './views/Dashboard';
import CreatePage from './views/CreatePage';
import DetailsPage from './views/DetailsPage';
import UpdatePage from './views/UpdatePage';
import ManagePageOne from './views/ManagePageOne';
import ManagePageTwo from './views/ManagePageTwo';
import ManagePageThree from './views/ManagePageThree';



function App() {
  return (
    <div className="App">
      <div>
        <Link to='/'>Manage Players</Link>
        <Link to='/players/manage/gameone' className='ml-3'>Manage Player Status</Link>
      </div>
      <Routes>
        <Route path='/' element={<Dashboard/> } />
        <Route path='/players/manage/gameone' element={<ManagePageOne/> } />
        <Route path='/players/manage/gametwo' element={<ManagePageTwo/> } />
        <Route path='/players/manage/gamethree' element={<ManagePageThree/> } />
        <Route path='/players/new' element={<CreatePage/> } />
        <Route path='/players/:id' element={<DetailsPage/>} />
        <Route path='/players/:id/edit' element={<UpdatePage/>} />
      </Routes>
    </div>
  );
}

export default App;
