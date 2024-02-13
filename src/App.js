import { useState , useEffect} from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateBlock from './components/CreateBlock';


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
      
        
<CreateBlock />

        
      </header>
    </div>
  );
}

export default App;
