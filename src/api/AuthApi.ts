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
    return response.status == 201 ; 
} 