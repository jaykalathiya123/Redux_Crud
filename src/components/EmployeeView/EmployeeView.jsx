import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const EmployeeView = () => {
  const { state } = useLocation();
  const [employee, setEmployee] = useState(state?.employee);

  useEffect(() => {
    setEmployee(state?.employee);
  }, [state]);

  if (!employee) {
    return <div>No employee data available</div>;
  }

  return (
<div className="flex justify-center items-center h-screen bg-gradient-to-r from-gray-200 to-gray-400">
  <div className='bg-blue-100 p-6 rounded-lg shadow-lg inline-block'>
    <h2 className='text-2xl font-bold mb-4 text-blue-800'>Name: {employee.name}</h2>
    <p className="text-blue-700"><strong>Email:</strong> {employee.email}</p>
    <p className="text-blue-700"><strong>Phone:</strong> {employee.phone}</p>
    <p className="text-blue-700"><strong>Message:</strong> {employee.message}</p>
    <p className="text-blue-700"><strong>Gender:</strong> {employee.gender}</p>
  </div>
</div>

  );
};

export default EmployeeView;
