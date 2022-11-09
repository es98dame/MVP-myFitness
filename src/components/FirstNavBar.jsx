import React, { Component, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const NavBar = () => {

  const setLightMode = () => {
    window.localStorage.setItem('picoPreferedColorScheme','light');
    window.location.reload(false);
  }

  const setDarkMode = () => {
    window.localStorage.setItem('picoPreferedColorScheme','dark');
    window.location.reload(false);
  }

  return(
    <nav className="container-fluid">
    <ul>
      <li><a href="./" className="contrast" onClick={event.preventDefault()}><strong>My Fitness</strong></a></li>
    </ul>
    <ul>
      <li>
        <details role="list" dir="rtl">
          <summary aria-haspopup="listbox" role="link" className="secondary">Theme</summary>
          <ul role="listbox">
            <li><a href="#" >Auto</a></li>
            <li><a href="#" onClick={setLightMode}>Light</a></li>
            <li><a href="#" onClick={setDarkMode}>Dark</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </nav>
  );

};

export default NavBar;