export const searchQuery = async (query) => {
    const response = await fetch('http://localhost:8000/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });
  
    if (!response.ok) {
      console.error('Failed to search your query');
      return [];
    }
  
    const data = await response.json();
    return data.results;
  };
  