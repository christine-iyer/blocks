import { useState, useEffect } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import CreateBlock from './components/CreateBlock';
import BlockList from './components/BlockList';
import { SortableItem } from './components/SortableItem';
import {
  DndContext,
  closestCenter
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy
} from "@dnd-kit/sortable";



function App() {
  const [block, setBlock] = useState({
    alt: '',
    img: ''
  })
  const [blocks, setBlocks] = useState([])
  const [foundBlocks, setFoundBlocks] = useState(null)
  const [languages, setLanguages] = useState(["JavaScript", "Python", "TypeScript"]);
  const handleChange = (event) => {
    setBlock({ ...block, [event.target.name]: event.target.value })
  }

  const createBlock = async () => {
    try {
      const response = await fetch('/api/blocks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...block })
      })
      const data = await response.json()
      setBlocks([data, ...blocks])
    } catch (error) {
      console.error(error)
    } finally {
      setBlock({
        alt: '',
        img: ''
      })
    }
  }
  const deleteBlock = async (id) => {
    try {
      const response = await fetch(`/api/blocks/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const data = await response.json()
      const blocksCopy = [...blocks]
      const index = blocksCopy.findIndex(block => id === block._id)
      blocksCopy.splice(index, 1)
      setBlocks(blocksCopy)
    } catch (error) {
      console.error(error)
    }
  }
  const updateBlock = async (id, updatedData) => {
    try {
      const response = await fetch(`/api/blocks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedData)
      })
      const data = await response.json()
      const blocksCopy = [...blocks]
      const index = blocksCopy.findIndex(block => id === block._id)
      blocksCopy[index] = { ...blocksCopy[index], ...updatedData }
      setBlocks(blocksCopy)
    } catch (error) {
      console.error(error)
    }
  }

  const listBlocks = async () => {
    try {
      const response = await fetch('/api/blocks', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',

        }
      })
      const data = await response.json()
      setBlocks(data)
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    listBlocks()
  }, [foundBlocks])
  return (
    <div className="App">
      <div>
        <CreateBlock style={{ height: '50%', margin: "5%" }}
          createBlock={createBlock}
          block={block}
          handleChange={handleChange} />

        <BlockList
          blocks={blocks}
          deleteBlock={deleteBlock}
          updateBlock={updateBlock}/>
      </div>
      <div>
        <DndContext
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}>
          <Container className="p-3" style={{"width": "50%"}} align="center" >
            <h3> Titile</h3>
            <SortableContext items={languages} strategy={verticalListSortingStrategy}>
 {languages.map(language=><SortableItem key={language} id={language}/>)} 
{/* {blocks.map(({id, img, alt}) => <SortableItem key={id} id={id} img={img} alt={alt} />)} */}
            </SortableContext>
          </Container>


        </DndContext>

      </div>
    </div>
  )
function handleDragEnd(event){
  console.log("Drag End")
  const {active,over}=event
  console.log('active'+ active.id)
  console.log('over' + over.id)
  if(active.id !== over.id) {
    setLanguages((items) => {
      const activeIndex = items.indexOf(active.id);
      const overIndex = items.indexOf(over.id);
      //        const activeIndex = items.findIndex(({ id }) => id ===  active.id);
       // const overIndex = items.findIndex(({ id }) => id ===  over.id);
      console.log(arrayMove(items, activeIndex, overIndex));
      return arrayMove(items, activeIndex, overIndex);
    });
    
  }


}
}

export default App;
