import { Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'


function App() {
  return <Grid
  templateAreas={
    {base: `"header"
            "main"
            "footer"`,
      lg:`"header header"
      "aside main"
      "aside footer"`}
  }
  gridTemplateColumns={'150px 1fr'}
  gap='2'
  color='blackAlpha.700'
  fontWeight='bold'
>
  <GridItem pl='2' area={'header'}>
    <NavBar />
  </GridItem>

  <Show above="lg">
  <GridItem pl='2' bg='#808080' area={'aside'}>
    Aside
  </GridItem>
  <GridItem pl='2' bg='#A9A9A9' area={'main'}>
    Main
  </GridItem>
  <GridItem pl='2' bg='#A9A9A9' area={'footer'}>
    Footer
  </GridItem>
  </Show>
</Grid>

}

export default App
