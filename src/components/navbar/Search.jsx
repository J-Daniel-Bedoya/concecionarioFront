import React from "react";

const Search = ({ isBlock, setIsBlock }) => {
  return (
    <div>
      <form className="nav__search">
        <input type="search" placeholder="Search" aria-label="Search" />
        <button variant="outline-success" onClick={() => setIsBlock(!isBlock)}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>

      <div>
        <h1></h1>
      </div>
    </div>
  );
};

export default Search;
