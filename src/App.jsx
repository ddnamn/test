import React, {useState} from 'react';
import {DndContext} from '@dnd-kit/core';

import {Droppable} from './Droppable';
import {Draggable} from './Draggable';

export default function App() {
  const [isDropped, setIsDropped] = useState(false);
  const draggableMarkup = (
    <Draggable>🛵💌</Draggable>
  );
  
  return (
    <section className='flex justify-center items-center w-screen' >

    <div className='bg-yellow-300 border-4 mt-40 flex justify-center items-center flex-row-reverse p-6'>

    <DndContext onDragEnd={handleDragEnd} >
      {!isDropped ? draggableMarkup : null}
      <Droppable>
        {isDropped ?  <Draggable>🫰🏼 EAAA 🤣</Draggable> : <span className='font-bold text-xl '>Drop here</span>}
      </Droppable>
    </DndContext>
    </div>
    </section>
  );
  
  function handleDragEnd(event) {
    if (event.over && event.over.id === 'droppable') {
      setIsDropped(true);
    }
  }
}