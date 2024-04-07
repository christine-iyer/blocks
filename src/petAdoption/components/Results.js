import Haiku from "./Haiku";

const Results = ({ haikus }) => {
  return (
    <div className="search">
      {!haikus.length ? (
        <h1>No Haikus Found</h1>
      ) : (
        haikus.map((haiku) => {
          return (
            <Haiku
              key={haiku.id}
              author={haiku.author}
              one={haiku.one}
              two={haiku.two}
              three={haiku.three}
              title={haiku.title}            />
          );
        })
      )}
    </div>
  );
};

export default Results;