import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Footer";
import NavBar from "./NavBar";
import ScrollToTop from "./ScrollToTop";

const AppLayout = () => {
  useEffect(function () {
    if (localStorage.getItem("dark") === null) {
      // Check if user prefers dark mode in their system
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      localStorage.setItem("dark", prefersDark ? "true" : "false");
    }
  }, []);

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("dark") === "true"
  );

  const handleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("dark", newDarkMode ? "true" : "false");
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <ScrollToTop />
      <main className="w-full bg-[#ffffff] dark:bg-[#181A2A]">
        <NavBar darkMode={darkMode} handleDarkMode={handleDarkMode} />
        <ToastContainer />
        <Outlet />
        <Footer />
      </main>
    </div>
  );
};

export default AppLayout;
