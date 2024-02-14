import Block from './Block'

export default function BlockList ({
  blocks,
  updateBlock,
  deleteBlock
}) {
  return (
    <ul style={{display:"flex",flexWrap:"wrap", margin: '1rem'}}>
      {
            blocks.length
              ? blocks.map(block => (
                <Block
                  key={block._id}
                  block={block}
                  updateBlock={updateBlock}
                  deleteBlock={deleteBlock}
                />
              ))
              : <>
                <h2>No Blocks Yet... Add one in the Form Above</h2>
                </>
        }
    </ul>
  )
}