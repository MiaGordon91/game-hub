import { Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { useState } from 'react';
import { Genres } from './hooks/useGenres';
import PlatformSelector from './components/PlatformSelector';
import { Platform } from './hooks/useGames';
import SortSelector from './components/SortSelector';


export interface GameQuery {
  genre: Genres | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {

  const [gameQuery, setGameQuery] = useState<GameQuery>( {} as GameQuery);

  return <Grid
    templateAreas={{
      base: `"header"
              "main"
              "footer"`,
      lg:`"header header"
      "aside main"
      "aside footer"`
      }}

      templateColumns={{
        base: "1fr",
        lg: "250px 1fr"
      }}
  
    fontWeight='bold'
>
  <GridItem pl='2' area={'header'}>
    <NavBar onSearch={(searchText => setGameQuery({...gameQuery, searchText}))}/>
  </GridItem>

  <Show above="lg">
  <GridItem pl='2' area={'aside'} paddingX={5}>
    <GenreList selectedGenre = {gameQuery.genre} onSelectGenre={(genre) => setGameQuery({...gameQuery, genre})}/>
  </GridItem>
  </Show> 

  <GridItem pl='2' area={'main'}>
    <HStack spacing={5} paddingBottom={3} >
    <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform) => setGameQuery({...gameQuery, platform})}/>
    <SortSelector sortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder) => setGameQuery({...gameQuery, sortOrder})}/>
    </HStack>
    <GameGrid gameQuery={gameQuery}/>
  </GridItem>
  <GridItem pl='2' bg='#A9A9A9' area={'footer'}>
    Footer
  </GridItem>
</Grid>

}

export default App
