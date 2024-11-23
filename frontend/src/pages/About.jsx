import NavBar from "../components/NavBar";
import LinkedInImg from "../assets/linkedin.png"
import GithubImg from "../assets/github.jpeg"

const AboutPage = () => {
  return (
    <>
    <NavBar/>
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-gray-200 flex flex-col items-center justify-center py-10">
      {/* Main Content */}
      <div className="bg-white rounded-lg shadow-xl p-8 w-full sm:w-3/4 md:w-1/2 lg:w-1/3 text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-6">About QueryPulse</h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          QueryPulse is a semantic Q&A search engine designed to provide fast, precise, and intelligent question searches. It leverages advanced Natural Language Processing (NLP) models and Elasticsearch to offer efficient search, filtering, and predictive capabilities. Whether you're searching for answers or analyzing trends, QueryPulse delivers exceptional insights.
        </p>

        <div className="mt-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-700">About Me</h2>
          <p className="text-center text-gray-600">
            Hi, I’m <span className="font-bold text-blue-500">Prashant Mishra</span>. I’m passionate about building intelligent systems and crafting seamless user experiences through engineering and design.
          </p>
        </div>

        {/* Contact Details */}
        <div className="mt-8 text-center">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Contact Me</h3>
          <p className="text-gray-600 mb-4">
            Email: <a href="mailto:prashantkr23@iitk.ac.in" className="text-blue-500 underline">prashantkr23@iitk.ac.in</a>
          </p>
          <div className="flex justify-center mt-4 space-x-6">
            {/* LinkedIn Image Icon */}
            <a
              href="https://linkedin.com/in/prashantkr23"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition duration-300"
            >
              <img src={LinkedInImg} alt="LinkedIn" className="w-10 h-10 transition-transform transform hover:scale-110" />
            </a>
            {/* GitHub Image Icon */}
            <a
              href="https://github.com/prashantkr23"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-gray-900 transition duration-300"
            >
              <img src={GithubImg} alt="GitHub" className="w-10 h-10 transition-transform transform hover:scale-110" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 w-full mt-10">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} QueryPulse. All rights reserved.</p>
        </div>
      </footer>
    </div>
    </>
  );
};

export default AboutPage;
