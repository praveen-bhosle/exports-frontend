import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header1"
import { useStore } from "../state/Store"
import { CheckLogged } from "../utils/CheckLogged"
import { useEffect } from "react"
import { Toaster } from "react-hot-toast"
import { AxiosRequest } from "../api/AxiosApiHandler"
import type { User } from "../interfaces/User"



const RootLayout = () => { 
    const { setUser  ,  user   } = useStore() ;  
    const  { username } = CheckLogged() ;  
    const getUserInfo = async () => { 
        const response =  await   AxiosRequest( { url : '/user/info'  , method: 'get'}) ; 
        if(response.status === 200) {  return response.data;   } ; 
    } 

    const updateUser = async () => { 
        const user : User = await getUserInfo() ; 
        if(user)  setUser(user) ;  
    }

    useEffect(() => {   
        console.log(username) ; 
        console.log(user.username) ;
        if(username && user.username !== username) { 
            updateUser() ; 
        } }   ,[user] )  ; 

    return (
        <div className=" bg-[#FAFAFA] dark:bg-[#111111] dark:text-gray-100 ">
           <Header />
           <div className="mt-[47px]  pt-[2px] min-h-[76vh] p-2 "> 
               <Toaster /> 
               <Outlet />
           </div>
           <Footer/>
        </div>
    )
}

export default RootLayout



/* 
  <Header />
            <div className="mt-[48px] pt-[2px]">  
            <div className="min-h-[76vh] p-2"> 
            <Toaster /> 
            <Outlet />
            </div>
            <Footer />
            </div> 
*/