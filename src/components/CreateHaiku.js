import {Form} from 'react-bootstrap';

export default function CreateHaiku ({
  createHaiku,
  haiku,
  handleChange
}) {
  return (
    <>
      <h2>Create A Haiku</h2>
      <div className='container'>
        <Form 
          className='form'
          onSubmit={(e) => {
            e.preventDefault()
            createHaiku()
          }}
        >
          <div>
          <Form.Select aria-label="Default select example" value={haiku.author} onChange={handleChange} name="author">
    <option>Select an option from this select menu</option>
    <option value="chris">Chris</option>
    <option value="laura">Laura</option>
    <option value="leah">Leah</option>
    <option value="paul">Paul</option>
  </Form.Select>

          <Form.Control type='textarea' rows={3} value={haiku.one} name='one' onChange={handleChange} placeholder='Line 1' />
          <Form.Control type='textarea' rows={3} value={haiku.two} name='two' onChange={handleChange} placeholder='Line 2' />
          <Form.Control type='textarea' rows={3} value={haiku.three} name='three' onChange={handleChange} placeholder='Line 3' />

         
          </div>
          <input className='button' type='submit' value='Create Haiku' />
        </Form>
      </div>
     
    </>
  )
}