import React, { useState, useEffect }from "react";
import { SearchForm } from "./SearchForm";
import { ResultsList } from "./ResultsList";
import { Image } from "../models/giphy";
import { fetchGiphy } from "../services/GifphyApiService";

export function Main() {
const [Gifs, setGifs] = useState<Image[]>([])

// useEffect( () => {
//     fetchGiphy().then(
//         (Gifs) => setGifs(Gifs)
// );
//     } , []);

    return(
        <div>
            <SearchForm />
            <ResultsList />
        </div>
    )
}
