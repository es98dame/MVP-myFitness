import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {getfoodname} from '../helpers.js';
import FoodList from './FoodList2.jsx';

const DietModal = ({handleClose}) => {
  const [keyword, setKeyword] = useState('');
  const [foodlist, setFoodlist] = useState([]);

  const searchClick = (e) => {
    e.preventDefault();
    console.log(keyword);
    getfoodname(keyword)
    .then(res => setFoodlist(res.hints))
    .catch(err => console.log(err));
  }

  const keywordChange = (e) => {
    setKeyword(e.target.value);
   }

  return(
  <dialog open>
    <article>
    <a href="#close"
      aria-label="Close"
      className="close"
      data-target="modal-example"
      onClick={() => {handleClose();}}>
    </a>
    <h3>What did you have today?</h3>
    <main className="container">

    <div className="grid">
      <input type="search" id="recipesearch" name="search" placeholder="Apple" onChange={keywordChange}/>
      <button className="searchbutton" onClick={searchClick}>Search</button>
    </div>

    <section id="accordions">
    {foodlist.length === 0 ? '' :
    foodlist.map((data, index)=> <FoodList foodname={data.food.label} image={data.food['image']}
    nutrients={data.food.nutrients} key={index}/>)
    }
    </section>

    </main>
  </article>
</dialog>


  )

}

export default DietModal;