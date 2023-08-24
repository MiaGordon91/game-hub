import { Button, HStack, Switch, Text, useColorMode } from '@chakra-ui/react'

const ColorModeSwitch = () => {

  const {colorMode, toggleColorMode} = useColorMode()
  
  return (
    <HStack>
      <Switch colorScheme='green' isChecked={colorMode === 'dark'} onChange={toggleColorMode} />
        <Text fontSize={{ base: "8px", md: "12px", lg: "15px" }}>Dark Mode</Text>
    </HStack>
  )
}

export default ColorModeSwitch