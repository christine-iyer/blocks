import { useRef, useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import '../App.css'
export default function Block ({
  block,
  updateBlock,
  deleteBlock
}) {
  const [showInput, setShowInput] = useState(false)
  const inputRef = useRef(null)
  return (
    <>
      <Card style={{width: '20%', height: '10%', padding:'1%', margin: '1%'}}>
        <Card.Title onClick={() => setShowInput(!showInput)}>{block.alt}</Card.Title>
        <input
          ref={inputRef}
          style={{ display: showInput ? 'block' : 'none' }}
          type='text'
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              const alt = inputRef.current.value
              updateBlock(block._id, { alt: alt })
              setShowInput(false)
            }
          }}
          defaultValue={block.alt}
        />
        <Card.Img src={block.img} alt={block.alt} rel='noreferrer'></Card.Img>

        <button style={{color: 'red'}}className="button-32"  onClick={() => deleteBlock(block._id)}>X</button>




       
      </Card>
      

    </>
  )
}