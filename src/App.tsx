import './global.css';
import { stringify, v4 as uuidv4 } from 'uuid';
import { Header } from './Components/Header';

import styles from './App.module.css';
import { NewTaskContainer } from './Components/NewTaskContainer';
import { TasksContainer } from './Components/TasksContainer';
import { FormEvent, useState } from 'react';

interface Task {
  id: string;
  task: string;
  isCompleted: boolean;
}

const initialTasks: Task[] = [
  {
    id: uuidv4(),
    task: 'Terminar as aulas',
    isCompleted: true,
  },
  {
    id: uuidv4(),
    task: 'Terminar o desafio',
    isCompleted: false,
  },
]

function App() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  
  function createNewTask(task: string) {
    setTasks([
      ...tasks,
      {
        id: uuidv4(),
        task,
        isCompleted: false,
      }
    ])
  }
  function deleteTask(id: string) {
    const filtteredTasks = tasks.filter((task) => {
      return task.id !== id;
    })
    setTasks(filtteredTasks);
  }
  function completeTask(id: string) {
    const selectedTaskIndex = tasks.findIndex(task => {
      return task.id === id;
    });
    const tasksAux = [...tasks];
    tasksAux[selectedTaskIndex].isCompleted = !tasksAux[selectedTaskIndex].isCompleted;
    console.log(tasksAux);
    setTasks(tasksAux);
  }

  return (
    <div className="App">
      <Header />
      <div className={styles.wrapper}>
        <NewTaskContainer
          createNewTask={createNewTask}
        />
        <TasksContainer 
          tasks={tasks}
          deleteTask={deleteTask}
          completeTask={completeTask}
        />
      </div>
    </div>
  )
}

export default App
