import { GamesArray } from '../hooks/useGames';
import { Card, CardBody, Heading, Image, Text } from '@chakra-ui/react';


//iterate through game objects and pass each object as a prop to 
// each card element

interface Props {
    game: GamesArray;
}

const GameCard = ({game}: Props) => {
  return (
    <Card borderRadius={10} overflow='hidden'>
        <Image src={game.background_image} />
        <CardBody>
            <Heading fontSize={'2xl'} >{game.name}</Heading>
        </CardBody>
    </Card>
  )
}

export default GameCard