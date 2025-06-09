import axios from "axios";
import { useStore } from "../state/Store";
import { Link } from "react-router-dom";

const ProfileBar = () => {

    const { setUser, user, profile } = useStore();
    return (
        <div className='px-4 py-2 rounded-md'>
            <div className=' w-[90vw] px-2 py-1  hover:bg-custom-hover text-custom-subheading my-2 rounded-md cursor-pointer'>
                {user.profileCreated ? <div>
                    Hi  {profile.firstName?.toUpperCase()}
                </div>
                    :
                    <Link to='/profile'>Create Profile</Link>}
            </div>

            <div className='w-[90vw] px-2 py-1  hover:bg-custom-hover text-custom-subheading my-2 rounded-md  cursor-pointer'> My orders   </div>
            <div className='w-[90vw] px-2 py-1  hover:bg-custom-hover text-custom-subheading my-2 rounded-md  cursor-pointer'  > Settings </div>
            <div className=' w-[90vw] px-2 py-1  hover:bg-custom-hover text-custom-subheading my-2 rounded-md cursor-pointer'
                onClick={async () => { await axios.put('/api/user/logout'); setUser({  username : null}) }}
            > Log out  </div>
        </div>
    )
}

export default ProfileBar