import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import DailyNote from './DailyNote.jsx';
import DietNote from './DietNote.jsx';
import RecipeList from './RecipeList.jsx';
import moment from 'moment';
import {getfoodlog} from '../helpers.js';
import CountUp from 'react-countup';
import '../../public/css/minimal-theme-switcher.js';
import NavBar from './NavBar.jsx';


const App = () => {
  const [carb, setCarb] = useState(0);
  const [fat, setFat] = useState(0);
  const [protein, setProtein] = useState(0);
  const [totalcarb, setTotalcarb] = useState(366);
  const [totalfat, setTotalfat] = useState(97);
  const [totalprotein, setTotalprotein] = useState(88);

  const calculate = (a , b) => {
      return Math.round(a/b * 100);
  };

  useEffect(()=>{

    const todaydate = moment(new Date()).utc().format("YYYY-MM-DD");
    getfoodlog(todaydate)
    .then((res) => {
      res.map((data)=>{
        if(data.date===todaydate){
          setCarb(carb + data.carb);
          setFat(fat + data.fat);
          setProtein(protein + data.protein);
        }
      })
    })
    .catch(err => {
      console.error(err);
    })

  },[]);

  return (
    <div>
    <NavBar/>
  <div className="hero" data-theme="dark">
    <header className="container">
      <hgroup>
        <h1>Welcome to my Fitness</h1>
        <h2>Daily intake</h2>
      </hgroup>
      <div className="grid">
      <hgroup>
        <h1>Carbs</h1>
        <h2><CountUp end={carb} decimals={2}/> g<small>/{totalcarb}g</small></h2>
        <progress value={calculate(carb,totalcarb)} max="100"></progress>
      </hgroup>
      <hgroup>
        <h1>Protein</h1>
        <h2><CountUp end={protein} decimals={2}/> g<small>/{totalprotein}g</small></h2>
        <progress value={calculate(protein,totalprotein)} max="100"></progress>
      </hgroup>
      <hgroup>
        <h1>Fat</h1>
        <h2><CountUp end={fat} decimals={2}/> g<small>/{totalfat}g</small></h2>
        <progress value={calculate(fat,totalfat)} max="100"></progress>
      </hgroup>
      </div>
    </header>
  </div>

  <main className="container">
    <div className="grid">
      <DailyNote/>
      <DietNote/>
      <RecipeList/>
    </div>
  </main>
  </div>
  );
};

export default App;