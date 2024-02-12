// import { useSortable } from "@dnd-kit/sortable";
// import {CSS} from "@dnd-kit/utilities";
// import Card from 'react-bootstrap/Card';

// export function SortableItem(props) {
//     // props.id
//     // JavaScript

//     const {
//         attributes,
//         listeners,
//         setNodeRef,
//         transform,
//         transition
//     } = useSortable({id: props.id});

//     const style = {
//         transform: CSS.Transform.toString(transform),
//         transition
//     }

//     return (
//         <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
//             <Card className="m-3">{props.id}</Card>
          
//         </div>
//     )
// }
//starting here follow this format
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import Card from 'react-bootstrap/Card';

export function SortableItem({ block }) {
    // block.id
    // JavaScript

    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition
    } = useSortable({ id: block.id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition
    }

    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
            <Card 
            // body className="m-3"
                // style={{
                //     width: '15rem',
                //     display: "grid",
                //     alignText: "left",
                //     gap: "1rem"
                // }}
                >
                <Card.Body>
                    <Card.Title>{block.alt}</Card.Title>
                    <Card.Subtitle>{block.alt}</Card.Subtitle>
                    <img src={block.img} alt={block.img}>{block.img}</img>
                </Card.Body>
            </Card>
        </div>
    )
}