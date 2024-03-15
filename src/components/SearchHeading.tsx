import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
interface Props {
  gameQuery: GameQuery;
}

const SearchHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.genre?.name || ""} ${
    gameQuery.platform?.name || ""
  } Games`;
  return (
    <Heading as="h1" marginBottom={5}>
      {heading}
    </Heading>
  );
};

export default SearchHeading;
