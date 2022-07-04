import { PencilSimpleLine, Trash, Info } from 'phosphor-react'
import React, {useState} from 'react'
import { ITask } from '../interfaces'

interface props {
  task: ITask,
  // inputTask: string,
  // editMode: boolean,
  deleteTask(task: string):void,
  // updateTask():void,
  // updateInput(event: ChangeEvent<HTMLInputElement>):void,
}
export default function Task({task, deleteTask}: props) {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [value, setValue] = useState<string>(task.task);
  const [editValue, setEditValue] = useState<string>('');
  const [valueStatus] = useState<string>(task.status);
  // const [editValueStatus, setEditValueStatus] = useState<string>('');

  function editTask(){
    setEditMode(!editMode)
  }
  function updateValue(){
    setEditMode(false)
    if(editValue.length > 0){
      setValue(editValue)
    }
  }
  return (
    <div className='flex max-w items-center justify-center '>
      {editMode ? 
      ( <div className='flex flex-col'>
        <div>
      <input 
      className='font-mono bg-orange-200  w-[400px]' defaultValue={value} 
      onChange={(e) => setEditValue(e.target.value)}
      />
      <button className='px-5 py-2.5 m-2 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out'
      onClick={() => updateValue()}
      >ok</button>
      <button className='px-5 py-2.5 m-2 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out'
      onClick={() => editTask()}
      >cancel</button>
      </div>
      </div>
      ) 
      : 
      (<>
      <div className='font-mono bg-orange-100  w-[400px] rounded-[2px] '>{value}</div>
      {(valueStatus === 'pendente') ?
       <button className='w-[125px] bg-red-500 rounded-[2px]'>
         pendente
        </button>
        :
        (task.status === 'em andamento') ? 
       <button  className='w-[125px] bg-yellow-500'>
         em andamento
       </button> 
       : 
       <button className='w-[125px] bg-green-500'>
         pronto
       </button> 
      }
      
      <button onClick={() => editTask()}><PencilSimpleLine size={20} /> </button>
      <button onClick={() => deleteTask(task.task)}> <Trash size={20} color="#8e3333" /></button>
      <button onClick={() => alert(`tarefa criada em: ${task.date}`)}> <Info size={20} /></button></>
      )
      }
    </div>
  )
}
