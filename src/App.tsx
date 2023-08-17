import { Grid, GridItem } from '@chakra-ui/react'

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
  // gridTemplateRows={'50px 1fr 30px'}
  // gridTemplateColumns={'150px 1fr'}
  // h='900px'
  gap='2'
  color='blackAlpha.700'
  fontWeight='bold'
>
  <GridItem pl='2' bg='#000000' area={'header'} color='#FFFFFF'>
    Header
  </GridItem>
  <GridItem pl='2' bg='#808080' area={'aside'}>
    Aside
  </GridItem>
  <GridItem pl='2' bg='#FFFFFF' area={'main'}>
    Main
  </GridItem>
  <GridItem pl='2' bg='#A9A9A9' area={'footer'}>
    Footer
  </GridItem>
</Grid>

}

export default App
