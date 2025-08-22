import ProjectCard from "./ProjectCard";
import Spinner from "./Spinner";

const ProjectContainer = ({ isPending, projects }) => {
  if (isPending) {
    return <Spinner />;
  }

  if (!projects || projects.length === 0) {
    return (
      <div className="max-container px-8 py-12 text-center">
        <h2 className="text-2xl font-semibold text-gray-600 dark:text-gray-400">
          No projects found
        </h2>
        <p className="text-gray-500 dark:text-gray-500 mt-2">
          Check back later for new projects!
        </p>
      </div>
    );
  }

  return (
    <section className="max-container px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectContainer;
