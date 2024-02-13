import { useState , useEffect} from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateBlock from './components/CreateBlock';
import BlockList from './components/BlockList';
import Container from 'react-bootstrap/Container';
import {
  DndContext,
  closestCenter
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy
} from "@dnd-kit/sortable";
import { SortableItem } from './components/SortableItem';



function App() {
  const [block, setBlock] = useState({
    alt: '',
    img: ''
  })
  const [blocks, setBlocks] = useState([])
  const [foundBlocks, setFoundBlocks] = useState(null)

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

  
      <CreateBlock style={{ height: '50%', margin: "5%" }}
          createBlock={createBlock}
          block={block}
          handleChange={handleChange}/>
          <BlockList 
          blocks={blocks}
          deleteBlock={deleteBlock}
          updateBlock={updateBlock}
          />
           <DndContext
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <Container className="p-3" style={{"width": "50%"}} align="center">
        <h3>The best programming languages!</h3>
        <SortableContext
          items={blocks}
          strategy={verticalListSortingStrategy}
        >
          {/* We need components that use the useSortable hook */}
          {blocks.map(block => <SortableItem key={block} id={block}/>)}
        </SortableContext>
      </Container>
    </DndContext>
    </div>
  );
  function handleDragEnd(event) {
    console.log("Drag end called");
    const {active, over} = event;
    console.log("ACTIVE: " + active.id);
    console.log("OVER :" + over.id);

    if(active.id !== over.id) {
      setBlocks((items) => {
        const activeIndex = items.indexOf(active.id);
        const overIndex = items.indexOf(over.id);
        console.log(arrayMove(items, activeIndex, overIndex));
        return arrayMove(items, activeIndex, overIndex);
      });
      
    }
  }
  
}

export default App;
