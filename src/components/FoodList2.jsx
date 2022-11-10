import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import {addfoodlog} from '../helpers.js';

const FoodList = ({foodname, image, nutrients}) => {

  const addfood = (e) => {
    let dataObj = {date: moment(new Date()).utc().format("YYYY-MM-DD") ,
      energy : nutrients['ENERC_KCAL'],
      protein : nutrients['PROCNT'],
      fat : nutrients['FAT'],
      carb : nutrients['CHOCDF']};
    addfoodlog(dataObj)
    .then(response => console.log(response))
    .catch(err => console.log(err));
    window.location.reload(false);
  }


  return(
    <details>
            <summary>{foodname}</summary>
            <p><img src={image}/></p>
            <ul>
              <br></br>
              <li><b>Energy</b> : {nutrients['ENERC_KCAL']} kcal</li>
              <li><b>Protein</b> : {nutrients['PROCNT']} g</li>
              <li><b>Fat</b> : {nutrients['FAT']} g</li>
              <li><b>Carbohydrate</b> : {nutrients['CHOCDF']} g</li>
            </ul>
            <button className="addbutton" onClick={addfood} >Track</button>
    </details>
  );
}

export default FoodList;