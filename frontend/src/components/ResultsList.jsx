const ResultsList = ({ results }) => {
    return (
      <div className="w-full p-4 space-y-4">
        {results.length > 0 ? (
          results.map((result, index) => (
            <div key={index} className="p-4 border border-gray-300 rounded-md shadow-sm">
              <h2 className="text-xl font-semibold">{result.title}</h2>
              <p>{result.body}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No results found</p>
        )}
      </div>
    );
  };
  
  export default ResultsList;
  