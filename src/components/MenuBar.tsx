import { Link } from "react-router-dom"

const MenuBar = () => {
    return (
        <div className='m-2'>
            <Link
                className='block w-[90vw] px-2 py-1  hover:bg-custom-hover text-custom-subheading my-2 rounded-md'
                to={'/auth/signup'}
            >
                Sign Up
            </Link>
            <Link
                className='block w-[90vw] px-2 py-1 hover:bg-custom-hover text-custom-subheading my-2  rounded-md'
                to={'/auth/signin'}
            >
                Sign In
            </Link>
            <Link
                className='block w-[90vw] px-2 py-1 hover:bg-custom-hover text-custom-subheading my-2  rounded-md'
                to={''}
            >
                My orders
            </Link>
            <Link
                className='block w-[90vw] px-2 py-1 hover:bg-custom-hover text-custom-subheading my-2  rounded-md'
                to={''}
            >
                My addresses
            </Link>
        </div>
    )
}

export default MenuBar