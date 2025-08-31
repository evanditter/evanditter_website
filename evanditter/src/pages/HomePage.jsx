import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HeroSection from "@/ui_components/HeroSection";

const HomePage = () => {
  const [hoveredSection, setHoveredSection] = useState("projects");
  const [isHovered, setIsHovered] = useState(false);

  // Sample images for each section - you can replace these with actual images
  const sectionImages = {
  projects: "/images/coding_projects_image.jpg", // Updated to use coding projects image
  courses: "/images/courses_home_page.png", // Updated to use courses home page image
  tutoring: "/images/evan_professional_headshot.jpeg", // You can replace with actual tutoring image
  contact: "/images/contact_me.png", // Updated to use contact me PNG image
  };

  const navigationSections = [
    { id: "projects", label: "Projects", path: "/projects" },
    { id: "courses", label: "Courses", path: "/courses" },
    { id: "tutoring", label: "Tutoring", path: "/tutoring" },
    { id: "contact", label: "Contact", path: "/contact" },
  ];

  // Auto-rotate functionality
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setHoveredSection((current) => {
          const currentIndex = navigationSections.findIndex(
            (section) => section.id === current
          );
          const nextIndex = (currentIndex + 1) % navigationSections.length;
          return navigationSections[nextIndex].id;
        });
      }, 4000); // 4 seconds

      return () => clearInterval(interval);
    }
  }, [isHovered, navigationSections]);

  const handleMouseEnter = (sectionId) => {
    setIsHovered(true);
    setHoveredSection(sectionId);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="max-container px-8 py-8">
      <HeroSection />

      {/* Navigation Section with Image Carousel */}
      <div className="py-16">
        <div className="grid md:grid-cols-2 gap-3 items-center">
          {/* Left Side - Navigation Links */}
          <div className="space-y-12" onMouseLeave={handleMouseLeave}>
            <div className="space-y-12">
              {navigationSections.map((section) => (
                <Link
                  key={section.id}
                  to={section.path}
                  className={`block text-6xl md:text-7xl font-bold transition-all duration-300 hover:scale-105 ${
                    hoveredSection === section.id
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent transform translate-x-4"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:bg-clip-text hover:text-transparent"
                  }`}
                  onMouseEnter={() => handleMouseEnter(section.id)}
                >
                  {section.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Right Side - Image Carousel */}
          <div className="relative h-[600px] rounded-lg overflow-hidden shadow-lg">
            <div
              className="absolute inset-0 transition-opacity duration-500 cursor-pointer"
              onClick={() =>
                (window.location.href =
                  navigationSections.find(
                    (section) => section.id === hoveredSection
                  )?.path || "/projects")
              }
            >
              <img
                src={sectionImages[hoveredSection]}
                alt={`${hoveredSection} preview`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-2xl font-bold capitalize">
                  {hoveredSection}
                </h3>
                <p className="text-sm opacity-90">
                  {hoveredSection === "projects" &&
                    "Explore my development projects"}
                  {hoveredSection === "courses" &&
                    "Learn programming with Python"}
                  {hoveredSection === "tutoring" && "Get personalized tutoring"}
                  {hoveredSection === "contact" && "Get in touch with me"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
