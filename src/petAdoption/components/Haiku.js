import { Link } from "react-router-dom";

const Haiku = (props) => {
  const { author, one, two, three, title, color,id,like } = props;

  
  return (
    <Link to={`/details/${id}`} className="haiku">
      <div className="image-container" style={{display:'grid', gridTemplateColumns: "1fr 1fr 1fr", backgroundColor: color}}>
     
      </div>
      <div className="info">
        <h1>{author}</h1>
        <h2>{title}</h2>
        <h2>{`${one} — ${two} — ${three} ${like}`}</h2>
      </div>
    </Link>
  );
};

export default Haiku ;