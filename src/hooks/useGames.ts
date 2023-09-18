import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { ImageProps } from "@chakra-ui/react";

//custom hook for fetching games
//added interface to define the properties

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface GamesArray {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform}[];
    metacritic: number;
  }
  
  interface FetchGamesResponse {
    count: number;
    results: GamesArray[];
  }

const useGames = () => {

  // add state variables to manage state
  const [games, setGames] = useState<GamesArray[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);

  // called on the useEffect hook to send get request to app and return a res within
  // callback function
  useEffect(() => {

    setLoading(true);

    apiClient
      .get<FetchGamesResponse>("/games")
      .then((res) => {
        setGames(res.data.results)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.messsage)
        setLoading(false)});
  }, []);

  return {games, error, isLoading};

}

export default useGames;