import React, { useState } from "react";

const SearchBar = ({ onEnter }) => {
  const [term, setTerm] = useState("");
  const onSumitform = (event) => {
    event.preventDefault();
    onEnter(term);
  };

  return (
    <div className="ui segment">
      <form onSubmit={() => onSumitform(event)} className="ui form">
        <div className="field">
          <label>Search videos</label>
          <input
            value={term}
            type="text"
            onChange={(event) => setTerm(event.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
