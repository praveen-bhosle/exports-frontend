import { AxiosRequest } from './AxiosApiHandler'

export const login = async ({username, password}: {username: string ,password: string}) => {  
    const response =   await AxiosRequest(  { method : 'post' , url: '/public/login' , body: { username , password } } ) ; 

    if( response == undefined ) {
        return false ;
    }
    if(response!=undefined) {  
       console.log(response.data) ;
        const  { token   } = response.data ;  
        console.log(token) ; 
        localStorage.setItem('YKDAuthToken' , token ) ; 
        localStorage.setItem('YKDUsername'  , username  ) ; 
        return true ; 
     }
}

export const logout = async () => { 
  try {
    localStorage.removeItem('YKDAuthToken') ;
    localStorage.removeItem('YKDUsername') ; 
  } catch (e) {
    console.log(e); 
  }
} 

export const signup = async ( { username  , password } : { username : string , password : string  }) => {     
    const response =   await AxiosRequest({ method : 'post' , url:'/public/signup' , body : { username , password }  }) ;
    return response !== undefined ; 
}

export const verifyEmailApi = async (  email : string   )  => {   
    const response = await AxiosRequest( { method : 'post' , url:'/user/verifyEmail' ,  body : { email }})  ;   
    return  response !== undefined ;
} 