import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='flex justify-center items-center h-screen '>
            <div className='py-5'>
                <Link
                    className="bg-gradient-to-r from-teal-500 to-green-400 text-white font-bold py-3 px-6 rounded-full shadow-xl hover:from-green-400 hover:to-teal-500 transform hover:scale-105 transition-all duration-300 ease-out"
                    to="/employeedata"
                >
                    Add Employee
                </Link>
            </div>
        </div>

    )
}

export default Home
