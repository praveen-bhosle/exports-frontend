import { create } from "zustand";
import type { User } from "../interfaces/User";
import type { Profile } from "../interfaces/Profile";

interface Store {
    user: User,
    setUser: (user: User) => void,
    isCartOpen: boolean,
    setIsCartOpen: (status: boolean) => void,
    isProfileBarOpen: boolean,
    setIsProfileBarOpen: (status: boolean) => void,
    isMenuBarOpen: boolean,
    setIsMenuBarOpen: (status: boolean) => void,
    profile: Profile,
    setProfile: (profile: Profile) => void,
}

 export const  useStore = create<Store>((set) => ({
    user: { username : null ,   profileCreated: false },
    setUser: (user: User) => { set(() => ({ user })) },
    isCartOpen: false,
    setIsCartOpen: (isCartOpen: boolean) => { set(() => ({ isCartOpen })) },
    isProfileBarOpen: false,
    setIsProfileBarOpen: (isProfileBarOpen: boolean) => { set(() => ({ isProfileBarOpen })) },
    isMenuBarOpen: false,
    setIsMenuBarOpen: (isMenuBarOpen: boolean) => { set(() => ({ isMenuBarOpen })) },
    profile: {},
    setProfile: (profile: Profile) => { set(() => ({ profile })) }
}));