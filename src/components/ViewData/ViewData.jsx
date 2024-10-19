import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaTrashAlt, FaEdit, FaEye } from 'react-icons/fa';
import { deleteEmployee } from '../../services/Action/Action';
import { useNavigate } from 'react-router-dom';


const ViewData = () => {
    const { employees, loading } = useSelector(state => state.reduceremployee);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleDelete = (id) => {
        dispatch(deleteEmployee(id));
    };

    const handleEdit = (employee) => {
        navigate(`/Updatedata/${employee.id}`, { state: { employee } });
    };

    const handleView = (employee) => {
        navigate(`/employeeView/${employee.id}`, { state: { employee } });
    };

    if (loading) {
        
        return  <div className="loader "></div>
    }

    return (
        <div className='bg-white p-6 rounded-lg shadow-lg'>
          <h2 className='text-3xl font-bold text-center mb-6 text-gray-700'>Employee Directory</h2>
          <table className='min-w-full bg-gray-50 border border-gray-200'>
            <thead className='bg-purple-700 text-white'>
              <tr>
                <th className='py-3 px-5 border-b'></th>
                <th className='py-3 px-5 border-b'>Name</th>
                <th className='py-3 px-5 border-b'>Email</th>
                <th className='py-3 px-5 border-b'>Phone</th>
                <th className='py-3 px-5 border-b'>Notes</th>
                <th className='py-3 px-5 border-b'>Gender</th>
                <th className='py-3 px-5 border-b'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee, index) => (
                <tr key={employee.id} className='hover:bg-purple-100 transition-colors text-center'>
                  <td className='py-3 px-5 border-b text-center'>{index + 1}</td>
                  <td className='py-3 px-5 border-b'>{employee.name}</td>
                  <td className='py-3 px-5 border-b'>{employee.email}</td>
                  <td className='py-3 px-5 border-b'>{employee.phone}</td>
                  <td className='py-3 px-5 border-b'>{employee.message}</td>
                  <td className='py-3 px-5 border-b'>{employee.gender}</td>
                  <td className='py-3 px-5 border-b flex space-x-3 justify-center'>
                    <button className='bg-green-500 p-2 text-white rounded hover:bg-green-600' onClick={() => handleView(employee)}>
                      <FaEye />
                    </button>
                    <button className='bg-yellow-400 p-2 text-white rounded hover:bg-yellow-500' onClick={() => handleEdit(employee)}>
                      <FaEdit />
                    </button>
                    <button className='bg-red-500 p-2 text-white rounded hover:bg-red-600' onClick={() => handleDelete(employee.id)}>
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      
      
};

export default ViewData;
