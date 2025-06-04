export const CheckLogged = () => { 
    const username = localStorage.getItem('YKDUsername') ; 
    return  { username } ; 
}