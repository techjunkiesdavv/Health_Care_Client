import axios from 'axios';

const API= axios.create({ baseURL: 'http://127.0.0.1:5000'}) ;

const config=(data)=>({
method: 'POST',
body: JSON.stringify(data), // converts it to string objects means keys bhi string hoti h
headers: {
  'Content-type': 'application/json; charset=UTF-8',

},
})

export const checkHairLoss = (data) => API.post('/hairloss/predict_hair', data);
export const checkBreastCancer = (data) => API.post('/breast/predict_breast', data);
export const checkDiabetes = (data) => API.post('/diabetes/predict_diabetes', data);
export const checkHeart = (data) => API.post('/heart/predict_heart', data);
export const checkKidney = (data) => API.post('/kidney/predict_kidney', data);
export const checkLiver = (data) => API.post('/liver/predict_liver',data);
