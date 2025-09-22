
import { useNavigate } from "react-router-dom"; 

import { logout } from "../api/AuthApi"; 

 import { useStore } from "../state/Store";  
import Modal from "./Modal";
import ProfileForm from "./ProfileForm";
import { useState } from "react";


const ProfileBar = ( ) => { 

    const setIsProfileBarOpen  = useStore( (state) => state.setIsProfileBarOpen) ; 
    const user = useStore( state => state.user ) ; 
    const setUser = useStore( state => state.setUser) ; 
    
    const [profileFormOpen,setProfileFormOpen]  = useState(false) ;   

    
   

    const navigate = useNavigate() ; 

    return (
<>
    <div className='px-4 py-2 rounded-md bg-gray-800 shadow-lg border border-gray-700 my-4'>
        <div className='w-full px-4 py-2 hover:bg-gray-700 text-blue-400 font-medium rounded-lg transition-colors cursor-pointer' onClick={() => { setProfileFormOpen(true); }}>
            {user.profile ? (
                <div>Hi {user.profile.firstName}</div>
            ) : (
                <div>Create Profile</div>
            )}
        </div>
        <div className='w-full px-4 py-2 hover:bg-gray-700 text-blue-400 font-medium rounded-lg transition-colors cursor-pointer' onClick={() => navigate('/app/orders')}>
            My orders
        </div>
        <div className="w-full px-4 py-2 hover:bg-gray-700 text-blue-400 font-medium rounded-lg transition-colors cursor-pointer" onClick={() => { navigate('/app/account'); }}>
            My account
        </div>
        <div className='w-full px-4 py-2 hover:bg-gray-700 text-blue-400 font-medium rounded-lg transition-colors cursor-pointer' onClick={() => { navigate('/app/addresses'); setIsProfileBarOpen(false); }}>
            My addresses
        </div>
        <div className='w-full px-4 py-2 hover:bg-gray-700 text-blue-400 font-medium rounded-lg transition-colors cursor-pointer'>
            Settings
        </div>
        <div className='w-full px-4 py-2 hover:bg-gray-700 text-blue-400 font-medium rounded-lg transition-colors cursor-pointer' onClick={() => { logout(); setUser({}); location.reload(); }}>
            Log out
        </div>
    </div>
    {profileFormOpen && <Modal><ProfileForm forEdit={false} setProfileFormOpen={setProfileFormOpen} /></Modal>}
</>
    )
}

export default ProfileBar