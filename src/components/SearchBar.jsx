import React from 'react';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        className="form-control"
        placeholder="Search blogs by title or tags..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default SearchBar;
