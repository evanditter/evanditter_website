import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-[#F6F6F7] px-8 py-16 dark:bg-[#141624]">
      <div className="max-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16 max-md:justify-center max-md:text-center">
          <div className="flex flex-col gap-6 max-md:items-center">
            <h1 className="text-[#141624] text-2xl dark:text-[#FFFFFF] ">
              Evan Ditter
            </h1>

            <p className="text-[14px] text-[#696A75] leading-[1.5] max-md:text-center dark:text-[#97989F]">
              I am a Machine Learning Engineer passionate about creating
              innovative solutions that bridge the gap between complex data
              science concepts and practical business applications. With
              expertise in Data Engineering and AI/ML technologies, I help
              organizations leverage data-driven insights to solve real-world
              problems.
            </p>
          </div>

          <div className="text-[#181A2A] text-[14px] flex flex-col gap-4 max-md:items-center">
            <p className=" font-semibold text-[16px] dark:text-white">
              Quick Links
            </p>
            <ul className="flex flex-col gap-4  text-[#3B3C4A] max-md:items-center dark:text-[#97989F]">
              <li>
                <NavLink
                  to="/"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/courses"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Courses
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/tutoring"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Tutoring
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="text-[#181A2A] text-[14px] flex flex-col gap-4 max-md:items-center">
            <p className=" font-semibold text-[16px] dark:text-white">Skills</p>
            <ul className="flex flex-col gap-4  text-[#3B3C4A] max-md:items-center dark:text-[#97989F]">
              <li>Machine Learning</li>
              <li>Data Engineering</li>
              <li>Python Programming</li>
              <li>Web Development</li>
              <li>Cloud Computing</li>
              <li>Data Analysis</li>
            </ul>
          </div>
        </div>

        <div className="py-3 flex items-center gap-6 max-md:mt-6 max-md:justify-center">
          <a
            href="https://www.instagram.com/evan_ditter/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <FaInstagram className="dark:text-white text-[20px] text-[#141624] hover:text-pink-500 dark:hover:text-pink-400 transition-colors cursor-pointer" />
          </a>
          <a
            href="https://linkedin.com/in/evanditter"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <FaLinkedinIn className="dark:text-white text-[20px] text-[#141624] hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer" />
          </a>
          <a
            href="https://github.com/evanditter"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <FaGithub className="dark:text-white text-[20px] text-[#141624] hover:text-gray-600 dark:hover:text-gray-300 transition-colors cursor-pointer" />
          </a>
          <a
            href="https://x.com/evan_ditter"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <BsTwitterX className="dark:text-white text-[20px] text-[#141624] hover:text-gray-600 dark:hover:text-gray-300 transition-colors cursor-pointer" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCM5-xsHpRdOc88n9WKCKxqg"
            target="_blank"
            rel="noopener noreferrer"
            title="YouTube"
          >
            <FaYoutube className="dark:text-white text-[20px] text-[#141624] hover:text-red-600 dark:hover:text-red-400 transition-colors cursor-pointer" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
