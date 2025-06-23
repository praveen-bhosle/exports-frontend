import { create } from "zustand";
import type { User } from "../interfaces/User";

interface Store {
    user: User,
    setUser: (user: User) => void,
    isCartOpen: boolean,
    setIsCartOpen: (status: boolean) => void,
    isProfileBarOpen: boolean,
    setIsProfileBarOpen: (status: boolean) => void,
    isMenuBarOpen: boolean,
    setIsMenuBarOpen: (status: boolean) => void,
    authToastMessage : string , 
    setAuthToastMessage : (msg : string ) => void  
}

 export const  useStore = create<Store>((set) => ({
    user: {} ,
    setUser: (user: User) => { set(() => ({ user })) },
    isCartOpen: false,
    setIsCartOpen: (isCartOpen: boolean) => { set(() => ({ isCartOpen })) },
    isProfileBarOpen: false,
    setIsProfileBarOpen: (isProfileBarOpen: boolean) => { set(() => ({ isProfileBarOpen })) },
    isMenuBarOpen: false,
    setIsMenuBarOpen: (isMenuBarOpen: boolean) => { set(() => ({ isMenuBarOpen })) },
    authToastMessage : "" , 
    setAuthToastMessage : (msg : string) => {  set(() => ({ authToastMessage : msg })) }
}));