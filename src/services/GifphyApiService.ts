import axios from "axios";
import { GiphyMapResponse, Image } from "../models/giphy";

export function fetchGiphy(): Promise<GiphyMapResponse> {
    
    return axios.get("api.giphy.com/v1/gifs/search", {
        params: {
           q: "delorean",
           api_key: "jFBePHAg2Jot6Gn6Agw7Ag3Kt7F87NLA"
        }
    })
    .then(res => res.data)};