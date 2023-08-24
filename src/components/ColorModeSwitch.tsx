import { Button, Switch, Text, useColorMode } from '@chakra-ui/react'

const ColorModeSwitch = () => {

  const {colorMode, toggleColorMode} = useColorMode()
  
  return (
    <Switch colorScheme='green' isChecked={colorMode === 'dark'} onChange={toggleColorMode}>
      Dark Mode
    </Switch>
  )
}

export default ColorModeSwitch