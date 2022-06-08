import ClipboardLogo from '../assets/Clipboard.svg';
import { Task } from './Task';
import style from './TasksContainer.module.css';

interface Task {
  id: string;
  task: string;
  isCompleted: boolean;
}

interface TaskCointainerProps {
  tasks: Task[];
  deleteTask: (id: string) => void;
  completeTask: (id: string) => void;
}

export function TasksContainer({ tasks, deleteTask, completeTask }: TaskCointainerProps) {
  function sortTasksByConcluded(a: Task,b: Task) {
    if(a.isCompleted === true 
        && b.isCompleted === false) {
      return 1;
    }
    if(a.isCompleted === false 
      && b.isCompleted === true) {
      return -1;
    }
    return 0;
  }

  const allTasks = tasks.length;
  const isEmptyTaskList = allTasks === 0;
  const completedTasks = tasks.reduce((acumulador, valorAtual) => {
    if (valorAtual.isCompleted === true) {
      acumulador ++;
    }
    return acumulador;
  }, 0);

  return(
    <div className={style.container}>
      <header className={style.header}>
        <p className={style.createdTasks}>
          Tarefas criadas
          <span>{allTasks}</span>
        </p>
        <p className={style.concludedTasks}>
          Concluídas
          <span>{isEmptyTaskList ? '0' : `${completedTasks} de ${allTasks}`}</span>  
        </p>
      </header>
      {isEmptyTaskList ? (
        <main className={style.tasksEmptyContainer}>
          <img src={ClipboardLogo} alt="Clipboard logo" />
          <h1>Você ainda não tem tarefas cadastradas</h1>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </main> 
      ) : (
        <main className={style.tasksContainer}>
          {tasks.sort(sortTasksByConcluded).map(taskItem => (
            <Task 
              key={taskItem.id}
              id={taskItem.id}
              isCompleted={taskItem.isCompleted}
              task={taskItem.task}
              deleteTask={deleteTask}
              completeTask={completeTask}
            />
          ))}
        </main>
      )}
    </div>
  );
}