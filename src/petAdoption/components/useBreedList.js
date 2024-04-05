import { useQuery } from "@tanstack/react-query";
import fetchBreedList from "./fetchBreedList";

export default function useBreedList(haiku) {
  const results = useQuery(["author", haiku], fetchBreedList);

  return [results?.data?.author ?? [], results.status];
}