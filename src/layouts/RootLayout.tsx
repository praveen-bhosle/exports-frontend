import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header1"


const RootLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default RootLayout