import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import {addfoodlog} from '../helpers.js';

const Foodlist = ({foodname, image, nutrients}) => {

  const addfood = (e) => {
    e.preventDefault();
    let dataObj = {date: moment(new Date()).utc().format("YYYY-MM-DD") ,
      energy : nutrients['ENERC_KCAL'],
      protein : nutrients['PROCNT'],
      fat : nutrients['FAT'],
      carb : nutrients['CHOCDF']};
    addfoodlog(dataObj)
    .then(response => console.log(response))
    .catch(err => console.log(err));

  }


  return(
    <details>
            <summary>{foodname}</summary>
            <p><img src={image}/></p>
            <ul>
              <li></li>
              <li>Energy : {nutrients['ENERC_KCAL']} kcal</li>
              <li>Protein : {nutrients['PROCNT']} g</li>
              <li>Fat : {nutrients['FAT']} g</li>
              <li>Carbohydrate : {nutrients['CHOCDF']} g</li>
            </ul>
            <button className="addbutton" onClick={addfood} >Track</button>
    </details>
  );
}

export default Foodlist;