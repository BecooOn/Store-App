import React, { useState } from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import { openNavbar, closeNavbar, logoutIcon } from "../helper/icons";
import { useAuthProvider } from "../context/AuthProvider";

const navigation = [
  { title: "Home", path: "/dashboard" },
  { title: "Products", path: "/dashboard/products" },
  { title: "About", path: "/dashboard/about" },
];

const Navbar = () => {
  const [show, setShow] = useState(false);
  const {user} = useAuthProvider();
  return (
    <nav className="bg-[#feae001a] text-lg font-anta border-b-4 border-b-[#FEAF00]">
      <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
        <div className="flex items-center justify-between py-5 md:block">
          <a
            href="https://github.com/BecooOn"
            target="true"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
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
            <button
              className="menu-btn text-gray-500 hover:text-gray-800"
              onClick={() => setShow(!show)}
            >
              {show ? closeNavbar : openNavbar}
            </button>
          </div>
        </div>
        <div className={` ${
            show ? "flex flex-col pb-2" : "hidden"
          } flex-1 items-center mt-8 md:flex md:flex-row md:mt-0`} >
          <ul className="space-y-6 md:flex md:space-x-6 md:space-y-0">
            {navigation.map((item) => (
              <li key={item.title} className="text-gray-700 font-medium text-center">
              <NavLink
                className="block hover:bg-main rounded-full py-2 px-4 hover:text-white "
                to={item.path}
              >
                {item.title}
              </NavLink>
            </li>
            ))}
          </ul>
          <div className="flex-1 flex-col gap-x-6 items-end justify-center mt-6 space-y-6 md:flex md:space-y-0 md:mt-0">
            <p>{user?.email}</p>
            <NavLink
              className="flex items-center justify-center gap-x-1 py-2 px-4 font-medium text-gray-700 hover:bg-main hover:text-white active:bg-gray-900 rounded-full md:inline-flex"
              to="/"
            >
             <p className="text-sm">Logout{logoutIcon}</p> 
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
