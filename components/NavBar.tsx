import React from 'react';

const NavBar = () => {
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
        </nav>
    )
}

export default NavBar;
