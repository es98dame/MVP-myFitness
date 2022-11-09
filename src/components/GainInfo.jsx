import React, { Component, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useNavigate } from "react-router-dom";
import FirstNavBar from './FirstNavBar.jsx';
const cal = require('../calculate.js');

const GainInfo = () => {

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
  }

return (
  <div>
  <FirstNavBar/>
  <main className="container">
  <article className="grid">
    <div className="box">
    <h1>Hello,</h1>
    I'm your My Fitness app
    </div>

    <div>
      <hgroup>
        <h2>Update your height and weight</h2>
        <h3>my Fitness app gives you your optimal macronutrients and calories. It serves as a weight loss or muscle gain calculator for both women and men.</h3>
      </hgroup>
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
        <button type="button" className="contrast" onClick={routeChange}>Let's go</button>
      </form>
    </div>

  </article>
</main>
</div>
);

};

export default GainInfo;