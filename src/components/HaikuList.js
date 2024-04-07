import Haiku from './Haiku'

export default function HaikuList ({
  haikus,
  updateHaiku,
  deleteHaiku,
  likeHaiku, 
  commentHaiku
}) {
  return (
    <div>

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