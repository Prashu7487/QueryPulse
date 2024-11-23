import SearchBox from "../components/SearchBox";
import { useState } from "react";
import NavBar from "../components/NavBar";

const search_url = "http://localhost:8000/search";

const SearchPage = () => {
  const [results, setResults] = useState(null);

  const handleSearch = async (query) => {
    if(query===""){
      setResults(null);
      return;
    }
    const response = await fetch(search_url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: query }),
    });

    if (response.ok) {
      console.log("Response arrived");
      const data = await response.json();
      setResults(data);
      console.log(data);
    } else {
      console.error("Search request failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* NavBar */}
      <NavBar />

      {/* Search Box */}
      <div className="w-full">
        <SearchBox onSearch={handleSearch} />
      </div>

      {/* Search Results Section */}
      <div className="pt-48 container mx-auto px-4 py-8">
        {results && results.results.length > 0 ? (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Search Results:
            </h2>
            <div className="space-y-6">
              {results.results.map((result, index) => (
                <div
                  key={index}
                  className="border-b border-gray-300 pb-4 hover:bg-gray-100 transition"
                >
                  <a
                    href="#"
                    className="text-blue-600 text-lg font-medium hover:underline"
                  >
                    {result.title}
                  </a>
                  <p className="text-sm text-gray-600 mt-1">
                    <strong>Score:</strong> {result.score.toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center text-gray-600">
            <h2 className="text-3xl font-semibold">Welcome to QueryPulse!</h2>
            <p className="text-lg mt-2">
              Start by typing your query in the search box above.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
