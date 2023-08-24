import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

//custom hook for fetching games

//added interface to define the properties
interface GamesArray {
    id: number;
    name: string;
  }
  
  interface FetchGamesResponse {
    count: number;
    results: GamesArray[];
  }

const useGames = () => {

  // add state variables to manage state
  const [games, setGames] = useState<GamesArray[]>([]);
  const [error, setError] = useState('');

  // called on the useEffect hook to send get request to app and return a res within
  // callback function
  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("/games")
      .then(res => setGames(res.data.results))
      .catch(err => setError(err.messsage));
  }, []);

  return {games, error};

}

export default useGames;