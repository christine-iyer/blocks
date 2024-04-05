import { Link } from "react-router-dom";

const Pet = (props) => {
  const { author, one, two, three, title, color,_id } = props;

  
  return (
    <Link to={`/details/${_id}`} className="pet">
      <div className="image-container" style={{display:'grid', gridTemplateColumns: "1fr 1fr 1fr", backgroundColor: color}}>
     
      </div>
      <div className="info">
        <h1>{author}</h1>
        <h2>{title}</h2>
        <h2>{`${one} — ${two} — ${three}`}</h2>
      </div>
    </Link>
  );
};

export default Pet;