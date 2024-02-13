import { useState , useEffect} from 'react'
import SortableItem from './components/SortableItem';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [block, setBlock] = useState({
    alt: '',
    img: ''
  })
  const [blocks, setBlocks] = useState([])
  const [foundBlocks, setFoundBlocks] = useState(null)
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
      <header className="App-header">
      
        
      <SortableItem />

        
      </header>
    </div>
  );
}

export default App;
