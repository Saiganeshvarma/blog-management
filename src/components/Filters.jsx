import React, { useState, useEffect } from 'react';

const Filters = ({ filters, setFilters, availableTags }) => {
  const [selectedTags, setSelectedTags] = useState([]);

  const handleTagToggle = (tag) => {
    const updatedTags = selectedTags.includes(tag)
      ? selectedTags.filter((t) => t !== tag)
      : [...selectedTags, tag];
    setSelectedTags(updatedTags);
    setFilters({ ...filters, tags: updatedTags });
  };

  useEffect(() => {

    setFilters({ ...filters, tags: selectedTags });
  }, [selectedTags]);

  return (
    <div className="mb-4">

      <label className="form-label">Category</label>

      <label className="form-label">Tags</label>
      <div className="d-flex flex-wrap gap-2">
        {availableTags.map((tag) => (
          <button
            key={tag}
            type="button"
            className={`btn btn-sm ${
              selectedTags.includes(tag) ? 'btn-primary' : 'btn-outline-primary'
            }`}
            onClick={() => handleTagToggle(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Filters;
