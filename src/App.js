import React from 'react';
import {BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Home from './components/Home/Home';
import Welecome from './components/Auth/Welecome';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
 

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/welecome' element={<Welecome />} />
        <Route path='/login' element={<Login />} />
         <Route path='/register' element={<Register/> } />

      </Routes>
     </Router>
  );
}

export default App;
