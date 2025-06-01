import { Outlet } from "react-router-dom";
import Header2 from "../components/Header2";

const AppLayout = () => {
    return (
        <>
            <Header2 />
            <Outlet />
        </>
    )
}

export default AppLayout