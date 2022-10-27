import React, { Component, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Home.jsx';
import GainInfo from './GainInfo.jsx';
import NavBar from './NavBar.jsx';

const App = () => {
  return (
    <BrowserRouter>

      <Routes>
        <Route exact path='/' element={<GainInfo/>}  />
        <Route path='/home' element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;