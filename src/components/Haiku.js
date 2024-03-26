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
  const inputRefA = useRef(null)
  const inputRefB = useRef(null)
  const inputRefC = useRef(null)
  const inputRefD = useRef(null)
  return (
    <>
      <Card style={{ width: '20%', height: '10%', padding: '1%', margin: '1%' }}>
        <Card.Title>Haiku</Card.Title>
        <Card.Text onClick={() => setShowA(!showA)}>{haiku.author}</Card.Text>
        <input
        ref={inputRefA}
        type='text'
         
          style={{ display: showA ? 'haiku' : 'none' }}
          
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              // e.preventDefault()
              const author = inputRefA.current.value
              updateHaiku(haiku._id, { author: author })
              setShowA(false)
            }
          }}
          defaultValue={haiku.author}
        />
        <Card.Text onClick={() => setShowB(!showB)}>{haiku.one}</Card.Text>
        <input
          ref={inputRefB}
          style={{ display: showB ? 'haiku' : 'none' }}
          type='text'
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              const one = inputRefB.current.value
              updateHaiku(haiku._id, { one: e.target.value });
              setShowB(false)
            }
          }}
          defaultValue={haiku.one}
        />
        <Card.Text onClick={() => setShowC(!showC)}>{haiku.two}</Card.Text>
        <input
          ref={inputRefC}
          style={{ display: showC ? 'haiku' : 'none' }}
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

        {/* <Card.Img src={haiku.img} alt={haiku.alt} rel='noreferrer'></Card.Img> */}
        <Card.Text onClick={() => setShowD(!showD)}>{haiku.three}</Card.Text>
        <input
          ref={inputRefD}
          style={{ display: showD ? 'haiku' : 'none' }}
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

        {/* <Card.Text onClick={() => setShowInput(!showInput)}> {haiku.author} </Card.Text>
        <input
          ref={inputRefA}
          style={{ display: showInput ? 'haiku' : 'none' }}
          type='text'
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              const author = inputRefA.current.value
              updateHaiku(haiku._id, { author: author })
              setShowInput(false)
            }
          }}
          defaultValue={haiku.author}
        /> */}
        <p>posted on {haiku.createdAt} by {haiku.author}</p>
        <button style={{ color: 'red' }} className="button-32" onClick={() => deleteHaiku(haiku._id)}>X</button>
        <button style={{ 'fontStyle': 'italic' }} className="btn btn-outline-warning" onClick={() => likeHaiku(haiku._id)}> {haiku.like}</button>






      </Card>


    </>
  )
}