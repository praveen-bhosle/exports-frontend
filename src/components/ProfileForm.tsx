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
    const {  success ,data  }  = await  editProfile( { firstName , lastName ,  id:  1}) ;
    if(!success) return Promise.reject("error") ;  
    const newProfile : Profile = data ; 
    setUser( { ...user ,  profile : newProfile } )
    }
  }

  return (
    <div className="flex flex-col ">
    <h1 className="font-bold text-xl"> { forEdit ?  'Edit profile' : 'Create profile' }  </h1> <br/> 
    <form  className="form"  onSubmit={ async (e) => {   const myPromise =  handleSubmit(e) ;    toast.promise( myPromise ,  { loading : forEdit ?  "Editing the profile."  : "Creating the profile." ,  success :  forEdit ?   "Profile edited successfully."  : "Profile created successfully."     } )  } } > 
        <label htmlFor="firstName"   > First Name  </label> 
        <input type="text" name="firstName"  id="fullname" defaultValue= { user.profile?.firstName } required />
        <label htmlFor="lastName"> Last Name </label>
        <input name="lastName" defaultValue= { user.profile?.lastName } required  /> 
        <label htmlFor='image'>   </label>
        <SubmitButton2 text= {  forEdit ? "Edit profile"  : "Create profile"  } /> 
    </form>
    <button onClick={ () => setProfileFormOpen(false)  }  className="cursor-pointer font-bold bg-black dark:bg-white text-white dark:text-black rounded-[5px]" > Go back </button>
    </div>
  )
}

export default ProfileForm  
