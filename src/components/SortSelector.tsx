import { Button, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import { BsChevronBarDown } from 'react-icons/bs'

const SortSelector = () => {
  return (
   <Menu>
    <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
        Sort
    </MenuButton>
    <MenuList>
        <MenuItem>Relevance</MenuItem>
        <MenuItem>Date added</MenuItem>
        <MenuItem>Name</MenuItem>
        <MenuItem>Release date</MenuItem>
        <MenuItem>Popularity</MenuItem>
        <MenuItem>Average rating</MenuItem>
    </MenuList>
   </Menu>
  )
}

export default SortSelector