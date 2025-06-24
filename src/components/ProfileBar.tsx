
import { useNavigate } from "react-router-dom"; 

import { logout } from "../api/AuthApi"; 

 import { useStore } from "../state/Store";  
import Modal from "./Modal";
import ProfileForm from "./ProfileForm";
import { useState } from "react";


const ProfileBar = ( ) => { 

    const setIsProfileBarOpen  = useStore( (state) => state.setIsProfileBarOpen) ; 
    const user = useStore( state => state.user ) ; 
    
    const [profileFormOpen,setProfileFormOpen]  = useState(false) ;   

    
   

    const navigate = useNavigate() ; 

    return (
        <> 
        <div className='px-4 py-2 rounded-md'>
            
            <div className=' w-[90vw] px-2 py-1  hover:bg-custom-hover text-custom-subheading my-2 rounded-md cursor-pointer'>
                { user.profile ? <div>
                    Hi  {user.profile.firstName}
                </div>
                    :
                    <div onClick = { () => {  setProfileFormOpen(true)  } }>Create Profile</div>}
            </div>

            <div className='w-[90vw] px-2 py-1  hover:bg-custom-hover text-custom-subheading my-2 rounded-md  cursor-pointer' onClick= { () => navigate('/app/orders') }> My orders   </div> 
            <div className="w-[90vw] px-2 py-1  hover:bg-custom-hover text-custom-subheading my-2 rounded-md  cursor-pointer"  onClick={ () => { navigate('/app/account') }} > My account </div>
            <div className='w-[90vw] px-2 py-1  hover:bg-custom-hover text-custom-subheading my-2 rounded-md  cursor-pointer' onClick={ () =>  { navigate('/app/addresses')  ; setIsProfileBarOpen(false) ;  }  } > My addresses   </div>
            <div className='w-[90vw] px-2 py-1  hover:bg-custom-hover text-custom-subheading my-2 rounded-md  cursor-pointer'  > Settings </div>
            <div className=' w-[90vw] px-2 py-1  hover:bg-custom-hover text-custom-subheading my-2 rounded-md cursor-pointer' onClick={  () => {  logout();}}> Log out  </div>
        </div>
        {  profileFormOpen && <Modal> <ProfileForm forEdit={false} setProfileFormOpen={ setProfileFormOpen}  />  </Modal>    }
        
        </>
    )
}

export default ProfileBar