import { Outlet } from "react-router-dom";
import Header2 from "../components/Header2";
import {
    Sheet,
    SheetContent
  } from "@/components/ui/sheet"
import Cart from "@/components/Cart";


const AppLayout = () => { 
    return (
        <div>
            <Sheet> 
            <Header2 />
            <div className="p-2"> 
            <Outlet /> 
            </div> 
            <SheetContent className="p-0">
              <Cart/> 
            </SheetContent>
            </Sheet> 
        </div>
    )
}

export default AppLayout