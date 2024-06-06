// src/components/Search.js
import React from "react";

const Search = ({ onSearch }) => {
  const handleInputChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search todos..."
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Search;
