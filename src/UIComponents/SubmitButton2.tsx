const SubmitButton2 = (  {  text   } : { text: string  } ) => {
    return (
        <button className=' w-[100%] bg-black dark:bg-white font-bold rounded-md text-white dark:text-black mt-4 mb-2 cursor-pointer'  type='submit' >  { text }  </button> 
    )
}

export default SubmitButton2