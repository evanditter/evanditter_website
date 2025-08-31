import { FaSun, FaMoon, FaBars } from "react-icons/fa";
import ResponsiveNavBar from "./ResponsiveNavBar";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
// import evanditterIcon from "../images/evanditter_icon.png"; // No longer needed, use public path

const NavBar = ({ darkMode, handleDarkMode }) => {
  const [showNavBar, setShowNavBar] = useState(false);

  return (
    <>
      <nav className="w-full px-4 py-6 sticky top-0 z-10 bg-[#FFFFFF] dark:bg-[#141624]">
        <div className="max-container flex justify-between items-center gap-6">
          <Link
            to="/"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl border border-blue-500 dark:border-purple-500 flex items-center gap-2"
          >
            <img src={evanditterIcon} alt="Evan Ditter" className="w-6 h-6" />
            Evan Ditter
          </Link>

        <ul className="flex items-center justify-end gap-2 text-[#3B3C4A] lg:flex-1 max-md:hidden dark:text-[#FFFFFF]">
          <li className="relative group">
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `px-3 py-2 rounded-lg transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 hover:shadow-lg border border-transparent hover:border-gray-200 dark:hover:border-gray-700 relative ${
                  isActive ? "bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent font-semibold" : ""
                }`
              }
            >
              {({ isActive }) => (
                <>
                  Projects
                  {isActive && (
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-md"></div>
                  )}
                  {!isActive && (
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                  )}
                </>
              )}
            </NavLink>
          </li>
          <li className="relative group">
            <NavLink
              to="/courses"
              className={({ isActive }) =>
                `px-3 py-2 rounded-lg transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 hover:shadow-lg border border-transparent hover:border-gray-200 dark:hover:border-gray-700 relative ${
                  isActive ? "bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent font-semibold" : ""
                }`
              }
            >
              {({ isActive }) => (
                <>
                  Courses
                  {isActive && (
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-md"></div>
                  )}
                  {!isActive && (
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                  )}
                </>
              )}
            </NavLink>
          </li>
          <li className="relative group">
            <NavLink
              to="/tutoring"
              className={({ isActive }) =>
                `px-3 py-2 rounded-lg transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 hover:shadow-lg border border-transparent hover:border-gray-200 dark:hover:border-gray-700 relative ${
                  isActive ? "bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent font-semibold" : ""
                }`
              }
            >
              {({ isActive }) => (
                <>
                  Tutoring
                  {isActive && (
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-md"></div>
                  )}
                  {!isActive && (
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                  )}
                </>
              )}
            </NavLink>
          </li>
          <li className="relative group">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `px-3 py-2 rounded-lg transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 hover:shadow-lg border border-transparent hover:border-gray-200 dark:hover:border-gray-700 relative ${
                  isActive ? "bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent font-semibold" : ""
                }`
              }
            >
              {({ isActive }) => (
                <>
                  Contact
                  {isActive && (
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-md"></div>
                  )}
                  {!isActive && (
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                  )}
                </>
              )}
            </NavLink>
          </li>
        </ul>

        {/* Theme Toggle Icons */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => darkMode && handleDarkMode()}
            className={`p-2 rounded-lg transition-all duration-200 border hover:shadow-lg ${
              !darkMode
                ? "text-yellow-500 bg-yellow-50 dark:bg-yellow-900/20 hover:bg-yellow-100 dark:hover:bg-yellow-900/30 border-yellow-200 dark:border-yellow-700"
                : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 border-transparent hover:border-gray-200 dark:hover:border-gray-700"
            }`}
            title="Switch to Light Mode"
          >
            <FaSun className="text-lg" />
          </button>

          <button
            onClick={() => !darkMode && handleDarkMode()}
            className={`p-2 rounded-lg transition-all duration-200 border hover:shadow-lg ${
              darkMode
                ? "text-blue-400 bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 border-blue-200 dark:border-blue-700"
                : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 border-transparent hover:border-gray-200 dark:hover:border-gray-700"
            }`}
            title="Switch to Dark Mode"
          >
            <FaMoon className="text-lg" />
          </button>
        </div>

        <FaBars
          className="text-4xl cursor-pointer hidden max-md:block dark:text-white p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 hover:shadow-lg border border-transparent hover:border-gray-200 dark:hover:border-gray-700"
          onClick={() => setShowNavBar((curr) => !curr)}
        />
        </div>
      </nav>

      {showNavBar && (
        <ResponsiveNavBar darkMode={darkMode} handleDarkMode={handleDarkMode} />
      )}
    </>
  );
};

export default NavBar;
