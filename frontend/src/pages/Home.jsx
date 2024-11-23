import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 flex flex-col">
      <NavBar/>
      {/* Welcome Section */}
      <div className="flex-1 flex flex-col justify-center items-center text-center space-y-8 p-8">
        {/* Main Heading */}
        <h1 className="text-5xl font-extrabold text-gray-800">
          Welcome to <span className="text-blue-600">QueryPulse</span>
        </h1>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
          Your go-to platform for semantic Q&A searches. Leverage cutting-edge NLP models to get precise, 
          meaningful answers to your queries.
        </p>

        {/* Call to Action */}
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="@navigate to search page"
            className="bg-white bg-opacity-70 text-gray-700 placeholder-gray-500 border border-gray-300 rounded-lg p-3 w-80 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
            disabled
          />
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition"
          >
            Search
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} QueryPulse. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
