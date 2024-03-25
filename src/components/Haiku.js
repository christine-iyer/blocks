import { useRef, useState } from 'react'
import Card from 'react-bootstrap/Card'
import '../App.css'
export default function Haiku ({
  haiku,
  updateHaiku,
  deleteHaiku, 
  likeHaiku,
}) {
  const [showInput, setShowInput] = useState(false)
  const inputRefA = useRef(null)
  const inputRefB = useRef(null)
  const inputRefC = useRef(null)
  const inputRefD = useRef(null)
  return (
    <>
      <Card style={{width: '20%', height: '10%', padding:'1%', margin: '1%'}}>
      <Card.Title>Haiku</Card.Title>
      <Card.Text onClick={() => setShowInput(!showInput)}>{haiku.author}</Card.Text>
        <input
          ref={inputRefA}
          style={{ display: showInput ? 'haiku' : 'none' }}
          type='text'
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault()
              const author = inputRefA.current.value
              updateHaiku(haiku._id, { author: author })
              setShowInput(false)
            }
          }}
          defaultValue={haiku.author}
        />
         <Card.Text onClick={() => setShowInput(!showInput)}>{haiku.one}</Card.Text>
        <input
          ref={inputRefB}
          style={{ display: showInput ? 'haiku' : 'none' }}
          type='text'
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              const one = inputRefB.current.value
              updateHaiku(haiku._id, { one: one })
              setShowInput(false)
            }
          }}
          defaultValue={haiku.one}
        />
         <Card.Text onClick={() => setShowInput(!showInput)}>{haiku.two}</Card.Text>
        <input
          ref={inputRefC}
          style={{ display: showInput ? 'haiku' : 'none' }}
          type='text'
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              const two = inputRefC.current.value
              updateHaiku(haiku._id, { two: two })
              setShowInput(false)
            }
          }}
          defaultValue={haiku.two}
        />

        {/* <Card.Img src={haiku.img} alt={haiku.alt} rel='noreferrer'></Card.Img> */}
        <Card.Text onClick={() => setShowInput(!showInput)}>{haiku.three}</Card.Text>
        <input
          ref={inputRefD}
          style={{ display: showInput ? 'haiku' : 'none' }}
          type='text'
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              const three = inputRefD.current.value
              updateHaiku(haiku._id, { three: three })
              setShowInput(false)
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
        <button style={{color: 'red'}}className="button-32"  onClick={() => deleteHaiku(haiku._id)}>X</button>
        <button style={{ 'fontStyle': 'italic' }} className="btn btn-outline-warning" onClick={() => likeHaiku(haiku._id)}> {haiku.like}</button>
               




       
      </Card>
      

    </>
  )
}