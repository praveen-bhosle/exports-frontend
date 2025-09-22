import { useState } from "react";
import { useStore } from "../state/Store"
import Modal from "./Modal";
import ProfileForm from "./ProfileForm";
import { useNavigate } from "react-router-dom";


const Account = () => { 

  

    const user = useStore( store => store.user ) ; 

    const [profileFormOpen , setProfileFormOpen] = useState(false) ;  
    const [forEdit , _ ] = useState( user.profile ? true : false ) ;

    const navigate = useNavigate() ; 

    return ( 
        <> 
        <div className="flex flex-col min-h-screen justify-center items-center p-4 bg-gray-900 text-white">
                <div className="flex flex-col gap-6 w-full max-w-lg bg-gray-800 rounded-2xl shadow-2xl p-8  border border-gray-700">
                    <div className="text-3xl font-extrabold text-blue-400 text-center mb-4">Your Account</div>

                    <div className="flex flex-col gap-4">
                        <div className="flex justify-between items-center py-2">
                            <div className="text-gray-400">
                                <div className="font-bold text-gray-300">Username</div>
                                <div>{user.username}</div>
                            </div>
                        </div>

                        <hr className="border-gray-700" />

                        <div className="flex justify-between items-center py-2">
                            <div>
                                <div className="font-bold text-gray-300">Name</div>
                                <div className="text-sm text-gray-400">{user.profile?.firstName} {user.profile?.lastName}</div>
                            </div>
                            {user.profile ? (
                                <div onClick={() => setProfileFormOpen(true)} className="cursor-pointer text-blue-400 hover:text-blue-300 transition-colors duration-200">Edit</div>
                            ) : (
                                <div onClick={() => setProfileFormOpen(true)} className="cursor-pointer text-blue-400 hover:text-blue-300 transition-colors duration-200">Add</div>
                            )}
                        </div>

                        <hr className="border-gray-700" />

                        <div className="flex justify-between items-center py-2">
                            <div className="font-bold text-gray-300">Email</div>
                            <div className="text-gray-400">{user.email}</div>
                            <div className="cursor-pointer text-blue-400 hover:text-blue-300 transition-colors duration-200" onClick={() => { navigate('/auth/verifyEmail') }}>
                                {user.email ? 'Edit' : 'Add'}
                            </div>
                        </div>

                        <hr className="border-gray-700" />

                        <div className="flex justify-between items-center py-2">
                            <div>
                                <div className="font-bold text-gray-300">Phone</div>
                                <div>{user.phone}</div>
                            </div>
                            <div className="cursor-pointer text-blue-400 hover:text-blue-300 transition-colors duration-200">
                                {user.phone ? 'Edit' : 'Add'}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {profileFormOpen && (
                <Modal>
                    <ProfileForm forEdit={forEdit} setProfileFormOpen={setProfileFormOpen} />
                </Modal>
            )}
        </>
       
    )
}

export default Account ;