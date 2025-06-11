import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header1"
import { useStore } from "../state/Store"
import { CheckLogged } from "../utils/CheckLogged"
import { useEffect } from "react"


const RootLayout = () => { 
    const { setUser  ,  user } = useStore() ;  
    const  { username } = CheckLogged() ;  
    useEffect(() => { if(  user.username !== username ) setUser({username})} ,[user])  ; 
    return (
        <div className="bg-[#FAFAFA]">
            <Header />
            <div className="mt-[49px] pt-[2px]"> 
            <Outlet />
            <Footer />
            </div>
        </div>
    )
}

export default RootLayout