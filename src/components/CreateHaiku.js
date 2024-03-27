import { Form } from 'react-bootstrap';
import ColorPicker from './ColorPicker';


export default function CreateHaiku({
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
              <option>Author</option>
              <option value="chris">Chris</option>
              <option value="laura">Laura</option>
              <option value="leah">Leah</option>
              <option value="paul">Paul</option>
            </Form.Select>
            <Form.Control type='text' value={haiku.one} name='one' onChange={handleChange} placeholder='Line 1' />
            <Form.Control type='text' value={haiku.two} name='two' onChange={handleChange} placeholder='Line 2' />
            <Form.Control type='text' value={haiku.three} name='three' onChange={handleChange} placeholder='Line 3' />
            <Form.Control type='text' value={haiku.title} name='title' onChange={handleChange} placeholder='Optional title' />
            <Form.Control type="color" id="exampleColorInput" value={haiku.color} name="color"  title="Choose your color" onChange={handleChange}/>
          </div>
         
          <input style={{color: haiku.color}}className='button' type='submit' value='Create Haiku' />
        </Form>
      </div>

    </>
  )
}