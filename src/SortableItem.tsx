import React, {CSSProperties} from 'react';
import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';

export function SortableItem(props: any) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
    } = useSortable({id: props.id});

    const style: CSSProperties = {
        transform: CSS.Transform.toString(transform),
        transition: transition ? transition : 'ease-in',
    };

    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
            {<div>
                <h5>DnD</h5>
                <p>Elemento</p>
            </div>}
        </div>
    );
}
