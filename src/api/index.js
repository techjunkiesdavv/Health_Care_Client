import axios from 'axios';
const API = axios.create({baseURL:'http://localhost:5000/'});
API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
  
    return req;
  });


  export const signIn=(formData)=> API.post('/user/signin',formData);
 
  export const signUp=(formData)=> API.post('/user/signup',formData);








  
  export const addHealth=(formData)=> API.post('/add/health',formData);





  
  export const getDoctors=(formData)=> API.post('/doctor/get',formData);
  
  export const getDoctorsbyid=(formData)=> API.post('/doctor/getbyid',formData);
  
  export const bookApp=(formData)=> API.post('/doctor/addappointment',formData);



  export const cancelApp=(formData)=> API.post('/doctor/cancelappointment',formData);


  
  export const getHospital=(formData)=> API.post('/hospital/get',formData);
 





  export const sendOtp=(formData)=> API.post('/send/mail',formData);
 
 