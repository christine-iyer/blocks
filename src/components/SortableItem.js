import Block from "./Block";
import { useSortable } from "@dnd-kit/sortable";
import {CSS} from "@dnd-kit/utilities";


export function SortableItem(block) {
    // props.id
    // JavaScript

    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition
    } = useSortable({id: block.img});

    const style = {
        transform: CSS.Transform.toString(transform),
        transition
    }

    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
            <Block block={block}/>
        </div>
    )
}