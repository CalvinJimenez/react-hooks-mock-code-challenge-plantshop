import React from "react";

function Search({searchText, setSearchText}) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        
        value={searchText}
        onChange={(se) => setSearchText(se.target.value)}
      />
    </div>
  );
}

export default Search;
