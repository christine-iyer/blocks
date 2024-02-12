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

export function SortableItem({ id, alt, img }) {

    // JavaScript

    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition
    } = useSortable({ id: id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition
    }

    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
            <Card 
            body className="m-3"
                style={{
                    backgroundColor: 'aqua',
                    width: '15rem',
                    display: "grid",
                    alignText: "left",
                    gap: "1rem"
                }}
                >
                <Card.Body key={id}>
                    <Card.Title style={style}>{alt}</Card.Title>
                    <Card.Subtitle>{alt}</Card.Subtitle>
                    <img src={img} alt={img}>{img}</img>
                </Card.Body>
            </Card>
        </div>
    )
}