import toast from "react-hot-toast";
import { LoadScript } from "./LoadScript";

import axios from "axios"; 
import type { CartItem } from "../interfaces/CartItem";


export async function  DisplayRazorpay({amount , name , email  , phone , items   } : { amount : number , name : string  , email : string  , phone : string , items : CartItem[]  } ) { 
    const res = await LoadScript("https://checkout.razorpay.com/v1/checkout.js") ; 
    console.log(res) ; 

    if(!res) { toast.error("Failure in loading sdk") ; return  ;  }
    
    const result = await axios.post(`http://localhost:5000/api/public/payment/create-order?amount=${amount}`) ;

    if(!result) { toast.error("server side error") ; return   ;  }

    const { id : order_id} = result.data ; 

    console.log(result.data) ;  
    const options = { 
        key: "rzp_test_ehxRg1TmkA0kFi" , 
        "amount": amount * 100  , 
        "currency": "INR",
        "name": "YKDevout Exports", 
        "description": "Test Transaction",
        "order_id": order_id ,
        "handler": async function (response:any){
            const data = { razorpay_payment_id :  response.razorpay_payment_id ,razorpay_order_id :  response.razorpay_order_id ,razorpay_signatue :  response.razorpay_signature } ; 
            const result = await axios.post( "http://localhost:5000/api/user/payment/payment-callback" , data ) ; 
            toast.success(result.data) ; 
        },
        "prefill": {
            "name": name , 
            "email": email , 
            "contact": phone  
        },
        "notes": {
            "address": "Razorpay Corporate Office"
        },
        "theme": {
            "color": "#3399cc"
        }
     }

     //@ts-ignore
     const paymentObject = new window.Razorpay(options) ; 
     paymentObject.open() ;  


 }