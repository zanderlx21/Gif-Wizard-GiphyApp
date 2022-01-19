import React, { useState, useEffect }from "react";
import { SearchForm } from "./SearchForm";
import { ResultsList } from "./ResultsList";
import { Result } from "./Result";
import { Giphy, GiphyMapResponse } from "../models/giphy";
import { fetchSearch, fetchTrendingGiphy } from "../services/GifphyApiService";

export function Main() {
const [gifs, setGifs] = useState<Giphy[]>([])
const [search, setSearch ] = useState<string>("")

useEffect( () => {
    if (search === "") 
    {fetchTrendingGiphy().then((gifs) => setGifs(gifs));}
    else 
    {fetchSearch(search).then((gifs) => setGifs(gifs));}
    }, [search]);

function handleFormSubmit (search: string) {
    setSearch(search)
}

    return(
        <div>
        <SearchForm  onSubmit={handleFormSubmit} />
        <ResultsList gifs={gifs} />
        </div>
    )
}
