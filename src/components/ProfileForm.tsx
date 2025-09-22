import React from 'react'
import toast from 'react-hot-toast';
import SubmitButton2 from '../UIComponents/SubmitButton2';
import { createProfile, editProfile } from '../api/ProfileApi';
import type { Profile } from '../interfaces/Profile';
import { useStore } from '../state/Store';


const ProfileForm = ( { forEdit , setProfileFormOpen   }  : { forEdit : boolean , setProfileFormOpen : React.Dispatch<React.SetStateAction<boolean>>   }) => {

   const user = useStore( store => store.user ) ; 
   const setUser = useStore( store => store.setUser ) ;  
 
  const handleSubmit = async (e : React.FormEvent<HTMLFormElement>) =>   {  
    e.preventDefault() ; 
    const formData = new FormData(e.currentTarget) ; 
    const firstName = formData.get('firstName')?.toString() ;  
    const lastName  = formData.get('lastName')?.toString() ;   
    if(!forEdit) { 
    const {  success ,data   }  = await  createProfile( { firstName , lastName }) ;
    if(!success ) return Promise.reject("error") ;
    const newProfile : Profile = data ; 
    setUser( { ...user ,  profile : newProfile } )
  } 
    else { 
    const {  success ,data  }  = await  editProfile( { firstName , lastName }) ;
    if(!success) return Promise.reject("error") ;  
    const newProfile : Profile = data ; 
    setUser( { ...user ,  profile : newProfile } )
    }
  }

  return (
<div className="flex flex-col gap-6 p-6 bg-gray-800 rounded-2xl shadow-2xl border border-gray-700 w-full max-w-lg mx-auto text-white">
    <h1 className="font-bold text-2xl text-blue-400 text-center">
        {forEdit ? 'Edit profile' : 'Create profile'}
    </h1>
    <form className="flex flex-col gap-4" onSubmit={async (e) => { const myPromise = handleSubmit(e); toast.promise(myPromise, { loading: forEdit ? "Editing the profile." : "Creating the profile.", success: forEdit ? "Profile edited successfully." : "Profile created successfully." }); }}>
        <label htmlFor="firstName" className="text-gray-300">First Name</label>
        <input type="text" name="firstName" id="firstName" defaultValue={user.profile?.firstName} required className="p-3 rounded-md bg-gray-900 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200" />
        <label htmlFor="lastName" className="text-gray-300">Last Name</label>
        <input name="lastName" defaultValue={user.profile?.lastName} required className="p-3 rounded-md bg-gray-900 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200" />
        <SubmitButton2 text={forEdit ? "Edit profile" : "Create profile"} />
    </form>
    <button onClick={() => setProfileFormOpen(false)} className="mt-4 px-4 py-2 bg-gray-600 rounded-lg text-white font-bold hover:bg-gray-700 transition-colors">
        Go back
    </button>
</div>
  )
}

export default ProfileForm  
