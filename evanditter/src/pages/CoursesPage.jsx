import { FaTools, FaBell, FaBook } from "react-icons/fa";
import { Link } from "react-router-dom";

function CoursesPage() {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <div className="min-h-[50vh] flex flex-col md:flex-row">
        {/* Left Side - Header Content */}
        <div className="w-full md:w-1/2 flex items-center justify-center pt-8 md:pt-0 pb-1 md:pb-0 min-h-[25vh] md:min-h-[50vh]">
          <div className="text-center px-12 py-8">
            {/* Circular Icon */}
            <div className="flex justify-center mb-6">
              <div className="relative inline-flex items-center justify-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <FaBook className="text-3xl text-white" />
                </div>
                <FaTools className="text-3xl text-orange-500 absolute top-1 -right-2 animate-bounce" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Courses Coming Soon!
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl">
              I'm currently developing comprehensive courses on programming basics
              with Python, Introduction to Machine Learning, and modern programming
              technologies. Each course will include hands-on projects, real-world
              examples, and practical skills you can apply immediately.
            </p>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="w-full md:w-1/2 relative overflow-hidden flex items-center justify-center min-h-[25vh] md:min-h-[50vh]">
          <img
            src="/src/images/courses_home_page.png"
            alt="Courses"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-container px-8 py-16">
        <div className="max-w-6xl mx-auto text-center">
          {/* Features Preview */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
            <div className="text-blue-500 dark:text-blue-400 text-2xl mb-3">🐍</div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              Python for Beginners
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Learn Python fundamentals and programming basics
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
            <div className="text-purple-500 dark:text-purple-400 text-2xl mb-3">🤖</div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Machine Learning</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Python, AI, Data Science
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
            <div className="text-green-500 dark:text-green-400 text-2xl mb-3">🎯</div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Practical Projects</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Hands-on, real-world applications
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-lg border border-blue-200 dark:border-blue-800 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-3">
            <FaBell className="text-blue-500 dark:text-blue-400" />
            <h3 className="font-semibold text-gray-900 dark:text-white">Get Notified</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Want to be the first to know when courses are available?
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Contact Me for Updates
          </Link>
        </div>

        {/* Navigation Back */}
        <div className="mt-8">
          <Link
            to="/"
            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors duration-200"
          >
            ← Back to Home
          </Link>
        </div>
        </div>
      </div>
    </div>
  );
}

export default CoursesPage;
