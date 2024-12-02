import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { role_data } from '../store/Roles'
import { useAtom } from 'jotai'
import { user_data } from '../store/User_data'
import { logged_in_status } from '../store/Logged_in_data'
const Navbar: React.FC = () => {

// state declaration    
const [currentRole, setRole] = useAtom(role_data)
const [current_User, setUser] = useAtom(user_data)
const [isLoggedIn, setIsLoggedIn] = useAtom(logged_in_status)  
const [isOpen, setIsOpen] = useState(false);
console.log(current_User);

// function declaration
const Logout_button_handler = ()=>{
    if (isLoggedIn){
      setIsLoggedIn(false)
      setRole('')
      setUser('')
    }
  }

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            {isLoggedIn && (
              <>
              <a href="/" className="flex items-center py-4 px-2">
                <span className="font-semibold text-gray-500 text-lg mr-5">Username</span>
                <span className="font-semibold text-gray-500 text-lg">{current_User.toUpperCase()}</span>
              </a>
            </>
            )}
          </div>
          <div className="hidden md:flex items-center space-x-1">
            <a href="/" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Home</a>
            <a href="/about" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">About</a>
            <a href="/services" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Services</a>
            {isLoggedIn && currentRole === "admin" && (
                <>
                <a href="" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Dashboard</a>
                <button onClick={Logout_button_handler} className='border rounded-xl px-14 py-1 font-semibold hover:bg-black hover:text-white'>LOGOUT</button>
                </>
            )}
            {isLoggedIn && currentRole!= "admin" && (
                <>
                {/* <a href="" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Dashboard</a> */}
                <button onClick={Logout_button_handler} className='border rounded-xl px-14 py-1 font-semibold hover:bg-black hover:text-white'>LOGOUT</button>
                </>
            )}

          </div>
          <div className="md:hidden flex items-center">
            <button className="outline-none mobile-menu-button" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6 text-gray-500" /> : <Menu className="h-6 w-6 text-gray-500" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="mobile-menu md:hidden">
          <a href="/" className="block py-2 px-4 text-sm hover:bg-gray-200">Home</a>
          <a href="/about" className="block py-2 px-4 text-sm hover:bg-gray-200">About</a>
          <a href="/services" className="block py-2 px-4 text-sm hover:bg-gray-200">Services</a>
          <a href="/contact" className="block py-2 px-4 text-sm hover:bg-gray-200">Contact</a>
          <a href="" className="block py-2 px-4 text-sm hover:bg-gray-200">{current_User.toLocaleUpperCase()}</a>
          <button onClick={Logout_button_handler} className='border rounded-xl px-5 py-1 font-semibold hover:bg-black hover:text-white mt-2 mb-4'>LOGOUT</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

