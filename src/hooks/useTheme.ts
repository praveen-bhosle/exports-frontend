import { useState } from "react";

export function useTheme() { 
const [theme,_] = useState('dark') ;   
return { theme } ; 
}

/* 
 const stored = localStorage.getItem('theme') ; 
    if(stored) return stored ; 

    console.log("running useEffect from  useTheme") ; 
    console.log(theme) ; 


    if(theme==='dark') { 
        console.log(" in if loop")
        root.classList.add('dark') ; 
        console.log(root.classList) ;
    }
    else { 
      console.log("in else loop.")
        root.classList.remove('dark') ;
      console.log(root.classList) ;
    }
    localStorage.setItem('theme' , theme) ;  

const toggleTheme = () => { setTheme( prev => prev === 'light' ? 'dark' : 'light' )  } 

return { theme , toggleTheme } ; 
}


() => {  
    return  window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light' ;   
   }

*/