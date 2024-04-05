import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchPet from "./fetchPet";

const Details = () => {
  const { id } = useParams();
  const results = useQuery(["details", id], fetchPet);

  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">🌀🌀</h2>
      </div>
    );
  }

  const pet = results.data.pets[0];

  return (
    <div className="details">
      <div>
        <h1>{pet.author}</h1>
        <h2>{`${pet.title} — ${pet.one} — ${pet.two}, ${pet.three}`}</h2>
        <button>Adopt {pet.author}</button>
        <p>{pet.description}</p>
      </div>
    </div>
  );
};

export default Details;