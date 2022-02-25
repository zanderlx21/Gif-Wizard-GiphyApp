import React, { useState, useEffect} from "react";
import { fetchTrendingGiphy } from "../services/GifphyApiService";
import { Giphy } from "../models/giphy";


interface Props {
    gif: Giphy;
}

export function Result({gif}: Props) {
   
    return(
        <div className="Result" key={gif.id}>
            <p>{gif.title}</p>
                <img src={gif.images.original.url} alt="" id="gifThumbnail" />
                <a href={gif.url} id="LinkToGiphy">Link to Giphy</a>
        </div>
    )
}