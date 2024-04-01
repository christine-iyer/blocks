import { useEffect, useState } from "react";

const employees = [
  {
    id: 1,
    name: "Tobe",
    experience: 4,
    department: "Accounting",
  },
  {
    id: 2,
    name: "Jolee",
    experience: 13,
    department: "Services",
  },
  {
    id: 3,
    name: "Muhammad",
    experience: 14,
    department: "Training",
  },
  {
    id: 4,
    name: "Hubie",
    experience: 5,
    department: "Sales",
  },
  {
    id: 5,
    name: "Yoshiko",
    experience: 16,
    department: "Services",
  },
  {
    id: 6,
    name: "Beatrix",
    experience: 17,
    department: "Human Resources",
  },
  {
    id: 7,
    name: "Jacob",
    experience: 4,
    department: "Engineering",
  },
  {
    id: 8,
    name: "Koren",
    experience: 4,
    department: "Accounting",
  },
  {
    id: 9,
    name: "Marissa",
    experience: 20,
    department: "Support",
  },
  {
    id: 10,
    name: "Rufe",
    experience: 18,
    department: "Training",
  },
];

function Search({haikus}) {
  const [filteredHaikus, setFilteredHaikus] = useState(haikus);
  const [author, setAuthor] = useState("");


  // Using set to filter unique values
  const authors = Array.from(
    new Set(haikus.map((haiku) => haiku.author))
  );

  useEffect(() => {
    setFilteredHaikus(
      haikus.filter((haiku) => {
        return (
          (haiku.author) 
        );
      })
    );
  }, [author]);

  const clearFilters = () => {
    setAuthor("");

  };

  return (
    <div className="App">
      <select
        onChange={(e) => setAuthor(e.target.value)}
        value={author}
      >
        <option value="" disabled>
          Select department
        </option>

        {authors.map((author) => {
          return <option key={author}>{author}</option>;
        })}
      </select>

      <button onClick={clearFilters}>Clear All filters</button>
      <ul>
        {filteredHaikus.map((haiku) => {
          const { author,  _id } = haiku;
          return (
            <li key={_id}>
              <div>
                Name: <strong>{author}</strong>
              </div>
              <div>Experience: {_id} year(s)</div>
          
            </li>
          );
        })}
        {filteredHaikus.length === 0 && (
          <div>No employees matching the filter</div>
        )}
      </ul>
    </div>
  );
}

export default Search;