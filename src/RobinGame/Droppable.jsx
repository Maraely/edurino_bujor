import React from 'react';
import { useDroppable } from '@dnd-kit/core';

export default function Droppable({ id, children }) {
    const { isOver, setNodeRef } = useDroppable({
        id,
    });
    const style = {
        border: '2px dashed #8C52FE',
        borderRadius: '4px',
        padding: '20px',
        margin: '10px',
        backgroundColor: isOver ? '#ffab2b' : '#fff',
        transition: 'background-color 0.2s ease',
    };

    return (
        <div ref={setNodeRef} style={style}>
            {children}
        </div>
    );
}
