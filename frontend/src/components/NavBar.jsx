import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide">QueryPulse</h1>
        
        {/* Navigation Links */}
        <div className="space-x-6">
          <Link
            to="/"
            className="hover:text-gray-200 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/search"
            className="hover:text-gray-200 transition duration-300"
          >
            Search
          </Link>
          <Link
            to="/about"
            className="hover:text-gray-200 transition duration-300"
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
