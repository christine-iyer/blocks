import Pet from "./Pet";

const Results = ({ haikus }) => {
  return (
    <div className="search">
      {!haikus.length ? (
        <h1>No Pets Found</h1>
      ) : (
        haikus.map((haiku) => {
          return (
            <Pet
              author={haiku.author}
              key={haiku._id}
              one={haiku.one}
              two={haiku.two}
              three={haiku.three}
              location={haiku.title}
              id={haiku._id}
            />
          );
        })
      )}
    </div>
  );
};

export default Results;