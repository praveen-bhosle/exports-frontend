import { AxiosRequest } from './AxiosApiHandler'

export const login = async ({username, password}: {username: string ,password: string}) => {  
    const response =   await AxiosRequest(  { method : 'post' , url: '/public/login' , body: { username , password } } ) ;   
      if(response.status === 200  ) {        
      const  { token} = response.data ; 
      localStorage.setItem('YKDAuthToken' , token ) ; 
      localStorage.setItem('YKDUsername'  , username  ) ;  
      return {  data  : response.data ,  success : true  }  ;   
      }
      return {   success : false  ,  data :response.data  }  ;  
 }

export const logout = () => { 
  try { 
    localStorage.removeItem('YKDAuthToken') ;
    localStorage.removeItem('YKDUsername')  ;  
  } catch (e) {
    console.log(e); 
  }
} 

export const signup = async ( { username  , password } : { username : string , password : string  }) => {     
    const response =   await AxiosRequest({ method : 'post' , url:'/public/signup' , body : { username , password }  }) ; 
    if(response.status === 201 ) {      
      return {  data  : response.data ,  success : true  } ;    
      }
      return {   success : false  ,  data :response.data  }  ; 
}

export const verifyEmailApi = async (  email : string   )  => {   
    const response = await AxiosRequest( { method : 'post' , url:'/user/verifyEmail' ,  body : { email }})  ;   
    if(response.status === 200 ) {      
      return {  data  : response.data ,  success : true  } ;    
      }
      return {   success : false  ,  data :response.data  }  ; 

} 

export const getOTPApi = async ( username : string ) => { 
  const response = await AxiosRequest( { method : 'post' , url :`/public/resetPassword/createOTP?username=${username}`  } ) ; 
  if(response.status === 200 )   
  return {  data  : response.data ,  success : true  } ;   
  return {   success : false  ,  data :response.data  }  ; 
}

export const verifyOTPApi = async ( code :string , username : string ) => { 
  const response = await AxiosRequest( { method : 'post' , url :`/public/resetPassword/verifyOTP?code=${code}&username=${username}`  } ) ; 
  if(response.status === 200 )  { 
  const { msg , token  }  = response.data ;
  localStorage.setItem('resetPasswordToken' , token ) ; 
  return {  data  : msg ,  success : true  } ;   
  }
  return {   success : false  ,  data :response.data  }  ; 
} 

export const resetPasswordApi = async ( password:string ) => { 
  const response = await AxiosRequest( { method : 'post' , url :`/public/resetPassword/reset?password=${password}`   } ) ; 
  if(response.status === 200 )  {  
  localStorage.removeItem('resetPasswordToken') ; 
  return {  data  : response.data ,  success : true  } ;   
  }
  return {   success : false  ,  data :response.data  }  ; 
} 
