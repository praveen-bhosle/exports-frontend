import z  from "zod/v4" 

const validateEmail = ( email:string ) => {    
    try { 
    const schema = z.email() ; 
    schema.parse(email) ; 
    return   true ; 
    } 
    catch(e) {  
        if( e instanceof  z.ZodError) {   
            return  false ; 
        }
    } 
}


 export default validateEmail ;