import { Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { useState } from 'react';
import { Genres } from './hooks/useGenres';
// import { Genres } from './hooks/useGenres';
// import useGenres from "../hooks/useGenres";


function App() {

  const [selectedGenre, setSelectedGenre] = useState<Genres | null>(null);


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
    <NavBar />
  </GridItem>

  <Show above="lg">
  <GridItem pl='2' area={'aside'} paddingX={5}>
    <GenreList onSelectGenre={(genre) => setSelectedGenre(genre)}/>
  </GridItem>
  </Show>

  <GridItem pl='2' area={'main'}>
    <GameGrid selectedGenre={selectedGenre} />
  </GridItem>
  <GridItem pl='2' bg='#A9A9A9' area={'footer'}>
    Footer
  </GridItem>
</Grid>

}

export default App
