"use client";
import React, {useState} from 'react';
import { IoIosClose } from "react-icons/io";
import {
    FaBars,
  } from 'react-icons/fa';

const NavBar = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
    setNav(!nav);
    };


    return (
        <nav className="fixed z-50 w-full">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex items-center justify-between h-16 hidden md:flex">
                <a href="https://www.linkedin.com/in/bnance1/" target="_blank" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-green">Brandon Nance</span>
                </a>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
                    <li>
                    <a href="#" className="block py-2 px-3 text-white  rounded md:bg-transparent  md:p-0 dark:text-white md:hover:text-green" aria-current="page">Home</a>
                    </li>
                    <li>
                    <a href="#Projects" className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green md:p-0 dark:text-white md:dark:hover:text-green dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Projects</a>
                    </li>
                    <li>
                    <a href="#Designs" className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green md:p-0 dark:text-white md:dark:hover:text-green dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Designs</a>
                    </li>
                    <li>
                    <a href="#Contact" className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green md:p-0 dark:text-white md:dark:hover:text-green dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
                    </li>
                </ul>
                </div>
                </div>
            </div>
            <div onClick={handleNav} className="md:hidden z-20">
            <FaBars size={40} className="mr-4 cursor-ponter pl-2 pt-4" />
        </div>
        {/* Mobile Menu */}
        <div 
            className={
                nav 
                ? "overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex flex-col" 
                : "absolute top-0 h-screen left-[-100%] ease-in"
            }
        >
          { nav &&
            <div
              className="hidden max-lg:block fixed right-0  px-8 py-4 cursor-pointer"
              onClick={() => {
                setNav(!nav);
              }}
            >
              <IoIosClose className="text-4xl md:hidden" />
            </div>
          }
            <ul className="h-full w-full text-center pt-12">
                <li className='text-2xl py-8'>
                <a href='#' onClick={handleNav}>Home</a>
                </li>
                <li className='text-2xl py-8'>
                    <a href='#Projects' onClick={handleNav}>Projects</a>
                </li>
                <li className='text-2xl py-8'>
                    <a href='#Designs' onClick={handleNav}>Designs</a>
                </li>
                <li className='text-2xl py-8'>
                    <a href='#Contact' onClick={handleNav}>Contact</a>
                </li>
            </ul>
                
        </div>
        </nav>
    )
}

export default NavBar;
