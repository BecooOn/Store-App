import React from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="bg-navbarColor md:text-sm">
      <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
        <div className="flex items-center justify-between py-5 md:block">
          <a
            href="https://github.com/BecooOn"
            target="true"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <img
              src={logo}
              width={50}
              height={50}
              alt="Clarusway"
              className=" rounded-full"
            />
            <span className="text-gray-700 hover:text-gray-900 font-medium">
              BecooOn
            </span>
          </a>
          <div className="md:hidden">
            <button className="menu-btn text-gray-500 hover:text-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex-1 items-center md:flex md:flex-row hidden mt-8 md:mt-0 ">
          <ul className="space-y-6 md:flex md:space-x-6 md:space-y-0">
            <li className="text-gray-700 font-medium">
              <NavLink
                to="/dashboard"
                aria-current="page"
                className="block hover:bg-main rounded-full py-2 px-4 hover:text-white"
              >
                Home
              </NavLink>
            </li>
            <li className="text-gray-700 font-medium">
              <NavLink
                className="block hover:bg-main rounded-full py-2 px-4 hover:text-white "
                to="/dashboard/products"
              >
                Products
              </NavLink>
            </li>
            <li className="text-gray-700 font-medium">
              <NavLink
                className="block hover:bg-main rounded-full py-2 px-4 hover:text-white "
                to="/dashboard/about"
              >
                About
              </NavLink>
            </li>
          </ul>
          <div className="flex-1 gap-x-6 items-center justify-end mt-6 space-y-6 md:flex md:space-y-0 md:mt-0">
            <NavLink
              className="flex items-center justify-center gap-x-1 py-2 px-4 font-medium text-gray-700 hover:bg-main hover:text-white active:bg-gray-900 rounded-full md:inline-flex"
              to="/"
            >
              Logout
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={17}
                height={17}
                viewBox="0 0 17 17"
                fill="currentColor"
              >
                <path
                  d="M5.3125 7.2084C5.3125 6.91621 5.55156 6.67715 5.84375 6.67715H10.625V3.55937C10.625 3.32363 10.9105 3.2041 11.0766 3.37012L15.7781 8.12148C15.9873 8.33066 15.9873 8.66602 15.7781 8.8752L11.0766 13.6266C10.9105 13.7926 10.625 13.6764 10.625 13.4373V10.3195H5.84375C5.55156 10.3195 5.3125 10.0805 5.3125 9.78828V7.2084ZM4.25 7.2084V9.78828C4.25 10.6682 4.96387 11.382 5.84375 11.382H9.5625V13.4373C9.5625 14.616 10.9902 15.2137 11.827 14.377L16.5318 9.62891C17.1561 9.00469 17.1561 7.99531 16.5318 7.37109L11.827 2.61973C10.9936 1.78633 9.5625 2.37734 9.5625 3.55937V5.61465H5.84375C4.96387 5.61465 4.25 6.33184 4.25 7.2084ZM0 3.71875V13.2812C0 14.1611 0.713867 14.875 1.59375 14.875H5.97656C6.1957 14.875 6.375 14.6957 6.375 14.4766V14.2109C6.375 13.9918 6.1957 13.8125 5.97656 13.8125H1.59375C1.30156 13.8125 1.0625 13.5734 1.0625 13.2812V3.71875C1.0625 3.42656 1.30156 3.1875 1.59375 3.1875H5.97656C6.1957 3.1875 6.375 3.0082 6.375 2.78906V2.52344C6.375 2.3043 6.1957 2.125 5.97656 2.125H1.59375C0.713867 2.125 0 2.83887 0 3.71875Z"
                  fill="currentColor"
                ></path>
              </svg>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
