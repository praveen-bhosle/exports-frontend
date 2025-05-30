import { create } from "zustand";
import type { User } from "../interfaces/User";
import type { CartItem } from "../interfaces/CartItem";


interface EditCartObject {
    cartItemId: number,
    quantity: number
}

interface Store {
    user: User,
    setUser: (user: User) => void,
    isCartOpen: boolean,
    setIsCartOpen: (status: boolean) => void,
}


export const useStore = create<Store>((set) => ({
    user: { loggedIn: false },
    setUser: (user: User) => { set(() => ({ user })) },
    isCartOpen: false,
    setIsCartOpen: (isCartOpen: boolean) => { set(() => ({ isCartOpen })) },
}));