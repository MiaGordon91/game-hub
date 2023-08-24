import { Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'


function App() {
  return <Grid
  templateAreas={{
    base: `"header"
            "main"
            "footer"`,
    lg:`"header header"
    "aside main"
    "aside footer"`
    }}
 
  fontWeight='bold'
>
  <GridItem pl='2' area={'header'}>
    <NavBar />
  </GridItem>

  <Show above="lg">
  <GridItem pl='2' bg='#808080' area={'aside'}>
    Aside
  </GridItem>
  </Show>

  <GridItem pl='2' area={'main'}>
    <GameGrid />
  </GridItem>
  <GridItem pl='2' bg='#A9A9A9' area={'footer'}>
    Footer
  </GridItem>
</Grid>

}

export default App
