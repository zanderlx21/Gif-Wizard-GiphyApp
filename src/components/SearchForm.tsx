import React , {useState, FormEvent} from "react";
import { Giphy } from "../models/giphy";

interface Props {
    onSubmit: (gifs: string) => void
}

export function SearchForm({onSubmit}: Props) {
    const [search, setSearch] = useState("")

    function onFormSubmit (e: FormEvent) {
        e.preventDefault();
        onSubmit(search);
    }

    return(
        <div className="SearchForm" onSubmit={onFormSubmit}>
            <form action="" className="InputForm">
            <p>Search for a GIF</p>
            <div className="searchBarContainer">
            <input 
            type="text" 
            id="searchBar" 
            onChange={(e) => setSearch(e.target.value) } 
            />
            <button id="submitForm" type="submit">Search</button>
            </div>
            </form>
        </div>
    )
}