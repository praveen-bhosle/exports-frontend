
import type { Order } from "../interfaces/Order";
import { AxiosRequest } from "./AxiosApiHandler";
import toast from "react-hot-toast";

export async function  getUserOrders() { 
    const response = await  AxiosRequest( { url : '/user/order' , method : 'get' }) ; 
    if(response.status === 200) {
         const orders: Order[] = response.data ; 
         return  {success : true , data : orders } } 
    else { toast.error(response.data); return  { success: false  }   } 
 }