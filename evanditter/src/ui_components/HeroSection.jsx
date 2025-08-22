import evanHeadshot from "@/images/evan_professional_headshot.jpeg";
import { personalInfo } from "@/data/personalInfo";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaDownload,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="max-container px-8 py-16">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg">
            <img
              src={evanHeadshot}
              alt={personalInfo.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#181A2A] dark:text-white mb-2">
            {personalInfo.name}
          </h1>
          <h2 className="text-xl lg:text-2xl text-blue-600 dark:text-blue-400 mb-6">
            {personalInfo.title}
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            {personalInfo.bio}
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start">
            {personalInfo.email && (
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <FaEnvelope className="text-blue-600 dark:text-blue-400" />
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="hover:text-blue-600 dark:hover:text-blue-400"
                >
                  {personalInfo.email}
                </a>
              </div>
            )}
            {personalInfo.phone && (
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <FaPhone className="text-blue-600 dark:text-blue-400" />
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="hover:text-blue-600 dark:hover:text-blue-400"
                >
                  {personalInfo.phone}
                </a>
              </div>
            )}
            {personalInfo.location && (
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <FaMapMarkerAlt className="text-blue-600 dark:text-blue-400" />
                <span>{personalInfo.location}</span>
              </div>
            )}
          </div>

          {/* Social Links and Resume */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            {personalInfo.linkedin_url && (
              <a
                href={personalInfo.linkedin_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <FaLinkedin />
                LinkedIn
              </a>
            )}
            {personalInfo.github_url && (
              <a
                href={personalInfo.github_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                <FaGithub />
                GitHub
              </a>
            )}
            {personalInfo.twitter_url && (
              <a
                href={personalInfo.twitter_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition-colors"
              >
                <FaTwitter />
                Twitter
              </a>
            )}
            {personalInfo.instagram_url && (
              <a
                href={personalInfo.instagram_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition-colors"
              >
                <FaInstagram />
                Instagram
              </a>
            )}
            {personalInfo.youtube_url && (
              <a
                href={personalInfo.youtube_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                <FaYoutube />
                YouTube
              </a>
            )}
            {personalInfo.resume_file && (
              <a
                href={`${BASE_URL}${personalInfo.resume_file}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                <FaDownload />
                Resume
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
