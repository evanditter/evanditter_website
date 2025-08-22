import { useParams } from "react-router-dom";
import { getProjectBySlug } from "@/data/projectsData";
import { FaGithub, FaExternalLinkAlt, FaCalendarAlt, FaTag, FaCode } from "react-icons/fa";

const ProjectDetailPage = () => {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <div className="max-container px-8 py-16 text-center">
        <h2 className="text-2xl font-semibold text-red-600">Project not found</h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2">The project you're looking for doesn't exist.</p>
      </div>
    );
  }

  return (
    <div className="max-container px-8 py-9">
      {/* Project Header */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
            <FaTag className="inline mr-1" />
            {project.category}
          </span>
          <span className={`px-3 py-1 rounded-full text-sm ${
            project.status === 'Completed' 
              ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
              : project.status === 'In Progress'
              ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200'
              : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
          }`}>
            {project.status}
          </span>
          {project.is_featured && (
            <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">
              Featured
            </span>
          )}
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-[#181A2A] dark:text-white mb-4">
          {project.title}
        </h1>

        <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 mb-6">
          <div className="flex items-center gap-1">
            <FaCalendarAlt />
            <span>Created: {new Date(project.created_at).toLocaleDateString()}</span>
          </div>
          {project.updated_at !== project.created_at && (
            <div className="flex items-center gap-1">
              <span>Updated: {new Date(project.updated_at).toLocaleDateString()}</span>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 mb-8">
          {project.github_url && (
            <a
              href={project.github_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
            >
              <FaGithub />
              View Code
            </a>
          )}
          {project.live_demo_url && (
            <a
              href={project.live_demo_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 dark:bg-blue-700 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
            >
              <FaExternalLinkAlt />
              Live Demo
            </a>
          )}
        </div>
      </div>

      {/* Project Links */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-semibold text-[#181A2A] dark:text-white mb-4">
              Project Description
            </h2>
            <div 
              className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300"
              dangerouslySetInnerHTML={{ __html: project.description.replace(/\n/g, '<br>') }}
            />
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Technologies */}
          {project.technologies_list && project.technologies_list.length > 0 && (
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-[#181A2A] dark:text-white mb-4 flex items-center gap-2">
                <FaCode />
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies_list.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Project Info */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold text-[#181A2A] dark:text-white mb-4">
              Project Info
            </h3>
            <div className="space-y-3">
              <div>
                <span className="font-medium text-gray-700 dark:text-gray-300">Category:</span>
                <span className="ml-2 text-gray-600 dark:text-gray-400">{project.category}</span>
              </div>
              <div>
                <span className="font-medium text-gray-700 dark:text-gray-300">Status:</span>
                <span className="ml-2 text-gray-600 dark:text-gray-400">{project.status}</span>
              </div>
              <div>
                <span className="font-medium text-gray-700 dark:text-gray-300">Created:</span>
                <span className="ml-2 text-gray-600 dark:text-gray-400">
                  {new Date(project.created_at).toLocaleDateString()}
                </span>
              </div>
              {project.updated_at !== project.created_at && (
                <div>
                  <span className="font-medium text-gray-700 dark:text-gray-300">Last Updated:</span>
                  <span className="ml-2 text-gray-600 dark:text-gray-400">
                    {new Date(project.updated_at).toLocaleDateString()}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
