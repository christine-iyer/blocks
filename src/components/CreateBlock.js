import {Form, Button} from 'react-bootstrap';

export default function CreateBlock ({
  createBlock,
  block,
  handleChange
}) {
  return (
    <>
      <h2>Create A Block</h2>
      <div className='container'>
        <Form 
          className='form'
          onSubmit={(e) => {
            e.preventDefault()
            createBlock()
          }}
        >
          <div>
          <Form.Control type='textarea' rows={3} value={block.alt} name='alt' onChange={handleChange} placeholder='Title' />
          <Form.Label>Url<Form.Control type='text' value={block.img} name='img' onChange={handleChange} placeholder='URL' /></Form.Label>
          </div>
          <input className='button' type='submit' value='Create Block' />
        </Form>
      </div>
     
    </>
  )
}