import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
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

import { SortableItem } from './SortableItem';

function SortableList({blocks,setBlocks}) {
  // const [languages, setLanguages ] = useState(["https://res.cloudinary.com/dqjhgnivi/image/upload/v1703130349/am6vbcrxs6xeefzxhovw.jpg", 
  // "https://res.cloudinary.com/dqjhgnivi/image/upload/v1703375133/fzvqp4cb3vud7y1r0r9k.jpg", 
  // "https://res.cloudinary.com/dqjhgnivi/image/upload/v1707523421/v6iidkc9ycsvuuobgicm.jpg"]);

  return (
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
        // items: [2, 3, 1]   0  -> 2
        // [1, 2, 3] oldIndex: 0 newIndex: 2  -> [2, 3, 1] 
      });
      
    }
  }
}

export default SortableList;