import React, { useState, useEffect} from "react";
import { fetchTrendingGiphy } from "../services/GifphyApiService";
import { Giphy } from "../models/giphy";


interface Props {
    gif: Giphy;
}

export function Result({gif}: Props) {
    // const [gifs, setGifs] = useState<Giphy[]>([])

    // useEffect( () =>{
    //     fetchTrendingGiphy().then(
    //         (gifs) => setGifs(gifs)
    //     );
    // } , []);

    return(
        <div className="Result" key={gif.id}>
            <p>{gif.title}</p>
                <img src={gif.images.original.url} alt="" id="gifThumbnail" />
                <br></br>
                <a href={gif.url} id="LinkToGiphy">Link to Giphy</a>
        </div>
    )
}