import {useState, useRef} from "react";
import SingleCard from "./SingleCard"
import '../App.css'


export default function HaikuCard({ item,
  updateHaiku,
  deleteHaiku,
  likeHaiku }) {
  
    
  return (
    <>
      <div   >
        <div style={{  padding: '1%', margin: '1%', textAlign: 'left', boxShadow: '12px 12px 12px 11px item.color', 'display': 'flex',flexDirection: 'row',flexWrap: 'wrap'}}>
          {item?.map((Val) => {
            return (
              <SingleCard
              key={Val._id}
              Val={Val}
              updateHaiku={updateHaiku}
              deleteHaiku = {deleteHaiku}
              likeHaiku={likeHaiku}/>
        


            
          );
          })}
        </div>
      </div>
    </>
  );
};

