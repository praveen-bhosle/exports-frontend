import { AxiosRequest } from './AxiosApiHandler'

export const login = async ({username, password}: {username: string ,password: string}) => {  
    const response =   await AxiosRequest(  { method : 'post' , url: '/public/login' , body: { username , password } } ) ; 

    if( response == undefined ) {
        return false ;
    }
    if(response!=undefined) {  
        const authorizationHeader = response.headers['Authorization'] ; 
        const token  = authorizationHeader.split(' ')[1] ; 
        localStorage.setItem( 'YKDAuthToken' , token ) ; 
        return true ; 
     }
}

export const logout = async () => { 
  try {
    localStorage.removeItem('YKDAuthToken') ;
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