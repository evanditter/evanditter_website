import { Link } from "react-router-dom";
import { BASE_URL } from "@/api";
import { FaTwitter } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  return (
    <Link to={`/projects/${project.slug}`} className="block w-full">
      <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-6 rounded-lg shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-blue-400/20 hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 w-full h-[500px] flex flex-col gap-4 cursor-pointer">
        <div className="w-full h-[200px] rounded-md overflow-hidden relative flex-shrink-0">
          {/* Custom full-area brand display for projects with project_icon */}
          {project.project_icon && project.project_brand ? (
            <div className="w-full h-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
              <div className="text-white flex items-center gap-3">
                <img
                  src={project.project_icon}
                  alt={project.project_brand}
                  className="w-12 h-12"
                />
                <span className="text-2xl font-bold">
                  {project.project_brand}
                </span>
              </div>
            </div>
          ) : project.project_dual_logos ? (
            /* Dual logos with specific sizing per project */
            <div className="w-full h-full bg-gray-50 dark:bg-gray-700 flex">
              <div className="w-1/2 h-full flex items-center justify-center px-2">
                <img
                  src={project.project_dual_logos.left}
                  alt="Left Logo"
                  className={
                    project.project_dual_logos.left.includes('nba_logo') 
                      ? "max-w-[130%] max-h-[130%] object-contain" 
                      : "max-w-[108%] max-h-[108%] object-contain"
                  }
                />
              </div>
              <div className="w-1/2 h-full flex items-center justify-center px-2">
                <img
                  src={project.project_dual_logos.right}
                  alt="Right Logo"
                  className={
                    project.project_dual_logos.right.includes('databricks_logo') 
                      ? "max-w-[90%] max-h-[90%] object-contain" 
                      : "max-w-[72%] max-h-[72%] object-contain"
                  }
                />
              </div>
            </div>
          ) : project.project_icon_fa ? (
            /* FontAwesome icon display */
            <div className="w-full h-full bg-gray-50 dark:bg-gray-700 flex items-center justify-center">
              {project.project_icon_fa === "FaTwitter" && (
                <FaTwitter className="w-24 h-24 text-blue-500" />
              )}
            </div>
          ) : project.project_logo ? (
            /* Logo on blank background with project-specific sizing */
            <div className="w-full h-full bg-gray-50 dark:bg-gray-700 flex items-center justify-center">
              <img
                src={project.project_logo}
                alt={project.title}
                className={
                  project.title.toLowerCase().includes("python") ||
                  project.slug === "python_projects"
                    ? "w-40 h-40 object-contain" 
                    : "max-w-[170%] max-h-[170%] object-contain"
                }
              />
            </div>
          ) : (
            <img
              src={
                project.featured_image
                  ? `${BASE_URL}${project.featured_image}`
                  : "/placeholder-project.jpg"
              }
              className="w-full h-full object-cover rounded-lg"
              alt={project.title}
            />
          )}
        </div>

        <div className="flex gap-2 flex-wrap flex-shrink-0">
          <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs">
            {project.category}
          </span>
          <span
            className={`px-2 py-1 rounded text-xs ${
              project.status === "Completed"
                ? "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200"
                : project.status === "In Progress"
                ? "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200"
                : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            }`}
          >
            {project.status}
          </span>
          {project.is_featured && (
            <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded text-xs">
              Featured
            </span>
          )}
        </div>

        <h3 className="font-semibold leading-normal text-[#181A2A] mb-0 dark:text-white flex-shrink-0">
          {project.title}
        </h3>

        <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-4 flex-grow">
          {project.short_description}
        </p>

        <div className="flex gap-2 mt-auto" onClick={(e) => e.preventDefault()}>
          {project.github_url && (
            <a
              href={project.github_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-3 py-2 text-center bg-gray-800 dark:bg-gray-700 text-white rounded hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors text-sm"
              onClick={(e) => e.stopPropagation()}
            >
              Code
            </a>
          )}
          {project.live_demo_url && (
            <a
              href={project.live_demo_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-3 py-2 text-center bg-blue-600 dark:bg-blue-700 text-white rounded hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors text-sm"
              onClick={(e) => e.stopPropagation()}
            >
              Demo
            </a>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
