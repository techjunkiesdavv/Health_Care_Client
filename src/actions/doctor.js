import * as api from '../api/index.js';



export const getdoctors=async(formdata)=>{


    try {

        const {data}= await api.getDoctors(formdata);
        return data;
    } catch (error) {
        
    }
}

export const getdoctorsbyid=async(formdata)=>{


    try {

        const {data}= await api.getDoctorsbyid(formdata);
        console.log(data)
        return data;
    } catch (error) {
        
    }
}
export const getdoctorsAppbyid=async(formdata)=>{


    try {

        const {data}= await api.getDoctorsAppbyid(formdata);
        console.log(data)
        return data;
    } catch (error) {
        
    }
}


export const bookAppointment= async(formdata)=>{


    try {
        const {data} = await api.bookApp(formdata)
        return data;
    } catch (error) {
        
    }}

    export const cancelapp= async(formdata)=>{


        try {
            const {data} = await api.cancelApp(formdata)
            return data;
        } catch (error) {
            
        }}