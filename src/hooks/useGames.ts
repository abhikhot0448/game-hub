import { GameQuery } from "../App";
import useData from "./useData";
import { Genres } from "./useGenres";

export interface PlatForm {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: PlatForm }[];
  metacritic: number;
}

const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery?.genre?.id,
        platform: gameQuery?.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.search,
      },
    },
    [gameQuery]
  );

export default useGames;
