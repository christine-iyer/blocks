import { useState, useEffect } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Modal, Button } from 'react-bootstrap';
import CreateHaiku from './components/CreateHaiku';
import HaikuList from './components/HaikuList';
import Buttons from './components/Buttons';
import Card from './components/Card';



function App() {
  const [haiku, setHaiku] = useState({
    author: '',
    one: '',
    two: '',
    three: '',
    title: '',
    color: '',
    like: 0,
    comment: ''
  })
  const [haikus, setHaikus] = useState([])
  const [item, setItem] = useState(haikus);
  

  const menuItems = [...new Set(haikus?.map((Val) => Val.author))];

  const filterItem = (curcat) => {
    const newItem = haikus?.filter((newVal) => {
      return newVal.author === curcat;
    });
    setItem(newItem);
  };
 
  const [foundHaikus, setFoundHaikus] = useState(null)

  const handleChange = (event) => {
    setHaiku({ ...haiku, [event.target.name]: event.target.value })
  }
  const [show, setShow] = useState(false);
  const [showAD, setShowAD] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleShowA = () => setShowAD(false);
  const handleShowD = () => setShowAD(true);




  

  const createHaiku = async () => {
    try {
      const response = await fetch('/api/haikus', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...haiku })
      })
      const data = await response.json()
      setHaikus([data, ...haikus])
    } catch (error) {
      console.error(error)
    } finally {
      setHaiku({
        author: '',
        one: '',
        two: '',
        three: '',
        title: '',
        color: '',
        like: 0,
        comment: ''
      })
    }
  }
  const likeHaiku = async (id) => {
    try {
      const index = haikus.findIndex((haiku) => haiku._id === id)
      const haikusCopy = [...haikus]
      const subject = haikusCopy[index]
      subject.like = subject.like + 1
      const response = await fetch(`/api/haikus/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(subject)
      })
      const likedHaiku = await response.json()
      const likedHaikusCopy = [likedHaiku, ...haikus]
      setHaikus(likedHaikusCopy)
      setHaikus(haikusCopy)
    } catch (error) {
      console.error(error)
    }
  }

  const deleteHaiku = async (id) => {
    try {
      const response = await fetch(`/api/haikus/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const data = await response.json()
      const haikusCopy = [...haikus]
      const index = haikusCopy.findIndex(haiku => id === haiku._id)
      haikusCopy.splice(index, 1)
      setHaikus(haikusCopy)
    } catch (error) {
      console.error(error)
    }
  }
  const updateHaiku = async (id, updatedData) => {
    try {
      const response = await fetch(`/api/haikus/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedData)
      })
      const data = await response.json()
      const haikusCopy = [...haikus]
      const index = haikusCopy.findIndex(haiku => id === haiku._id)
      haikusCopy[index] = { ...haikusCopy[index], ...updatedData }
      setHaikus(haikusCopy)
    } catch (error) {
      console.error(error)
    }
  }



  const listHaikus = async () => {
    try {
      const response = await fetch('/api/haikus', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      })
      const data = await response.json()
      setHaikus(data)
      console.log(data[7].author)
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    listHaikus()
  }, [foundHaikus])


  // if the title field is empty, create a title. The title will be derived an array that contains all the words in the lines. They get jumbled together and then the first two are chosen.
  // const createTitle = async (title) => {}


  return (
    <div className="App">
      <div>
        <button variant="primary" onClick={handleShow}>Peek-A-Boo Haiku</button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Body>
            <CreateHaiku style={{ height: '50%', margin: "5%", width: '80%' }}
              createHaiku={createHaiku}
              haiku={haiku}
              handleChange={handleChange} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        
        <Buttons
            filterItem={filterItem}
            setItem={setItem}
            setHaikus={setHaikus}
            menuItems={menuItems}
          />
               <Card item={item} haikus={haikus} />

        <HaikuList
          haikus={haikus}
          filterItem={filterItem}
          deleteHaiku={deleteHaiku}
          updateHaiku={updateHaiku}
          likeHaiku={likeHaiku} />
      </div>
      <div>

      </div>
    </div>
  )

}

export default App;
