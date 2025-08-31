import { useState } from "react";
import { FaCode } from "react-icons/fa";
import { getProjectsPaginated } from "@/data/projectsData";
import ProjectContainer from "@/ui_components/ProjectContainer";
import PagePagination from "../ui_components/PagePagination";

const ProjectsPage = () => {
  const [page, setPage] = useState(1);
  const numOfProjectsPerPage = 6;

  // Get all projects with pagination
  const data = getProjectsPaginated(page, numOfProjectsPerPage);
  const projects = data.results;
  const numOfPages = data.total_pages;

  function handleSetPage(val) {
    setPage(val);
  }

  function increasePageValue() {
    if (page < numOfPages) {
      setPage((curr) => curr + 1);
    }
  }

  function decreasePageValue() {
    if (page > 1) {
      setPage((curr) => curr - 1);
    }
  }

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <div className="max-container px-4 mx-auto">
        <div className="min-h-[50vh] flex flex-col md:flex-row">
          {/* Left Side - Header Content */}
          <div className="w-full md:w-1/2 flex items-start justify-center pt-16 md:pt-24 pb-1 md:pb-0 min-h-[25vh] md:min-h-[50vh]">
            <div className="max-w-lg mx-auto text-center">
              {/* Circular Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <FaCode className="text-3xl text-white" />
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                My Projects
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl">
                Explore my portfolio of machine learning, data engineering,
                mobile development, and small ad-hoc python projects all
                featuring modern technologies and innovative solutions. From
                this full-stack web app (evanditter.com) to creative machine
                learning experiments.
              </p>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="w-full md:w-1/2 relative overflow-hidden min-h-[25vh] md:min-h-[50vh]">
            <img
              src="/images/coding_projects_image.jpg"
              alt="Coding Projects"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Projects Section */}
        <div className="max-container px-8 py-16">
          <ProjectContainer
            projects={projects}
            isPending={false}
            isError={false}
            error={null}
          />

          {/* Pagination */}
          {numOfPages > 1 && (
            <div className="mt-12 flex justify-center">
              <PagePagination
                currPage={page}
                numOfPages={numOfPages}
                handleSetPage={handleSetPage}
                increasePageValue={increasePageValue}
                decreasePageValue={decreasePageValue}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
