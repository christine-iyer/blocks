import React from "react";
export default function CardImage({block}) {
  return <img src={block.img} className="card-img-left" alt={block.alt} />;
}

