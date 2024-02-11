import React from "react";
export default function CardImage(blocks) {
  return <img src={blocks.img} className="card-img-left" alt={blocks.alt} />;
}

