import { useState, useEffect }from "react";
import { SearchForm } from "./SearchForm";
import { ResultsList } from "./ResultsList";
import { Giphy } from "../models/giphy";
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
        <main>
        <SearchForm  onSubmit={handleFormSubmit} />
        <ResultsList gifs={gifs} />
        </main>
    )
}
