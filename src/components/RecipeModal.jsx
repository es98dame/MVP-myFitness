import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {getrecipes} from '../helpers.js';
import RecipeEntry from './RecipeEntry.jsx';


const RecipeModal = ({handleClose}) => {
  const [recipelist, setRecipeList] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [diet, setDiet] = useState('');
  const [mealtype, setMealtype] = useState('');

  useEffect(()=>{
    getrecipes()
    .then(res => setRecipeList(res.hits))
    .catch(err => console.log(err));
  },[])


  const searchClick = (e) => {
    e.preventDefault();
    console.log(keyword);
    getrecipes(keyword, diet, mealtype)
    .then(res => setRecipeList(res.hits))
    .catch(err => console.log(err));
  }

  const keywordChange = (e) => {
    setKeyword(e.target.value);
   }

  const dietChange = (e) => {
  setDiet(e.target.value);
  }

  const mealtypeChange = (e) => {
  setMealtype(e.target.value);
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

    <main className="container">
    <div className="grid">
      <input type="search" id="recipesearch" name="search" placeholder="Apple" onChange={keywordChange}/>
      <button className="searchbutton" onClick={searchClick}>Search</button>
    </div>

    {/* filter */}
    <div className="grid">
      <select id="select" name="select" onChange={dietChange}>
                    <option value="" disabled selected>Diet</option>
                    <option value="balanced">balanced</option>
                    <option value="high-fiber">high-fiber</option>
                    <option value="high-protein">high-protein</option>
                    <option value="low-carb">low-carb</option>
                    <option value="low-fat">low-fat</option>
                    <option value="low-sodium">low-sodium</option>
                    </select>
      <select id="select" name="select" onChange={mealtypeChange}>
                    <option value="" disabled selected>Meal Type</option>
                    <option value="Breakfast">Breakfast</option>
                    <option value="Lunch">Lunch</option>
                    <option value="Dinner">Dinner</option>
                    <option value="Snack">Snack</option>
                    <option value="Teatime">Teatime</option>
                    </select>

    </div>

    <section id="accordions">
    {recipelist.length === 0 ? '' :
    recipelist.map((data, index)=> <RecipeEntry recipeinfo={data} key={index}/>)
    }
    </section>

    </main>
  </article>
</dialog>


  )

}

export default RecipeModal;