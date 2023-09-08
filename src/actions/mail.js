import * as api from '../api/index.js';



export const sendotp=async(formData)=>{
    console.log(formData)
    try {
        const {data}=await api.sendOtp(formData);

        
    } catch (error) {
        
    }
}