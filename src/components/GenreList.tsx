import { HStack, Image, List, ListItem, Button, Spinner } from "@chakra-ui/react";
import useGenres, { Genres } from "../hooks/useGenres";
import getCroppedImageUrl from '../services/cropped-image';

interface Props {
  // property which is a function that takes a genre object and returns void
  onSelectGenre: (genre: Genres) => void;
}

const GenreList = ({onSelectGenre}: Props) => {
  const { data, isLoading } = useGenres();
 
  if (isLoading) return <Spinner />;

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id}>
          <HStack paddingY="4px">
            <Image boxSize={'40px'} borderRadius={4} src={getCroppedImageUrl(genre.image_background)}/>
            <Button variant="link" onClick={() => onSelectGenre(genre)}>{genre.name}</Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
