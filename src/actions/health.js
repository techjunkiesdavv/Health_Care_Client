import * as api from '../api/index.js';

export const addhealth=async(formData)=>{


    try {
        const {data}=await api.addHealth(formData);
        return data;
        
    } catch (error) {
        
    }
}