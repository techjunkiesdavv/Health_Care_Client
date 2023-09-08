import * as api from '../api/index.js';

export const signin = async(formData)=>{

try {
    
    console.log(formData)
    // const {data}=await api.signIn(formData);
    // console.log(data.result);

    

} catch (error) {
    console.log(error);
}

}



export const signup =async(formData)=>{

    try {
        console.log(formData)
    const {data}=await api.signUp(formData);
    return data;
    
    
    } catch (error) {
        console.log(error);
    }
    
    }