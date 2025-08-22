import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  getCourses,
  getFeaturedCourses,
  getFreeCourses,
} from "@/services/apiPortfolio";
import CourseCard from "@/ui_components/CourseCard";
import { Button } from "@/components/ui/button";
import { Loader2, Filter, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";

function CourseContainer() {
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState("all"); // 'all', 'featured', 'free', 'beginner', 'intermediate', 'advanced'

  // Main courses query with pagination
  const {
    data: coursesData,
    isLoading: coursesLoading,
    error: coursesError,
  } = useQuery({
    queryKey: ["courses", currentPage],
    queryFn: () => getCourses(currentPage),
    enabled: filter === "all",
  });

  // Featured courses query
  const {
    data: featuredCourses,
    isLoading: featuredLoading,
    error: featuredError,
  } = useQuery({
    queryKey: ["featured-courses"],
    queryFn: getFeaturedCourses,
    enabled: filter === "featured",
  });

  // Free courses query
  const {
    data: freeCourses,
    isLoading: freeLoading,
    error: freeError,
  } = useQuery({
    queryKey: ["free-courses"],
    queryFn: getFreeCourses,
    enabled: filter === "free",
  });

  // Difficulty-based filtering (client-side for now)
  const { data: allCoursesForFilter, isLoading: allCoursesLoading } = useQuery({
    queryKey: ["all-courses-filter"],
    queryFn: () => getCourses(1),
    enabled: ["beginner", "intermediate", "advanced"].includes(filter),
  });

  const getCurrentData = () => {
    switch (filter) {
      case "featured":
        return {
          results: featuredCourses || [],
          isLoading: featuredLoading,
          error: featuredError,
          hasNext: false,
          hasPrevious: false,
        };
      case "free":
        return {
          results: freeCourses || [],
          isLoading: freeLoading,
          error: freeError,
          hasNext: false,
          hasPrevious: false,
        };
      case "beginner":
      case "intermediate":
      case "advanced":
        const filteredCourses =
          allCoursesForFilter?.results?.filter(
            (course) => course.difficulty === filter
          ) || [];
        return {
          results: filteredCourses,
          isLoading: allCoursesLoading,
          error: null,
          hasNext: false,
          hasPrevious: false,
        };
      default:
        return {
          results: coursesData?.results || [],
          isLoading: coursesLoading,
          error: coursesError,
          hasNext: coursesData?.next,
          hasPrevious: coursesData?.previous,
        };
    }
  };

  const { results, isLoading, error, hasNext, hasPrevious } = getCurrentData();

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setCurrentPage(1);
  };

  const handlePreviousPage = () => {
    if (hasPrevious && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (hasNext) {
      setCurrentPage(currentPage + 1);
    }
  };

  const getFilterTitle = () => {
    switch (filter) {
      case "featured":
        return "Featured Courses";
      case "free":
        return "Free Courses";
      case "beginner":
        return "Beginner Courses";
      case "intermediate":
        return "Intermediate Courses";
      case "advanced":
        return "Advanced Courses";
      default:
        return "All Courses";
    }
  };

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600 dark:text-red-400">
          Error loading courses: {error.message}
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Learn with Evan
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Comprehensive courses in web development, machine learning, and more.
          Build real-world projects and advance your tech career.
        </p>
      </div>

      {/* Filter Controls */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Filter className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
            Filter by:
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          {[
            { key: "all", label: "All Courses" },
            { key: "featured", label: "Featured" },
            { key: "free", label: "Free" },
            { key: "beginner", label: "Beginner" },
            { key: "intermediate", label: "Intermediate" },
            { key: "advanced", label: "Advanced" },
          ].map(({ key, label }) => (
            <Button
              key={key}
              variant={filter === key ? "default" : "outline"}
              size="sm"
              onClick={() => handleFilterChange(key)}
              className={`relative ${
                filter === key 
                  ? "bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600" 
                  : "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {label}
              {filter === key && key !== "all" && (
                <X
                  className="w-3 h-3 ml-2 cursor-pointer hover:text-red-500"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleFilterChange("all");
                  }}
                />
              )}
            </Button>
          ))}
        </div>
      </div>

      {/* Current Filter Badge */}
      {filter !== "all" && (
        <div className="mb-6">
          <Badge variant="secondary" className="text-sm">
            Showing: {getFilterTitle()}
          </Badge>
        </div>
      )}

      {/* Loading State */}
      {isLoading && (
        <div className="flex justify-center items-center py-12">
          <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
          <span className="ml-2 text-gray-600 dark:text-gray-300">
            Loading courses...
          </span>
        </div>
      )}

      {/* Courses Grid */}
      {!isLoading && results.length > 0 && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {results.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

          {/* Pagination - only show for 'all' filter */}
          {filter === "all" && (hasPrevious || hasNext) && (
            <div className="flex justify-center items-center gap-4">
              <Button
                variant="outline"
                onClick={handlePreviousPage}
                disabled={!hasPrevious}
              >
                Previous
              </Button>

              <span className="text-sm text-gray-600 dark:text-gray-300">
                Page {currentPage}
              </span>

              <Button
                variant="outline"
                onClick={handleNextPage}
                disabled={!hasNext}
              >
                Next
              </Button>
            </div>
          )}
        </>
      )}

      {/* No Results */}
      {!isLoading && results.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            No courses found
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {filter === "all"
              ? "No courses are available at the moment."
              : `No courses found for "${getFilterTitle()}".`}
          </p>
          {filter !== "all" && (
            <Button onClick={() => handleFilterChange("all")}>
              View All Courses
            </Button>
          )}
        </div>
      )}
    </div>
  );
}

export default CourseContainer;
