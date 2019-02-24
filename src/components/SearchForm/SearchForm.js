import './SearchForm.css';
import React from 'react';

const SearchForm = ({ searchQuery, handleInput, sortMethod, handleSelect }) => (
  <form>
    <fieldset>
      <div className="search-input">
        <label htmlFor="search">Search:</label>
        <input
          value={searchQuery}
          onChange={handleInput}
          type="text"
          id="search"
          name="search"
        />
      </div>

      <div className="search-filter">
        <label>Sort by:</label>
        <select value={sortMethod} onChange={handleSelect}>
          <option value="alpha">Alphabetical</option>
          <option value="newest">Newest</option>
        </select>
      </div>
    </fieldset>
  </form>
);

export default SearchForm;
