import {useState} from 'react'

export default function Search({haiku }) {
     const [searchItem, setSearchItem] = useState('')
     const handleSubmit = (e) => {
          const searchItem = e.target.value;
          setSearchItem(searchItem)
        console.log(searchItem)
     }

  return (
    <div>
     <input 
     type="option"
     value={searchItem}
     onSelect={handleSubmit}
     placeholder='Select by Artist Name'/>
    </div>
  )
}
