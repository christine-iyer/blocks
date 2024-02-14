import { useState , useEffect} from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateBlock from './components/CreateBlock';
import BlockList from './components/BlockList';
import List from './components/List'



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

          <List setBlocks={setBlocks} />
          
    </div>
  );
}

export default App;
