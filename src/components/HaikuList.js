import Haiku from './Haiku'
import Search from './Search'
import { useRef, useState } from'react'
import styles from './HaikuList.module.scss'




export default function HaikuList ({
  haikus,
  updateHaiku,
  deleteHaiku,
  likeHaiku, 
  commentHaiku
}) {
  return (
    <div>
      <Search />
    <ul  style={{ margin: '1rem', 'display': 'flex',flexDirection: 'row',flexWrap: 'wrap'}}>
      {
            haikus.length
              ? haikus.map(haiku => (
                <Haiku
                  key={haiku._id}

                  haiku={haiku}
                  updateHaiku={updateHaiku}
                  deleteHaiku={deleteHaiku}
                  likeHaiku={likeHaiku}
                  commentHaiku={commentHaiku}
                />
              ))
              : <>
                <h2>No Haikus Yet... Add one in the Form Above</h2>
                </>
        }
    </ul>
    </div>
  )
}