import {
  HStack,
  Image,
  List,
  ListItem,
  Button,
  Spinner,
  Heading,
} from "@chakra-ui/react";
import useGenres, { Genres } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/cropped-image";

interface Props {
  // property which is a function that takes a genre object and returns void
  onSelectGenre: (genre: Genres) => void;
  selectedGenre: Genres | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isLoading } = useGenres();

  if (isLoading) return <Spinner />;

  return (
    <>
    <Heading fontSize='2xl' marginBottom={5}>Genres</Heading>
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id}>
          <HStack paddingY="4px">
            <Image
              boxSize={"40px"}
              borderRadius={4}
              objectFit='cover'
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button
              variant="link"
              fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}
              onClick={() => onSelectGenre(genre)}>
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
    </>
  );
};

export default GenreList;
