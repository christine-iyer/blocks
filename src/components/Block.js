import { useRef, useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
export default function Block ({
  block,
  updateBlock,
  deleteBlock
}) {
  const [showInput, setShowInput] = useState(false)
  const inputRef = useRef(null)
  return (
    <>
      <Card style={{width: '50%', padding:'5%', margin: '5%'}}>
        <h4 onClick={() => setShowInput(!showInput)}>{block.alt}</h4>
        <input
          ref={inputRef}
          style={{ display: showInput ? 'block' : 'none' }}
          type='text'
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              const title = inputRef.current.value
              updateBlock(block._id, { title })
              setShowInput(false)
            }
          }}
          defaultValue={block.alt}
        />
        <img src={block.img} alt={block.alt} rel='noreferrer'></img>
        <Button
        style={{margin: '2px'}}
        className='iconTrash' 
        
          onClick={() => deleteBlock(block._id)}
        > Delete
         
        </Button>
      </Card>
    </>
  )
}