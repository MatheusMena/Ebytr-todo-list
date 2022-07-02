import { PencilSimpleLine, Trash, Copy } from 'phosphor-react'
import React from 'react'

interface TaskObj {
  task: string,
}
export default function Task( task: TaskObj) {
  return (
    <div className='flex  items-center justify-center '>
      <div className='m-2 p-2 bg-gray-400 w-[350px] space-x-1'>{task.task}</div>
      <button  onClick={() =>console.log('click edit')}><PencilSimpleLine size={20}/></button>
      <button  onClick={() =>console.log('click remove')}> <Trash size={20} color="#8e3333" /></button>
      <button  onClick={() =>console.log('click delete')}> <Copy size={20} /></button>
    </div>
  )
}
