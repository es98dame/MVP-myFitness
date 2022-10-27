import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';


const RecipeEntry = ({recipeinfo}) => {

  return(
    <details>
            <summary className="recipesection">
              <div>
                <div><img src={recipeinfo.recipe['image']}/></div>
                <div><h4>{recipeinfo.recipe['label']}</h4></div>
                <div className="grid">
                  <div>{Math.round(recipeinfo.recipe['calories']/10)} CALORIES/SERVING</div>
                  <div>{recipeinfo.recipe['ingredients'].length} INGREDIENTS</div>
                </div>
              </div>
            </summary>
            <ul>
              <font size="5"><b>Ingredients</b></font>
              {recipeinfo.recipe['ingredients'].map((data)=>{
                return <li>{data.text}</li>
              })
                }
              {/* <li>Energy : {nutrients['ENERC_KCAL']} kcal</li>
              <li>Protein : {nutrients['PROCNT']} g</li>
              <li>Fat : {nutrients['FAT']} g</li>
              <li>Carbohydrate : {nutrients['CHOCDF']} g</li> */}
            </ul>

            <section className="performance-facts">
              <header className="performance-facts__header">
                <h1 className="performance-facts__title">Nutrition Facts</h1>
                <p>Serving Size {Math.round(recipeinfo.recipe['totalWeight']/10)}g </p>
              </header>
              <table className="performance-facts__table">
                <thead>
                  <tr>
                    <th colSpan="3" className="small-info">
                      Amount Per Serving
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th colSpan="2">
                      <b>Calories</b> {Math.round(recipeinfo.recipe['calories']/10)}
                    </th>
                  </tr>
                  <tr className="thick-row">
                    <td></td>
                    <td></td>
                    <td className="small-info">
                      <b>% Daily Value*</b>
                    </td>
                  </tr>
                  <tr>
                    <th colSpan="2">
                      <b>Total Fat</b>
                      {Math.round(recipeinfo.recipe['totalNutrients']['FAT']['quantity']/10)}g
                    </th>
                    <td>
                      <b>{Math.round(recipeinfo.recipe['totalDaily']['FAT']['quantity']/10)}%</b>
                    </td>
                  </tr>
                  <tr>
                    <td className="blank-cell">
                    </td>
                    <th>
                      Saturated Fat {Math.round(recipeinfo.recipe['totalNutrients']['FASAT']['quantity']/10)}g
                    </th>
                    <td>
                      <b>{Math.round(recipeinfo.recipe['totalDaily']['FASAT']['quantity']/10)}%</b>
                    </td>
                  </tr>
                  <tr>
                    <td className="blank-cell">
                    </td>
                    <th>
                      Trans Fat {Math.round(recipeinfo.recipe['totalNutrients']['FATRN']['quantity']/10)}g
                    </th>
                    <td>
                    </td>
                  </tr>
                  <tr>
                    <th colSpan="2">
                      <b>Cholesterol</b> {Math.round(recipeinfo.recipe['totalNutrients']['CHOLE']['quantity']/10)}mg
                    </th>
                    <td>
                      <b>{Math.round(recipeinfo.recipe['totalDaily']['CHOLE']['quantity']/10)}%</b>
                    </td>
                  </tr>
                  <tr>
                    <th colSpan="2">
                      <b>Sodium</b>
                      {Math.round(recipeinfo.recipe['totalNutrients']['NA']['quantity']/10)}mg
                    </th>
                    <td>
                      <b>{Math.round(recipeinfo.recipe['totalDaily']['NA']['quantity']/10)}%</b>
                    </td>
                  </tr>
                  <tr>
                    <th colSpan="2">
                      <b>Total Carbohydrate</b>
                      {Math.round(recipeinfo.recipe['totalNutrients']['CHOCDF']['quantity']/10)}g
                    </th>
                    <td>
                      <b>{Math.round(recipeinfo.recipe['totalDaily']['CHOCDF']['quantity']/10)}%</b>
                    </td>
                  </tr>
                  <tr>
                    <td className="blank-cell">
                    </td>
                    <th>
                      Dietary Fiber {Math.round(recipeinfo.recipe['totalNutrients']['FIBTG']['quantity']/10)}g
                    </th>
                    <td>
                      <b>{Math.round(recipeinfo.recipe['totalDaily']['FIBTG']['quantity']/10)}%</b>
                    </td>
                  </tr>
                  <tr>
                    <td className="blank-cell">
                    </td>
                    <th>
                      Sugars {Math.round(recipeinfo.recipe['totalNutrients']['SUGAR']['quantity']/10)}g
                    </th>
                    <td>
                    </td>
                  </tr>
                  <tr className="thick-end">
                    <th colSpan="2">
                      <b>Protein</b>
                      {Math.round(recipeinfo.recipe['totalNutrients']['PROCNT']['quantity']/10)}g
                    </th>
                    <td>
                    </td>
                  </tr>
                </tbody>
              </table>

              <table className="performance-facts__table--grid">
                <tbody>
                  <tr>
                    <td colSpan="2">
                      Vitamin A
                      {Math.round(recipeinfo.recipe['totalDaily']['VITA_RAE']['quantity']/10)}%
                    </td>
                    <td>
                      Vitamin C
                      {Math.round(recipeinfo.recipe['totalDaily']['VITC']['quantity']/10)}%
                    </td>
                  </tr>
                  <tr className="thin-end">
                    <td colSpan="2">
                      Calcium
                      {Math.round(recipeinfo.recipe['totalDaily']['CA']['quantity']/10)}%
                    </td>
                    <td>
                      Iron
                      {Math.round(recipeinfo.recipe['totalDaily']['FE']['quantity']/10)}%
                    </td>
                  </tr>
                </tbody>
              </table>
            </section>
            <a href={recipeinfo.recipe['url']} target="_blank"><button>More details</button></a>
            {/* <button className="addbutton" onClick={addfood} >Track</button> */}
    </details>
  )


};

export default RecipeEntry;