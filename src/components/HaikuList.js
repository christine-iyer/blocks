import Haiku from './Haiku'



export default function HaikuList ({
  haikus,
  updateHaiku,
  deleteHaiku,
  likeHaiku, 
  commentHaiku
}) {
  return (
    <div  style={{ margin: '1rem'}}>
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
    </div>
  )
}