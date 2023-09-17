import { GamesArray } from '../hooks/useGames';
import { Card, CardBody, HStack, Heading, Image, Text } from '@chakra-ui/react';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import getCroppedImageUrl from '../services/cropped-image';


//iterate through game objects and pass each object as a prop to 
// each card element

interface Props {
    game: GamesArray;
}

const GameCard = ({game}: Props) => {
  return (
    <Card width="300px" borderRadius={10} overflow='hidden'>
        <Image src={getCroppedImageUrl(game.background_image)}/>
        <CardBody>
            <Heading fontSize={'2xl'}>{game.name}</Heading>
            <HStack justifyContent='space-between'>
              <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)}></PlatformIconList>
              <CriticScore score={game.metacritic}></CriticScore>
            </HStack>
        </CardBody>
    </Card>
  )
}

export default GameCard