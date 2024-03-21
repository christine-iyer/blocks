import { useSortable } from "@dnd-kit/sortable";
import {CSS} from "@dnd-kit/utilities";
import Card from 'react-bootstrap/Card';

export function SortableItem(props) {


    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition
    } = useSortable({id: props.id});

    const style = {
        transform: CSS.Transform.toString(transform),
        transition
    }

    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
            <Card body className="m-3" style={{width:'30%'}} key={props.id}>{props.id}
                {/* <Card.Img src={props.img} alt={props.alt}></Card.Img> */}
            </Card>
          {/* <Card.Img body className="m-3">{props.id}, {props.img}, {props.alt}</Card.Img>  */}
          
        </div>
    )
}