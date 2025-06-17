import axios, { isAxiosError } from 'axios'

const baseURL = import.meta.env.VITE_BACKEND_URL ;

export const AxiosRequest = async ({url,body, method  }: {url: string , body?: {} ,method: string }) => {
  try {  
     const token  = localStorage.getItem('YKDAuthToken') ;   
     const headers = { "Authorization"  : "Bearer " + token  }
     const response = await axios({ method,url  , baseURL , data: body ,  headers })  ; 
     return  {  status :  response.status  , data :  response.data ,  headers : response.headers }  
   } 
 catch (e) {
    if (isAxiosError(e)) {
      if (e.response) {
        const response = e.response ; 
        return  {  status :  response.status , data :  response.data ,  headers : response.headers }  ; 
      } 
      else {
        return  {   data : "Server did not respond." }  ; 
      }
    } 
    else { 
      return { data : "Internal server error." } ; 
    } 
  }
}