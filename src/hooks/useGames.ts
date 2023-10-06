
import { GameQuery } from "../App";
import useData from "./useData";
import { Genres } from "./useGenres";

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
  

const useGames = (gameQuery: GameQuery) => useData<GamesArray>('/games', { 
  params: {
    genres : gameQuery.genre?.id, 
    platforms: gameQuery.platform?.id 
  }}, 
  [gameQuery]);

export default useGames;