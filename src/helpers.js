import axios from 'axios';

const HOST = process.env.REACT_APP_HOST;
const FOODAPI = process.env.REACT_APP_REACT_APP_FOODAPI;
const RECIPEAPI = process.env.REACT_APP_RECIPEAPI;

const getDailynotes = () => {
  return axios.get(HOST + `/getdailynotes`)
    .then((res) => res.data)
    .catch((err) => console.error(err));
};

const postDailynotes = (data) => {
  return axios.post(HOST + `/postdailynotes`, data)
    .then((res) => res.data)
    .catch((err) => console.error(err));
};

const getfoodname = (keyword)=>{
  return axios.get(FOODAPI + `&ingr=${keyword}&nutrition-type=cooking`)
    .then((res) => res.data)
    .catch((err) => console.error(err));
}

const addfoodlog = (data) => {
  return axios.post(HOST + `/postfoodlog`, data, {headers: {
    'Content-Type': 'application/json',
  }})
    .then(() => window.location.reload())
    .catch((err) => console.error(err));
}

const getfoodlog = (date) => {
  return axios.get(HOST + `/getfoodlog?date=${date}`)
    .then((res) => res.data)
    .catch((err) => console.error(err));
}

const getrecipes = (keyword = 'salad', diet, mealtype ) => {
  let url = RECIPEAPI + `&q=${keyword}`;

  if(diet !== undefined && diet !== '' ){
    url = url + `&diet=${diet}`;
  }

  if(mealtype !== undefined && mealtype !== ''){
    url = url + `&mealType=${mealtype}`;
  }

  return axios.get(url)
  .then((res) => res.data)
  .catch((err) => console.error(err));

}
export {getDailynotes, postDailynotes}
export {getfoodname, addfoodlog, getfoodlog}
export {getrecipes}