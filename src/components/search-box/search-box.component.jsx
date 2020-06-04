import React from "react";

import "./search-box.styles.scss";

const SearchBox = (props) => (
  <input
    className="search"
    type="search"
    placeholder="search monsters"
    onChange={props.onSearchChange}
  />
);

export default SearchBox;
