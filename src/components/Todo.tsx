import { PlusCircle, ListBullets } from 'phosphor-react';
import { ChangeEvent, useState } from 'react';
import Task from './Task';
import { ITask } from '../interfaces';

export default function Todo() {

  const [todoList, setTodoList] = useState<ITask[]>([]);
  const [task, setTask] = useState<string>('');
  const [taskStatus, setTaskStatus] = useState<string>('pendente');
  const [filter, setFilter] = useState<string>('data de criação');

  async function createTask() {
    if (!task || undefined) {
      return alert('Por favor escreva algo antes de criar sua tarefa');
    }
    if (task.length > 37) {
      return alert('Você atingiu o limite máximo de caracteres, talvez divir a tarefa em partes ou sintetiza-lá possa te ajudar');
    }
     setTodoList([...todoList,
      {
        task,
        status: taskStatus,
        date: new Date(),
        filter: taskStatus,
      }
    ]);
    setTask('');
    console.log([...todoList, { task, status: taskStatus }]);
  }

  function handleChange(event: ChangeEvent<(HTMLInputElement | HTMLSelectElement)>): void {
    const { value, name } = event.target;
    if (name === 'task') {
      setTask(value);
      console.log(value);
    }
    if (name === 'status') {
      setTaskStatus(value);
      console.log(value);
    }
  }

  function handleChangeFilter(event: ChangeEvent<(HTMLSelectElement)>): void{
    const { value } = event.target;
      if(value === 'ordem alfabética'){
       setFilter('ordem alfabética')
       setTodoList(todoList.map((item) => item.task).sort().map((item) =>{
      return {
        task: item,
        status: todoList.filter((item2) => item2.task === item)[0].status,
        date: todoList.filter((item2) => item2.task === item)[0].date,
        filter: todoList.filter((item2) => item2.task === item)[0].filter,
      }
    },
      ))
      }
      if(value === 'data de criação'){
        setFilter('data de criação')
        setTodoList(todoList.map((item) => item.date).sort().map((item) =>{
      return {
        task: todoList.filter((item2) => item2.date === item)[0].task,
        status: todoList.filter((item2) => item2.date === item)[0].status,
        date:item,
        filter: todoList.filter((item2) => item2.date === item)[0].filter,
      }}
      ))
    } 
  }
  
  // https://pt.stackoverflow.com/questions/78629/prompt-de-confirma%c3%a7%c3%a3o-de-exclus%c3%a3o-com-javascript-e-asp

  function deleteTask(task: string): void {
    const confirm = window.confirm('deseja excluir esta tarefa?');
    if (confirm === true) {
      setTodoList(todoList.filter((item) => item.task !== task));
    }
  }

  function updateTask(task: string): void {
    setTodoList(todoList.filter((item) => item.task === task));

  }
  return (
    <div className=' flex items-center justify-center'>

      <div className='w-[700px] h-[500px] bg-sky-700 flex flex-col items-center justify-center space-x-1'>
        <select className='inset-36 bg-slate-300'
        name='filter'
        onChange={handleChangeFilter}
        value={filter}
        >
          <option value='ordem alfabética'>ordem alfabética</option>
          <option value='data de criação'>data de criação</option>
        </select>
      
        <div className='flex flex-col justify-start space-y-2'>
          {todoList.map((item: ITask, key: number) => {
            return <Task key={key} task={item} deleteTask={deleteTask} />;
          })}

          <input
            className='w-[580px] text-center'
            type='text'
            name='task'
            placeholder='Escreva aqui sua tarefa'
            onChange={handleChange}
            value={task}
          />
        </div>


        <div className='flex flex-col items-center justify-center space-x-2 m-2'>

          <span>Adicionar status da tarefa</span>
          <select
            name='status'
            className=' space-x-2 '
            onChange={handleChange}
            value={taskStatus}
          >
            <option value='pendente'>pendente</option>
            <option value='em andamento'>em andamento</option>
            <option value='pronto'>pronto</option>
          </select>
          <div className='space-x-2 m-2'>
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
      </div>

    </div>
  );
}
