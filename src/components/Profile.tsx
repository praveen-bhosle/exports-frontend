import { useStore } from "../state/Store";
import Input from "../UIComponents/Input";

const Profile = () => {

    const  user  = useStore( state => state.user ); 
    const profile = useStore( state => state.profile  )  ; 

    if (user.profileCreated) {
        return (
            <div className='h-[70vh] flex  justify-center  items-center'>
                <div className='p-4 m-2  bg-white  border-[1px]  rounded-md text-black '>
                    <form 
                        className='flex flex-col gap-2' >
                        <Input id='First Name' placeholder={profile.firstName} />
                        <Input id='Last Name' placeholder={profile.lastName} />
                        <Input id='Address' placeholder={profile.address} />
                        <Input id='City' placeholder={profile.city} />
                        <Input id='State' placeholder={profile.state} />
                        <Input id='Country' placeholder={profile.country} />
                        <Input id='PIN/ZIP code' placeholder={profile.pin} />
                        < button className='w-[50%] align-center  bg-black font-bold rounded-xl text-white mx-[25%] my-2' type='submit' > Update profile</button>
                    </form>
                    <div> Add and verify Email </div>
                    <Input id='Email' />
                </div>
            </div >
        )
    }

    return (
        <div className='h-[70vh] flex  justify-center  items-center'>
            <div className='p-4 m-2  bg-white  border-[1px]  rounded-md text-black '>
                <form 
                    className='flex flex-col gap-2 ' >
                    <Input id='First Name' />
                    <Input id='Last Name' />
                    <Input id='Address' />
                    <Input id='City' />
                    <Input id='State' />
                    <Input id='Country' />
                    <Input id='PIN/ZIP code' />
                    {user.profileCreated ?
                        <button className='w-[50%] align-center  bg-black font-bold rounded-xl text-white mx-[25%] my-2' type='submit' > Update profile</button> :
                        <button className='w-[50%] align-center  bg-black font-bold rounded-xl text-white mx-[25%] my-2' type='submit' > Create profile</button>
                    }
                </form>
                { }
                <div> Add and verify Email </div>
                <Input id='Email' placeholder={profile.email} />
                <div> Add and verify Phone </div>
                <Input id='Phone' placeholder={profile.phone} />
            </div>
        </div>
    )
}

export default Profile 