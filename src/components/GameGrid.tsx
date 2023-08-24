import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";

//added interface to define the properties
interface GamesArray {
  id: number;
  name: string;
}

interface FetchGamesResponse {
  count: number;
  results: GamesArray[];
}

const GameGrid = () => {
  // added statehooks to manage state
  const [games, setGames] = useState<GamesArray[]>([]);
  const [error, setError] = useState('');

  // called on the useEffect hook to send get request to app and return a res within
  // callback function
  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("/games")
      .then(res => setGames(res.data.results))
      .catch(err => setError(err.messsage));
  });

  //mapped through games array
  return (
    <>
      {error && <Text>{error}</Text>}

      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
