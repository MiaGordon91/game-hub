import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface Props {
    children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    //Box renders a div element
    <Box borderRadius={10} overflow='hidden'>
        {children}
    </Box>
  )
}

export default GameCardContainer