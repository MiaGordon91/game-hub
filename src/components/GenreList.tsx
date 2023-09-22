import { HStack, Image, List, ListItem, Text, Spinner } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from '../services/cropped-image';

const GenreList = () => {
  const { genres, isLoading } = useGenres();
 
  if (isLoading) return <Spinner />;

  return (
    <List>
      {genres.map((genre) => (
        <ListItem>
          <HStack paddingY="4px" >
            <Image boxSize={'40px'} borderRadius={4} src={getCroppedImageUrl(genre.image_background)}/>
            <Text>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
