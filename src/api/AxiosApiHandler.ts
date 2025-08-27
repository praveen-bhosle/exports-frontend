import axios, { isAxiosError } from 'axios'

import { logout } from './AuthApi';

const baseURL = import.meta.env.VITE_BACKEND_URL ;

export const AxiosRequest = async ({url,body, method    }: {url: string , body?: {} ,method: string   }) => {
  try {  
     const token  = localStorage.getItem('YKDAuthToken') ;    
     const resetPasswordtoken = localStorage.getItem("resetPasswordToken") ; 
     const headers = { "Authorization"  : "Bearer " + token  , "reset-password-jwtToken" : resetPasswordtoken} ;
     const response = await axios({ method,url  , baseURL , data: body ,  headers  ,withCredentials : true   })  ; 
     return  {  status :  response.status  , data :  response.data ,  headers : response.headers   }  
  }
 catch (e) {
    if (isAxiosError(e)) {
      if (e.response) {
        const response = e.response ; 
        if(response.status === 403 ) {  

           try { 
            
                const response  = await axios( {  method : 'get' ,  url : 'public/refresh' , baseURL  , withCredentials : true   } )  ;   
                const {token}  = response.data ; 
                localStorage.setItem('YKDAuthToken' , token );   
                const headers = { "Authorization"  : "Bearer " + token  }
                const retry_response = await axios({ method,url  , baseURL , data: body ,  headers ,   withCredentials : true   })   
      
                return  {  status :  retry_response.status  , data :  retry_response.data ,  headers : retry_response.headers    }   
             
           }
           catch(e) { 

            console.log("flow reached to catch the refresh axios") ;
              if( isAxiosError(e) ) { 
                if(e.response) { 
                   const response  = e.response ; 
                   if( response.status === 401) { 
                     logout(); 
                     return { data : "Refresh token expired or password changed. Please login again." }  ; 
                   }
                   logout() ;
                   return { data : "cookie not sent."} ; 
              
                }
                else { 
                   console.log(e); 
                   logout() ;
                   return { data : "server did not respond when refreshing the access token"}  ; 
                } 
              }
              else { 
                console.log(e); 
                logout();
                return { data : "unknown error occured."} ; 
              }  
           } 
      }      
        return  {  status :  response.status , data :  response.data ,  headers : response.headers }  ; 
      } 
      else {
        return  {   data : "Server did not respond." }  ; 
      }
    } 
    else { 
      console.log(e) ; 
      return { data : "Some unknown error occured." } ;  
    } 
  }
}