import { Outlet } from "react-router-dom";
import Header2 from "../components/Header2";

const AppLayout = () => {
    return (
        <div className="bg-[#FAFAFA]">
            <Header2 />
            <div className="p-2"> 
            <Outlet />
            </div>
        </div>
    )
}

export default AppLayout