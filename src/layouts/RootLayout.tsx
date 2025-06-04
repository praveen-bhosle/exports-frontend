import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header1"
import { useStore } from "../state/Store"
import { CheckLogged } from "../utils/CheckLogged"


const RootLayout = () => { 
    const { setUser } = useStore() ;  
    const  { username } = CheckLogged() ;  
    setUser( { username  })  ; 
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