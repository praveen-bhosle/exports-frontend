
import { Link } from "react-router-dom"; 

import { logout } from "../api/AuthApi"; 

 import { useStore } from "../state/Store";  


const ProfileBar = () => {

    const {  user, profile  } = useStore();
    return (
        <div className='px-4 py-2 rounded-md'>
            <div className=' w-[90vw] px-2 py-1  hover:bg-custom-hover text-custom-subheading my-2 rounded-md cursor-pointer'>
                {user.profileCreated ? <div>
                    Hi  {profile.firstName?.toUpperCase()}
                </div>
                    :
                    <Link to='/app/profile'>Create Profile</Link>}
            </div>

            <div className='w-[90vw] px-2 py-1  hover:bg-custom-hover text-custom-subheading my-2 rounded-md  cursor-pointer'> My orders   </div>
            <div className='w-[90vw] px-2 py-1  hover:bg-custom-hover text-custom-subheading my-2 rounded-md  cursor-pointer'  > Settings </div>
            <div className=' w-[90vw] px-2 py-1  hover:bg-custom-hover text-custom-subheading my-2 rounded-md cursor-pointer'
                onClick={  () => {  
                    logout() ;  
                     }}
            > Log out  </div>
        </div>
    )
}

export default ProfileBar