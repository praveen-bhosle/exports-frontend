import { Outlet } from "react-router-dom";
import Header2 from "../components/Header2";
import {
    Sheet,
    SheetContent
  } from "@/components/ui/sheet"
import Cart from "@/components/Cart";


const AppLayout = () => { 
    return (
      <Sheet> 
        <div>
            <Header2 />
            <div className="p-2"> 
            <Outlet />  
            </div> 
            <SheetContent className="p-0 w-[350px]"> 
            <Cart/>  
            </SheetContent>
        </div>
      </Sheet>
    )
}

export default AppLayout