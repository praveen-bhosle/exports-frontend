import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createAddress, deleteAddress, editAddress, getAddresses } from "../api/AddressApi";

export const useAddressQueryMutations = () => {  

    const queryClient = useQueryClient() ; 

    const query =  useQuery( { queryKey : ['addresses'] , queryFn : getAddresses  } ) ;  
 
    const editMutation = useMutation(  { mutationFn :  editAddress, onSuccess : () => {  queryClient.invalidateQueries( {  queryKey :  ['addresses' ]  } ) } } ) ; 

    const postMutation = useMutation( { mutationFn : createAddress ,  onSuccess : () => { queryClient.invalidateQueries( { queryKey : ['addresses']    } ) } } )  ; 

    const deleteMutation = useMutation( { mutationFn : deleteAddress ,  onSuccess : () => { queryClient.invalidateQueries( { queryKey : ['addresses']  } ) } } ) ; 

    return { query ,  editMutation , deleteMutation , postMutation } ; 
} 
