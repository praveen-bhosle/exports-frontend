import toast from "react-hot-toast";
import type { Profile } from "../interfaces/Profile"
import { AxiosRequest } from "./AxiosApiHandler"


const url = "user/profile" ; 

export const createProfile = async ( profile : Profile  ) => {   
    const response = await  AxiosRequest( {  url , method : 'post' ,  body : profile    }) ; 
    if(response.status === 201) { 
        return  { data : response.data , success : true   } ; 
    } 
    toast.error(response.data) ; 
    return  { success : false } ; 
}

export const editProfile = async (profile : Profile) => { 
    const response = await AxiosRequest( { url , method : 'put' ,  body : profile   }) ; 
    if(response.status === 200) { 
        return  { data : response.data , success : true } ;  
    } 
    toast.error(response.data) ; 
    return  {  success : false } ; 
}

export const getProfile = async ( ) => { 
    const response = await AxiosRequest(  { url,  method : 'get' } ) ; 
    if(response.status === 200) { 
        return  { data: response.data , success : true } ; 
    }
    toast.error(response.data) ; 
    return  { success  :false  }  ; 

}

export const deleteProfle = async ( id : number  ) => { 
    const response = await AxiosRequest(  { url,  method : 'delete' ,  body : {id} } ) ; 
    if(response.status === 200) { 
        return  { data: response.data , success : true } ; 
    }
    toast.error(response.data) ; 
    return  { success  :false  }  ; 
}