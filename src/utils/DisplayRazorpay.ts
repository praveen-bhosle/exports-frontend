import toast from "react-hot-toast";
import { LoadScript } from "./LoadScript";


import { AxiosRequest } from "../api/AxiosApiHandler" ; 


export async function  DisplayRazorpay({amount , name , email  , phone   } : { amount : number , name : string  , email : string  , phone : string  } ) { 
 
   
    const toastId =  toast.loading("creating order.") ; 

    const res = await LoadScript("https://checkout.razorpay.com/v1/checkout.js") ; 
    console.log(res) ; 

    if(!res) { toast.dismiss(toastId) ; toast.error("Failure in loading sdk") ; return  ;  }
    
    const result = await  AxiosRequest( { url :  `user/payment/create-order?amount=${1}` , method : 'post' } ) ;  

    console.log(result.data) ; 

    if(result.status !== 201 ) { toast.dismiss(toastId) ;   toast.error("Error while creating order.") ; return   ;  }

    toast.dismiss(toastId)  ; 
    toast.success("Order created with unpaid status.Pay the amount now.")  ;

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
            const result = await AxiosRequest({ url  : `user/payment/payment-callback?orderId=${order_id}` , method : 'post' , body : data   })  ;  
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

     return true ; 




 }