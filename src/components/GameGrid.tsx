import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

const GameGrid = () => {

  const {games, error} = useGames();
  
  //map through games array
  return (
    <>
      {error && <Text>{error}</Text>}

      <SimpleGrid columns={{sm: 1, md:2, xl:3}} padding="10px" spacing={10}>
        {games.map((game) => (
          <GameCard key={game.id} game={game}></GameCard>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
