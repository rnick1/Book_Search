import React from "react";

function SearchResults(props) {
  return (
    <ul>
      {props.results.map(result => (
        <li key={result}>
          <img alt="result" src={result} />
        </li>
      ))}
    </ul>
  );
}

export default SearchResults;
