import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const trimmed = query.trim();
    if (!trimmed) return;
    navigate(`/search/${encodeURIComponent(trimmed)}`);
    setQuery('');
  };

  return (
    <form onSubmit={handleSubmit} className="search">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search videos"
        aria-label="Search videos"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;
