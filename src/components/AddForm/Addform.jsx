import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { async } from '../../services/Action/Action';
import { useNavigate } from 'react-router-dom';

const EmployeeForm = () => {
    const [formInput, setFormInput] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        gender:"",
    });

    const dispatch = useDispatch();

    const navigate = useNavigate() ;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormInput((prevInput) => ({
            ...prevInput,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitting form with data:", formInput);

       
    dispatch(async(formInput));

        navigate('/view-data');

        setFormInput({
            name: '',
            email: '',
            phone: '',
            message: '',
            gender:'',
        });
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
                            value={formInput.name}
                            onChange={handleChange}
                            placeholder="John Doe"
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
                            value={formInput.email}
                            onChange={handleChange}
                            placeholder="john.doe@company.com"
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
                            value={formInput.phone}
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
                            value={formInput.gender}
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
                        value={formInput.message}
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

export default EmployeeForm;
 