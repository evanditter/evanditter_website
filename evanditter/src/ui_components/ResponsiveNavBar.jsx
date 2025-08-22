import { NavLink } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";

const ResponsiveNavBar = ({ darkMode, handleDarkMode }) => {
  return (
    <nav className="max-container px-8 py-6 max-md:block hidden dark:text-[#FFFFFF]">
      <ul className="flex items-center justify-center gap-6 text-[#3B3C4A] lg:flex-1 flex-col dark:text-[#FFFFFF]">
        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) => `px-4 py-2 rounded-lg transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 hover:shadow-lg border border-transparent hover:border-gray-200 dark:hover:border-gray-700 ${isActive ? "active" : ""}`}
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/courses"
            className={({ isActive }) => `px-4 py-2 rounded-lg transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 hover:shadow-lg border border-transparent hover:border-gray-200 dark:hover:border-gray-700 ${isActive ? "active" : ""}`}
          >
            Courses
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/tutoring"
            className={({ isActive }) => `px-4 py-2 rounded-lg transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 hover:shadow-lg border border-transparent hover:border-gray-200 dark:hover:border-gray-700 ${isActive ? "active" : ""}`}
          >
            Tutoring
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => `px-4 py-2 rounded-lg transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 hover:shadow-lg border border-transparent hover:border-gray-200 dark:hover:border-gray-700 ${isActive ? "active" : ""}`}
          >
            Contact
          </NavLink>
        </li>
        
        {/* Theme Toggle for Mobile */}
        <li className="mt-6">
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => darkMode && handleDarkMode()}
              className={`p-3 rounded-lg transition-all duration-200 border hover:shadow-lg ${
                !darkMode 
                  ? "text-yellow-500 bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-700" 
                  : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 border-transparent hover:border-gray-200 dark:hover:border-gray-700"
              }`}
              title="Switch to Light Mode"
            >
              <FaSun className="text-xl" />
            </button>
            
            <button
              onClick={() => !darkMode && handleDarkMode()}
              className={`p-3 rounded-lg transition-all duration-200 border hover:shadow-lg ${
                darkMode 
                  ? "text-blue-400 bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-700" 
                  : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 border-transparent hover:border-gray-200 dark:hover:border-gray-700"
              }`}
              title="Switch to Dark Mode"
            >
              <FaMoon className="text-xl" />
            </button>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default ResponsiveNavBar;
