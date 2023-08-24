import { Button, HStack, Image, Text, useColorMode } from '@chakra-ui/react'
import logo from '../assets/logo.webp';

const NavBar = () => {

  const {colorMode, toggleColorMode} = useColorMode()

  return (
    <HStack>
        <Image src={logo} boxSize="100px" />
        <Text>NavBar</Text>
        
        <Button onClick={toggleColorMode}>
            Toggle {colorMode === 'dark' ? 'Light' : 'Dark'}
        </Button>
    </HStack>
  )
}

export default NavBar