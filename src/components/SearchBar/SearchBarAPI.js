import React, { useState } from 'react';
import './SearchBarAPI.css';

const SearchBarAPI = ({ searchResult }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleTermChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    searchResult(searchTerm);
  };

  return (
    <div className="searchBarAPI">
      <input
        type="text"
        placeholder="Enter Book Title..."
        value={searchTerm}
        onChange={handleTermChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch(e);
          }
        }}
      />
      <button><i className="fas fa-search"></i></button>
    </div>
  );
};

export default SearchBarAPI;
