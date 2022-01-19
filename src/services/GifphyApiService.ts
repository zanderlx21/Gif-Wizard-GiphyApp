import axios from "axios";
import { Giphy } from "../models/giphy";

export function fetchSearch(searchTerm: string): Promise<Giphy[]> {
    const apiKey = process.env.REACT_APP_GIPHY_API_KEY;
  return axios
    .get("https://api.giphy.com/v1/gifs/search", {
      params: {
        q: searchTerm,
        api_key: apiKey
      },
    })
    .then((res) => res.data.data);
}

export function fetchTrendingGiphy(): Promise<Giphy[]> {
    const apiKey = process.env.REACT_APP_GIPHY_API_KEY;
  return axios
    .get("https://api.giphy.com/v1/gifs/trending", {
      params: {
        api_key: apiKey
      },
    })
    .then((res) => res.data.data);
}
