import { useQuery } from "@tanstack/react-query";
import fetchBreedList from "./fetchBreedList";

export default function useBreedList(haiku) {
  const results = useQuery(["authors", haiku], fetchBreedList);

  return [results?.data?.authors ?? [], results.status];
}