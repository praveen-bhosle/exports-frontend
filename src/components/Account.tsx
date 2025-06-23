import { useState } from "react";
import { useStore } from "../state/Store"
import Modal from "./Modal";
import ProfileForm from "./ProfileForm";


const Account = () => { 

  

    const user = useStore( store => store.user ) ; 

    const [profileFormOpen , setProfileFormOpen] = useState(false) ; 

    return ( 
 
        <> 
        
        <div className="flex flex-col h-[70vh] justify-center items-center "> 
        <div className="text-xl font-bold  mb-2 "> Your Account  </div>
        <div className="border p-4  flex flex-col gap-4 w-[400px]"> 
             
            <div> 
                <div className="font-bold"> Username </div>  <div>  {user.username} </div>
            </div>
            <hr/> 
            <div className="flex justify-between ">  
            <div> <div className="font-bold"> Name </div> 
            <div className="text-sm"> { user.profile?.firstName }  { user.profile?.lastName } </div> </div>
            <div onClick = { () => {setProfileFormOpen(true);}}  className="cursor-pointer h-min" >  Edit </div> 
            </div>
            <hr/> 
            <div className="flex justify-between "> 
            <div className="font-bold "> Email  </div> <div> { user.email} </div>
            <div className="cursor-pointer h-min" > { user.email ? 'Edit' : 'Add' } </div> 
            </div>
            <hr/>
            <div className="flex justify-between"> 
            <div> <div className="font-bold"> Phone   </div><div> { user.phone } </div> </div>
            <div className="cursor-pointer h-min">  { user.phone ? 'Edit' : 'Add' } </div>
            </div> 

        </div>
        </div>
        { profileFormOpen && 
        <Modal> 
            <ProfileForm  forEdit = {true} setProfileFormOpen={ setProfileFormOpen }  />
        </Modal>  } 
        </>
       
    )
}

export default Account ;