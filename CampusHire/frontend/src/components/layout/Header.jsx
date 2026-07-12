import React from "react";
import { NavLink, Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  return (
    <header className="z-50 top-0 relative font-LakesNeueDemiBold">
      <nav
        className={` px-4 lg:px-6 ${
          location.pathname === "/"
            ? "bg-transparent bg-opacity-30 backdrop-blur-md  text-[#EFEDE7]"
            : "bg-[#ffffff] text-black"
        }`}
      >
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <button className="lg:hidden">
            <svg
              width="60px"
              height="60px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 6H20M4 12H20M4 18H20"
                stroke={`${location.pathname === "/" ? "#EFEDE7" : "#000000"}`}
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <Link to="/" className="flex items-center gap-2">
    <img
        src="/logo.png"
        alt="CampusHire Logo"
        className="w-10 h-10"
    />

    <div>
        <h1 className="text-2xl font-bold">CampusHire</h1>
        <p className="text-xs">Smart Campus Placement Portal</p>
    </div>
</Link>
          <div className="hidden lg:flex items-center lg:order-2">
            <a
              href="/login"
              className=" hover:ring-2 hover:ring-[#2A2A2A] focus:bg-[#2A2A2A]  rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Student Login
            </a>
            <a
              href="/register"
              className="text-[#EFEDE7] bg-[#2A2A2A] hover:bg-[#1D4ED8] focus:ring-4 focus:ring-orange-300  rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Register
            </a>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
          >
            <ul className="flex flex-col mt-4  lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b ${
                      isActive ? "text-[#1E3A8A]" : ""
                    } border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#1E3A8A] lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b ${
                      isActive ? "text-[#1E3A8A]" : ""
                    } border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#1E3A8A] lg:p-0`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;