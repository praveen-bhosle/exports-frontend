import { Link } from "react-router-dom"

const MenuBar = () => {
    return (
        <div className='m-4 flex flex-col gap-2 p-4 bg-gray-800 rounded-xl shadow-lg'>
        <Link
            className='block w-full px-4 py-2 hover:bg-gray-700 text-blue-400 font-medium rounded-lg transition-colors'
            to={'/auth/signup'}
        >
            Sign Up
        </Link>
        <Link
            className='block w-full px-4 py-2 hover:bg-gray-700 text-blue-400 font-medium rounded-lg transition-colors'
            to={'/auth/login'}
        >
            Sign In
        </Link>
        <Link
            className='block w-full px-4 py-2 hover:bg-gray-700 text-blue-400 font-medium rounded-lg transition-colors'
            to={''}
        >
            My orders
        </Link>
        <Link
            className='block w-full px-4 py-2 hover:bg-gray-700 text-blue-400 font-medium rounded-lg transition-colors'
            to={''}
        >
            My addresses
        </Link>
    </div>
    )
}

export default MenuBar