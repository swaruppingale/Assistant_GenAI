import React from "react";
import { Link } from "react-router-dom";
import svg from "../assets/react.svg";

const Navbar = () => {
  return (
    <nav className="navbar text-white">
      <div className="bg-black border-b-2 border-gray-700">
        <div className="max-w-screen-3xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              CodeCatalyst
            </span>
          </Link>
          <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="user-dropdown"
              data-dropdown-placement="bottom"
            >
              <span className="sr-only">Open user menu</span>
              <img
                className="w-8 h-8 rounded-full"
                src={svg}
                referrerPolicy="no-referrer"
                alt="Name"
              />
            </button>
            <div
              className="z-50 hidden my-4 text-base list-none bg-black divide-y divide-gray-100 rounded-lg shadow dark:divide-gray-600"
              id="user-dropdown"
            >
              <div className="px-4 py-3">
                <span className="block text-sm text-white">Name</span>
                <span className="block text-sm text-gray-400 truncate">test123@test.com</span>
              </div>
              <ul className="py-2" aria-labelledby="user-menu-button">
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800"
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800"
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800"
                  >
                    Earnings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800"
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-user"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 md:mt-0 md:flex-row md:border-0">
              <li>
                <Link to="/" className="block py-2 px-3 text-white hover:bg-gray-700">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/search" className="block py-2 px-3 text-white hover:bg-gray-700">
                  Search
                </Link>
              </li>
              <li>
                <Link to="/docs" className="block py-2 px-3 text-white hover:bg-gray-700">
                  Docs
                </Link>
              </li>
              <li>
                <Link to="/prediction" className="block py-2 px-3 text-white hover:bg-gray-700">
                  Prediction
                </Link>
              </li>
              <li>
                <Link to="/contact" className="block py-2 px-3 text-white hover:bg-gray-700">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

