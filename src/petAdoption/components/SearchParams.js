import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Results from "./Results";
import fetchSearch from "./fetchSearch";
const AUTHORS = ["Chris", "Claire", "Laura", "Leah", "Paul"];

const SearchParams = ({foundHaikus}) => {
  const [requestParams, setRequestParams] = useState({

    author: ""
  });
  const [author, setAuthor] = useState("");


  const results = useQuery(["search", requestParams], fetchSearch);
  const haikus = results?.data?.haikus ?? [];
  

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const obj = {
            author: formData.get("author") ?? "",
            
          };
          setRequestParams(obj);
        }}
      >
        
        <label htmlFor="author">
          Author
          <select
            id="author"
            name="author"
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
            onBlur={(e) => {
              setAuthor(e.target.value);
            }}
          >
            <option />
            {AUTHORS.map((author) => (
              <option key={author} value={author}>
                {author}
              </option>
            ))}
          </select>
        </label>

        

        <button>Submit</button>
      </form>
      <Results haikus={haikus} 
      author={author}/>
    </div>
  );
};

export default SearchParams;