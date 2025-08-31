import {
  FaGraduationCap,
  FaCalculator,
  FaCode,
  FaChartLine,
  FaBookOpen,
  FaStar,
  FaChalkboardTeacher,
  FaRegFileAlt,
} from "react-icons/fa";

const TutoringPage = () => {
  const subjects = [
    {
      title: "Computer Science",
      icon: (
        <FaCode className="text-3xl text-purple-600 dark:text-purple-400" />
      ),
      description:
        "Core computer science concepts, algorithms, data structures, and programming fundamentals.",
      topics: [
        "Algorithms",
        "Data Structures",
        "Object-Oriented Programming",
        "Software Design",
        "Problem Solving",
      ],
      level: "High School - College",
    },
    {
      title: "Python Programming",
      icon: (
        <FaBookOpen className="text-3xl text-yellow-600 dark:text-yellow-400" />
      ),
      description:
        "Learn Python from basics to advanced concepts, including web development and data analysis.",
      topics: [
        "Python Basics",
        "Web Development",
        "Data Analysis",
        "Django Framework",
        "API Development",
      ],
      level: "Beginner - Advanced",
    },
    {
      title: "Elementary & Basic Math",
      icon: (
        <FaCalculator className="text-3xl text-blue-600 dark:text-blue-400" />
      ),
      description:
        "Foundational math concepts, arithmetic, basic algebra, and problem-solving skills for elementary and middle school students.",
      topics: [
        "Basic Arithmetic",
        "Fractions & Decimals",
        "Word Problems",
        "Pre-Algebra",
        "Geometry Basics",
      ],
      level: "Elementary - Middle School",
    },
    {
      title: "ACT Test Preparation",
      icon: (
        <FaChartLine className="text-3xl text-green-600 dark:text-green-400" />
      ),
      description:
        "Comprehensive ACT prep covering math, science, and test-taking strategies to boost your scores.",
      topics: [
        "Math Section",
        "Science Section",
        "Test Strategies",
        "Time Management",
        "Practice Tests",
      ],
      level: "High School",
    },
  ];

  const achievements = [
    "Bachelor's of Science in Computer Science",
    "Teaching Assistant for Data Structures and Algorithms in College",
    "Previous Tutor for Elementary through High School Students in Computer Science and Beginner Python",
    "Professional Machine Learning Engineer",
    "Experience with Modern Data Engineering Technologies",
    "Proven Track Record in Education",
  ];

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
                  <FaChalkboardTeacher className="text-3xl text-white" />
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Tutoring
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl">
                Get personalized programming tutoring tailored to your needs.
                Whether you're just starting or looking to level up your skills,
                I'm here to help you succeed in your learning journey.
              </p>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="w-full md:w-1/2 relative overflow-hidden min-h-[25vh] md:min-h-[50vh] aspect-[16/9]">
            <img
              src="/images/evan_professional_headshot.jpeg"
              alt="Evan Ditter Professional Headshot"
              className="w-full h-full object-cover object-top rounded-lg"
            />
          </div>
        </div>

        {/* Main Content */}
        <section className="max-container px-8 py-16">
          <div className="max-w-6xl mx-auto">
            {/* Background Section */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-8 mb-16">
              <h2 className="text-3xl font-bold text-[#181A2A] dark:text-white mb-6 text-center">
                My Background
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-[#181A2A] dark:text-white mb-4">
                    Education & Experience
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    I graduated with a 3.7 GPA from the College of Science and
                    Engineering at the University of Minnesota - Twin Cities,
                    where I earned my Bachelor's of Science in Computer Science.
                    During my studies, I served as a Teaching Assistant for Data
                    Structures and Algorithms, giving me valuable experience in
                    breaking down complex programming concepts for students at
                    various skill levels.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    My professional journey has taken me from Backend Software
                    Engineer to Data Engineer and now Machine Learning Engineer
                    at JPMorgan Chase, working extensively with SQL and Python
                    across multiple cloud providers including AWS and Azure. I
                    have hands-on experience with modern data technologies like
                    Snowflake and Databricks, and have previously tutored
                    programming and beginner Python with a professional tutoring
                    service.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    This unique combination of theoretical knowledge and
                    practical industry experience allows me to break down
                    complex concepts into digestible, understandable parts. My
                    approach focuses on building confidence through
                    understanding fundamentals, practical application, and
                    personalized learning strategies that work for each
                    student's unique style.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#181A2A] dark:text-white mb-4">
                    Key Qualifications
                  </h3>
                  <ul className="space-y-3">
                    {achievements.map((achievement, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <FaStar className="text-yellow-500 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-300">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 mb-4">
                    <a
                      href="/resume"
                      className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-300 underline hover:text-blue-800 dark:hover:text-blue-200 transition-colors"
                    >
                      <FaRegFileAlt className="text-gray-600 dark:text-gray-300" />
                      <span className="text-lg md:text-xl font-semibold">
                        View My Resume
                      </span>
                    </a>
                  </div>
                  <h3 className="text-xl font-semibold text-[#181A2A] dark:text-white mb-4">
                    Location
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Based in Upper West Side, Manhattan
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">
                    Can arrange location to meet up in person or virtual through
                    Google Meet
                  </p>
                </div>
              </div>
            </div>

            {/* Subjects Grid */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-[#181A2A] dark:text-white mb-8 text-center">
                Tutoring Subjects
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {subjects.map((subject, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      {subject.icon}
                      <div>
                        <h3 className="text-xl font-semibold text-[#181A2A] dark:text-white">
                          {subject.title}
                        </h3>
                        <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                          {subject.level}
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {subject.description}
                    </p>

                    <div>
                      <h4 className="font-semibold text-[#181A2A] dark:text-white mb-2">
                        Topics Covered:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {subject.topics.map((topic, topicIndex) => (
                          <span
                            key={topicIndex}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Start Learning?
              </h2>
              <p className="text-lg mb-6 opacity-90">
                Let's work together to achieve your academic goals. I offer
                flexible scheduling and personalized lesson plans tailored to
                your learning style.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:evan@evanditter.com?subject=Tutoring Inquiry&body=Hi Evan,%0A%0AI'm interested in tutoring services for:%0A- Subject:%0A- Current level:%0A- Goals:%0A%0APlease let me know your availability and rates.%0A%0AThank you!"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Schedule a Session
                </a>
                <a
                  href="mailto:evan@evanditter.com?subject=Tutoring Questions"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Ask Questions
                </a>
              </div>
            </div>

            {/* Additional Info */}
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaBookOpen className="text-blue-600 dark:text-blue-400 text-xl" />
                </div>
                <h3 className="font-semibold text-[#181A2A] dark:text-white mb-2">
                  Flexible Scheduling
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Online and in-person sessions available with scheduling that
                  works around your busy life.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaStar className="text-green-600 dark:text-green-400 text-xl" />
                </div>
                <h3 className="font-semibold text-[#181A2A] dark:text-white mb-2">
                  Personalized Approach
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Every student learns differently. I adapt my teaching style to
                  match your learning preferences.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaChartLine className="text-purple-600 dark:text-purple-400 text-xl" />
                </div>
                <h3 className="font-semibold text-[#181A2A] dark:text-white mb-2">
                  Progress Tracking
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Regular assessments and feedback to ensure you're making
                  consistent progress toward your goals.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TutoringPage;
