import React from "react";

export function SearchForm() {

    return(
        <div className="SearchForm">
            <p>Search for a GIF</p>
            <input type="text" id="searchBar"></input> {/* // add value= and onChange property} */}
            <button id="submitForm" type="submit">Search</button>
        </div>
    )
}