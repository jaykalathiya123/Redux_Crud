import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white p-6 shadow-lg">
      <nav className="flex justify-between items-center max-w-6xl mx-auto">
        <h1 className="text-3xl font-extrabold">
          <Link to="/" className="hover:text-gray-200 transition-colors duration-300">
          👨 Employee Portal
          </Link>
        </h1>

        <ul className="flex space-x-8">
          <li>
            <Link to="/" className="hover:underline hover:text-gray-200 transition duration-200 text-lg">
              Dashboard
            </Link>
          </li>

          <li>
            <Link to="/view-data" className="hover:underline hover:text-gray-200 transition duration-200 text-lg">
              Employee List
            </Link>
          </li>

          <li>
            <Link to="/employeeView/:id" className="hover:underline hover:text-gray-200 transition duration-200 text-lg">
              Employee Details
            </Link>
          </li>
        </ul>
      </nav>
    </header>

  );

};

export default Header;
