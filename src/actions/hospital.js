import * as api from '../api/index.js';



export const gethospital=async(formdata)=>{


    try {
        const {data}= await api.getHospital(formdata);
        return data;
    } catch (error) {
        
    }
}