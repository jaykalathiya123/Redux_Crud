import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate,} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateEmployee } from '../../services/Action/Action';
const Update = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const employee = location.state?.employee;
    const dispatch = useDispatch(); 

    const [updateInput, setUpdateInput] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        gender:"",
    });

    useEffect(() => {
       
            setUpdateInput(employee);
        
    }, [employee]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdateInput((prevInput) => ({
            ...prevInput,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateEmployee(updateInput)); 
        navigate('/view-data');
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-200 to-blue-500">
            <form
                className="bg-white p-10 rounded-lg shadow-lg w-full max-w-lg"
                onSubmit={handleSubmit}
            >
                <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Employee Details</h2>
    
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4">
                    <div>
                        <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="name">Full Name</label>
                        <input
                            className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400 hover:border-blue-500 transition duration-200"
                            type="text"
                            id="name"
                            name="name"
                            value={updateInput.name}
                            onChange={handleChange}
                            placeholder="Enter Your Name"
                            required
                        />
                    </div>
    
                    <div>
                        <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">Work Email</label>
                        <input
                            className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400 hover:border-blue-500 transition duration-200"
                            type="email"
                            id="email"
                            name="email"
                            value={updateInput.email}
                            onChange={handleChange}
                            placeholder="Enter Your Email"
                            required
                        />
                    </div>
                </div>
    
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4">
                    <div>
                        <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="phone">Contact Number</label>
                        <input
                            className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400 hover:border-blue-500 transition duration-200"
                            type="tel"
                            id="phone"
                            name="phone"
                            value={updateInput.phone}
                            onChange={handleChange}
                            placeholder="(123) 456-7890"
                            required
                        />
                    </div>
    
                    <div>
                        <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="gender">Gender</label>
                        <select
                            className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400 hover:border-blue-500 transition duration-200"
                            id="gender"
                            name="gender"
                            value={updateInput.gender}
                            onChange={handleChange}
                            required
                        >
                            <option value="" disabled>Select gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                </div>
    
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="message">Additional Notes</label>
                    <textarea
                        className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400 hover:border-blue-500 transition duration-200"
                        id="message"
                        name="message"
                        value={updateInput.message}
                        onChange={handleChange}
                        placeholder="Any additional comments or information"
                        rows="4"
                        required
                    ></textarea>
                </div>
    
                <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Update;
