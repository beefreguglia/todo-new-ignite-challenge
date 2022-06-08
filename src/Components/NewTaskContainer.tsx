import style from './NewTaskContainer.module.css';
import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';

interface Task {
  id: string;
  task: string;
  isCompleted: boolean;
}

interface NewTaskContainerProps {
  createNewTask: (task: string) => void;
}

export function NewTaskContainer({ createNewTask }: NewTaskContainerProps) {
  const [newTask, setNewTask] = useState('');

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
    createNewTask(newTask);
    setNewTask('');
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');
    setNewTask(event.target.value);
  }
  
  const isNewTaskEmpty = newTask.length === 0;

  return(
    <form 
      className={style.container}
      onSubmit={handleCreateNewTask}
    >
      <input 
        name="task"
        placeholder="Adicione uma nova tarefa"
        value={newTask}
        required
        type="text"
        onChange={handleNewTaskChange}
      />
      <button 
        type="submit"
        disabled={isNewTaskEmpty}
      >
        Criar
        <PlusCircle size={16} />
      </button>
    </form>
  )
}