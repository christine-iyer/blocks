import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchPet from "./fetchPet";

const Details = () => {
  const { _id } = useParams();
  const results = useQuery(["details", _id], fetchPet);

  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">🌀🌀</h2>
      </div>
    );
  }

  const haiku = results.data.haikus[0];
  console.log(haiku);

  return (
    <div className="details">
      <div>
        <h1>{haiku.author}</h1>
        <h2>{`${haiku.title} — ${haiku.one} — ${haiku.two}, ${haiku.three}`}</h2>
        <button>Adopt {haiku.author}</button>
        <p>{haiku.description}</p>
      </div>
    </div>
  );
};

export default Details;