import { useStore } from "../state/Store"

const Input = ({ id, placeholder }: { id: string, placeholder?: string }) => {
    const { user } = useStore();

    return (
        <div className='flex justify-between  gap-4'>
            <label htmlFor={id}> {id} </label>
            <input type='text' id={id} required className='text-sm px-2 outline-none text-right  bg-[#E9EAF2]' placeholder={placeholder} />
        </div>
    )
}

export default Input