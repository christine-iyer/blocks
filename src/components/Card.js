import React from "react";

const Card = ({ item }) => {
  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center">
          {item.map((Val) => {
            return (
              <div
                className="col-md-4 col-sm-6 card my-3 py-3 border-0"
                key={Val.id}
              >
                <div className="card-img-top text-center">
                 
                </div>
                <div className="card-body">
                  <div className="card-title fw-bold fs-4">
                    {Val.author} &nbsp;&nbsp;&nbsp;&nbsp;--&nbsp;&nbsp;
                    {Val.one}
                  </div>
                  <div className="card-text">{Val.two}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Card;