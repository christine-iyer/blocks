import Block from './Block'

export default function BlockList ({
  blocks,
  updateBlock,
  deleteBlock
}) {
  return (
    <ul>
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