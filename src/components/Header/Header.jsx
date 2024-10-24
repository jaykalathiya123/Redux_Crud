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
          <li className="">
            <Link to="/" className=" p-4 transition ease-in-out delay-150 rounded-[10px] hover:text-[#000000] hover:bg-[#00e1ff] duration-200 text-lg">
              Dashboard
            </Link>
          </li>

          <li>
            <Link to="/view-data" className=" p-4 transition ease-in-out delay-150 rounded-[10px] hover:text-[#000000] hover:bg-[#ff6600] duration-200 text-lg">
              Employee List
            </Link>
          </li>

          <li>
            <Link to="/employeeView/:id" className=" p-4 transition ease-in-out delay-150 rounded-[10px] hover:text-[#000000] hover:bg-[#48ff00] duration-200 text-lg">
              Employee Details
            </Link>
          </li>
        </ul>
      </nav>
    </header>

  );

};

export default Header;
