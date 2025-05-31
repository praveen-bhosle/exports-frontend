const SubmitButton = ({ text }: { text: string }) => {
    return (
        <button className='w-[50%] align-center  bg-black font-bold rounded-xl text-white mx-[25%] my-2' type="submit" > {text} </button>
    )
}

export default SubmitButton 
