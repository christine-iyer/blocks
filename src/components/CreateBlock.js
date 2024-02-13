
export default function CreateBlock ({
  createBlock,
  block,
  handleChange
}) {
  return (
    <>
      <h2>Create A Block</h2>
      <div className='container'>
        <form 
          className='form'
          onSubmit={(e) => {
            e.preventDefault()
            createBlock()
          }}
        >
          <div>
          <label>Title<input type='text' value={block.alt} name='alt' onChange={handleChange} placeholder='Title' /></label>
          <label>Url<input type='text' value={block.img} name='img' onChange={handleChange} placeholder='URL' /></label>
          </div>
          <input className='button' type='submit' value='Create Block' />
        </form>
      </div>
     
    </>
  )
}