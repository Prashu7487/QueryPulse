import { useState } from 'react';

const SearchBox = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="w-full mt-10">
      <div className="container mx-auto flex justify-center">
        <div className="flex items-center space-x-2 w-full max-w-3xl">
          {/* Input Box */}
          <input
            type="text"
            className="border border-gray-300 p-3 rounded-l-md w-full text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            placeholder="Ask the query here and wait for the pulse !!"
            value={query}
            onChange={handleChange}
          />
          {/* Search Button */}
          <button
            className="bg-blue-500 text-white p-3 rounded-r-md hover:bg-blue-600 focus:outline-none transition"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
