
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
  

const useGames = (selectedGenre: Genres | null) => useData<GamesArray>('/games', { params: {genres : selectedGenre?.id }}, [selectedGenre?.id]);

export default useGames;