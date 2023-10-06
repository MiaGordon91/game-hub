import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Platform } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genres } from "../hooks/useGenres";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({gameQuery}: Props ) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];

  //map through games array
  return (
    <>
      {error && <Text>{error}</Text>}

      <SimpleGrid columns={{ sm: 1, md: 2, xl: 3 }} padding="10px" spacing={3}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}

        {data.map((data) => (
          <GameCardContainer key={data.id}>
            <GameCard game={data}></GameCard>
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
