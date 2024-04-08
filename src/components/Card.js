import React from "react";
import setClass from '../utilities/category-class'
import styles from './HaikuList.module.scss'


const Card = ({ item,
  updateHaiku,
  deleteHaiku,
  likeHaiku }) => {
    
  return (
    <>
      <div   style={{  padding: '1%', margin: '1%', textAlign: 'left', boxShadow: '12px 12px 12px 11px item.color'}}>
        <div>
          {item?.map((Val) => {
            return (
              <div
              className={setClass(item,styles)}
                key={Val._id}
              >
                <h1 className="card-img-top text-center">
                 
                </h1>
                <div className="card-body">
                  <div className="card-title fw-bold fs-4">

                    {Val.author} &nbsp;&nbsp;&nbsp;&nbsp;--&nbsp;&nbsp;
                    {Val.one}{Val.two}{Val.three}
                  </div>
                 
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