import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import { useLocation } from 'react-router-dom';
import DailyNote from './DailyNote.jsx';
import DietNote from './DietNote.jsx';
import RecipeList from './RecipeList.jsx';
import moment from 'moment';
import {getfoodlog} from '../helpers.js';
import CountUp from 'react-countup';
import '../../public/css/minimal-theme-switcher.js';
import NavBar from './NavBar.jsx';


const App = () => {
  const location = useLocation();
  const [carb, setCarb] = useState(0);
  const [fat, setFat] = useState(0);
  const [protein, setProtein] = useState(0);
  const [totalcarb, setTotalcarb] = useState(location.state.carb);
  const [totalfat, setTotalfat] = useState(location.state.fat);
  const [totalprotein, setTotalprotein] = useState(location.state.protein);

  const calculate = (a , b) => {
      return Math.round(a/b * 100);
  };

  useEffect(()=>{
    const todaydate = moment(new Date()).utc().format("YYYY-MM-DD");
    let acc_carb = 0;
    let acc_fat = 0;
    let acc_protein = 0;
    getfoodlog(todaydate)
    .then((res) => {
      res.map((data)=>{
        if(data.date===todaydate){
          acc_carb += data.carb;
          acc_fat += data.fat;
          acc_protein += data.protein;
        }
      })
      setCarb(acc_carb);
      setFat(acc_fat);
      setProtein(acc_protein);
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