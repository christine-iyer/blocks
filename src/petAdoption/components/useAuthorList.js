import { useQuery } from "@tanstack/react-query";
import fetchAuthorList from "./fetchAuthorList";

export default function useBreedList(haiku) {
  const results = useQuery(["author", haiku], fetchAuthorList);

  return [results?.data?.author ?? [], `results.status , "what"`];
}