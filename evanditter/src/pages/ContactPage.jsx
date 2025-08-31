import { FaEnvelope, FaUser, FaEdit, FaExternalLinkAlt } from "react-icons/fa";

const ContactPage = () => {
  const handleEmailClick = () => {
    window.location.href =
      "mailto:evan@evanditter.com?subject=Project Inquiry&body=Hi Evan,%0A%0AI'm interested in discussing a project with you.%0A%0APlease tell me more about:%0A- %0A%0AProject details:%0A- %0A%0ABest regards,";
  };

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
                <FaUser className="text-3xl text-white" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Get In Touch
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl">
              Have a project in mind or want to discuss opportunities? I'd love to
              hear from you. Click the button below to send me an email directly.
            </p>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="w-full md:w-1/2 relative overflow-hidden min-h-[25vh] md:min-h-[50vh] aspect-[16/9]">
          <img
            src="/images/contact_me.png"
            alt="Contact Me"
            className="w-full h-full object-cover object-top rounded-lg"
          />
        </div>
      </div>

      {/* Main Content */}
      <section className="max-container px-8 py-16">
        <div className="max-w-4xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-[#181A2A] dark:text-white mb-6">
                Contact Information
              </h2>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                    <FaEnvelope className="text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#181A2A] dark:text-white">
                      Email
                    </h3>
                    <a
                      href="mailto:evan@evanditter.com"
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      evan@evanditter.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
              <h3 className="font-semibold text-[#181A2A] dark:text-white mb-3">
                Response Time
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                I typically respond to emails within 1-2 business days.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
              <h3 className="font-semibold text-[#181A2A] dark:text-white mb-3">
                What to Include
              </h3>
              <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-1">
                <li>• Project details and timeline</li>
                <li>• Budget range (if applicable)</li>
                <li>• Your contact preferences</li>
                <li>• Any relevant attachments or links</li>
              </ul>
            </div>
          </div>

          {/* Email CTA */}
          <div className="flex flex-col justify-center">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-8 text-center border border-blue-200 dark:border-blue-800">
              <div className="w-20 h-20 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaEnvelope className="text-blue-600 dark:text-blue-400 text-2xl" />
              </div>

              <h3 className="text-2xl font-semibold text-[#181A2A] dark:text-white mb-4">
                Ready to Start a Project?
              </h3>

              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Click the button below to open your email client with a
                pre-filled message template. This makes it easy to get in touch
                and ensures I have all the details I need.
              </p>

              <button
                onClick={handleEmailClick}
                className="inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors text-lg font-medium"
              >
                <FaEnvelope />
                Send Email
                <FaExternalLinkAlt className="text-sm" />
              </button>

              <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                Or copy this email:
                <span className="font-mono bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded ml-1">
                  evan@evanditter.com
                </span>
              </p>
            </div>

            {/* Alternative Contact Methods */}
            <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
              <h4 className="font-semibold text-[#181A2A] dark:text-white mb-4">
                Prefer a Different Approach?
              </h4>
              <div className="space-y-3 text-sm">
                <p className="text-gray-600 dark:text-gray-300">
                  • <strong>LinkedIn:</strong> Connect with me professionally
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  • <strong>GitHub:</strong> Check out my code and contributions
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  • <strong>Direct Email:</strong> evan@evanditter.com for
                  immediate contact
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
    </div>
  </div>
  );
};

export default ContactPage;
