import React, { Component, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useNavigate } from "react-router-dom";
const cal = require('../calculate.js');

const NavBar = () => {

  let navigate = useNavigate();
  const routeChange = () =>{
    let path = `/home`;
    let calculated = cal.check();
    navigate(path , {
      state : {
        protein : calculated[0],
        carb : calculated[1],
        fat : calculated[2]
      },
    });
    window.location.reload();
  }

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
      <li><a href="./" className="contrast" onClick={event.preventDefault}><strong>My Fitness</strong></a></li>
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
      <li>
        <details role="list" dir="rtl">
          <summary aria-haspopup="listbox" role="link" className="secondary">Update</summary>
          <ul role="listbox">
            <li>

              <div className="navform">
              <form name="js_wr">
              <label>Weight</label>
          <input type="text" name="weight" id="weight" placeholder="Pound" required/>
        <label>Height</label>
          <div className="grid">
          <input type="text" id="feet" placeholder="Feet"required/><input type="text" id="inch" placeholder="Inches" required/>
          </div>
        <div className="grid">
          <label>
          <input type="radio" name="gener" value="male" />
          Male
          </label>
          <label>
          <input type="radio" value="female" name="gener"/>
          Female
          </label>
        </div>

        <div className="grid">
        <label>Goal</label>
        </div>

        <div className="grid">
        <input type="radio" name="buttonGroup" value="one" id="one"/><label className="goallabel" htmlFor="one">Lose Weight</label>
        <input type="radio" name="buttonGroup" value="two" id="two"/><label className="goallabel" htmlFor="two">Maintain</label>
        <input type="radio" name="buttonGroup" value="three" id="three"/><label className="goallabel" htmlFor="three">Gain Weight</label>
        </div>
        <button type="button" className="contrast" onClick={routeChange}>Update</button>
              </form>
              </div>

            </li>
          </ul>
        </details>
      </li>
    </ul>
  </nav>
  );

};

export default NavBar;