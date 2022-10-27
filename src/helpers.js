import axios from 'axios';
const config = require('../config.js');


const host = config.HOST;
const foodapi = config.FOODAPI;
const recipeapi = config.RECIPEAPI;


const getDailynotes = () => {
  return axios.get(host + `/getdailynotes`)
    .then((res) => res.data)
    .catch((err) => console.error(err));
};

const postDailynotes = (data) => {
  return axios.post(host + `/postdailynotes`, data)
    .then((res) => res.data)
    .catch((err) => console.error(err));
};

const getfoodname = (keyword)=>{
  return axios.get(foodapi + `&ingr=${keyword}&nutrition-type=cooking`)
    .then((res) => res.data)
    .catch((err) => console.error(err));
}

const addfoodlog = (data) => {
  return axios.post(host + `/postfoodlog`, data)
    .then((res) => res.data)
    .catch((err) => console.error(err));
}

const getfoodlog = (date) => {
  return axios.get(host + `/getfoodlog?date=${date}`)
    .then((res) => res.data)
    .catch((err) => console.error(err));
}

const getrecipes = (keyword = 'salad', diet, mealtype ) => {
  let url = recipeapi + `&q=${keyword}`;

  if(diet !== undefined && diet !== '' ){
    url = url + `&diet=${diet}`;
  }

  if(mealtype !== undefined && mealtype !== ''){
    url = url + `&mealType=${mealtype}`;
  }
  console.log('url', url);
  return axios.get(url)
  .then((res) => res.data)
  .catch((err) => console.error(err));

}
export {getDailynotes, postDailynotes}
export {getfoodname, addfoodlog, getfoodlog}
export {getrecipes}