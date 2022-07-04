import { PencilSimpleLine, Trash, Info } from 'phosphor-react'
import React from 'react'
import { ITask } from '../interfaces'

interface props {
  task: ITask,
  deleteTask(task: string):void,
}
export default function Task({task, deleteTask}: props) {
  return (
    <div className='flex max-w items-center justify-center '>
      <div className='font-mono bg-orange-100  w-[400px]'>{task.task}</div>
      <button  onClick={() =>console.log('click edit')} className='w-[125px]'>{task.status}</button>
      <button  onClick={() =>console.log('click edit')}><PencilSimpleLine size={20}/></button>
      <button  onClick={() => deleteTask(task.task)}> <Trash size={20} color="#8e3333" /></button>
      <button  onClick={() =>alert(`tarefa criada em: ${task.date}`)}> <Info size={20} /></button>
    </div>
  )
}
