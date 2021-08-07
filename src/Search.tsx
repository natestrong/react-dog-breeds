import React from "react";

const Search = ({ filterBreedsBySearch }) => {
  return (
    <div className="search-container">
      <input
        className="search-input"
        placeholder="Search by breed or sub-breed"
        onChange={(e) => filterBreedsBySearch(e.target.value)}
      />
    </div>
  );
};

export default Search;
