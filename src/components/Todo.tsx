import {PlusCircle} from 'phosphor-react'
import { ChangeEvent, useState } from 'react'
import Task from './Task'

interface TodoList {
    task: string
}
export default function Todo() {

 const [todoList, setTodoList] = useState<TodoList[]>([])
 const [task, setTask] = useState<string>('')

  function createTask(): void {
   setTodoList([...todoList,
    {
      task, 
    }
    ]);
   setTask('') 
  console.log([...todoList, task])
 }

 const handleChange = (event: ChangeEvent<HTMLInputElement>):void => {
  const { value } = event.target;
  setTask(value);
  console.log(value);
 }

 return (
   <div className=' flex items-center justify-center'>

     <div className='w-[700px] h-[500px] bg-gray-500 flex flex-col items-center justify-center '>
        {todoList.map((item) => {
          return  <Task key={item.task} task={item.task}/>
        })}

        <input
         type='text'
         onChange={handleChange}
         value={task}
        />

        <button
         className='text-zinc-100 hover:bg-gray-700 transition-colors disabled:opacity-50 space-x-1 rounded-[10px] bg-slate-900 flex items-center justify-center '
         onClick={createTask}>

         <PlusCircle
         size={25}
         />

         <span
         className='p-2 text-[15px]'>
         Adicionar tarefa
         </span>

        </button>

     </div>

 </div>
    )
}
