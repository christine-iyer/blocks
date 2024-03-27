import { useRef, useState } from 'react'
import Card from 'react-bootstrap/Card'
import '../App.css'
export default function Haiku({
  haiku,
  updateHaiku,
  deleteHaiku,
  likeHaiku,
}) {
  const [showA, setShowA] = useState(false)
  const [showB, setShowB] = useState(false)
  const [showC, setShowC] = useState(false)
  const [showD, setShowD] = useState(false)
  const [showE, setShowE] = useState(false)
  const inputRefA = useRef(null)
  const inputRefB = useRef(null)
  const inputRefC = useRef(null)
  const inputRefD = useRef(null)
  const inputRefE = useRef(null)
  return (
    <>
      <Card style={{ width: '20%', height: '10%', padding: '1%', margin: '1%', textAlign: 'left' }}>
        <Card.Title onClick={() => setShowE(!showE)}> T {haiku.title}</Card.Title>
        <input
          ref={inputRefE}
          style={{ display: showE ? 'block' : 'none' }}
          type='text'
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              const title = inputRefE.current.value
              updateHaiku(haiku._id, { title: title });
              setShowE(false)
            }
          }}
          defaultValue={haiku.title}
        />

        <Card.Text className="text" onClick={() => setShowB(!showB)}>{haiku.one}</Card.Text>
        <input
          ref={inputRefB}
          style={{ display: showB ? 'block' : 'none' }}
          type='text'
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              const one = inputRefB.current.value
              updateHaiku(haiku._id, { one: one });
              setShowB(false)
            }
          }}
          defaultValue={haiku.one}
        />
        <Card.Text className="text" onClick={() => setShowC(!showC)}>{haiku.two}</Card.Text>
        <input
          ref={inputRefC}
          style={{ display: showC ? 'block' : 'none' }}
          type='text'
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              const two = inputRefC.current.value
              updateHaiku(haiku._id, { two: two })
              setShowC(false)
            }
          }}
          defaultValue={haiku.two}
        />
        <Card.Text className="texty" onClick={() => setShowD(!showD)}>{haiku.three}</Card.Text>
        <input
          ref={inputRefD}
          style={{ display: showD ? 'block' : 'none' }}
          type='text'
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              const three = inputRefD.current.value
              updateHaiku(haiku._id, { three: three })
              setShowD(false)
            }
          }}
          defaultValue={haiku.three}
        />
        <span><p onClick={() => setShowA(!showA)}>by {haiku.author}</p> <input
          ref={inputRefA}
          type='text'
          style={{ display: showA ? 'block' : 'none' }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              const author = inputRefA.current.value
              updateHaiku(haiku._id, { author: author })
              setShowA(false)
            }
          }}
          defaultValue={haiku.author}
        />
        <p style={{
          display: "flex", alignItems: "center",
          position: "relative", zIndex: 1
        }}> {new Date(haiku.updatedAt).toLocaleDateString()}  </p>
        </span>
        
        <button style={{ color: 'red' }} className="button-32" onClick={() => deleteHaiku(haiku._id)}>X</button>
        <button style={{ 'fontStyle': 'italic' , 'width':'20%', 'display':'inlineBlock'}} className="btn btn-outline-warning" onClick={() => likeHaiku(haiku._id)}>♥️{haiku.like}</button>
        <button style={{ 'fontStyle': 'italic' , 'width':'20%', 'display':'inlineBlock'}} className="btn btn-outline-warning" onClick={() => likeHaiku(haiku._id)}>{haiku.comment}</button>
      </Card>
    </>
  )
}