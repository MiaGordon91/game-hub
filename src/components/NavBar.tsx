import { Button, HStack, Image, Text, useColorMode } from '@chakra-ui/react'
import logo from '../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';

const NavBar = () => {

  return (
    <HStack justifyContent='space-between' padding='10px'>
        <Image src={logo} boxSize="100px" />
        <Text>Game Hub</Text>
        <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar