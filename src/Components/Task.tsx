import { Check, Trash } from 'phosphor-react';
import styles from './Task.module.css';

interface TaskProps {
  id: string;
  isCompleted: boolean;
  task: string;
  deleteTask: (id: string) => void;
  completeTask: (id: string) => void;
}

export function Task({ isCompleted, task, id, deleteTask, completeTask }: TaskProps) {
  function handleDeleteTask() {
    deleteTask(id);
  }
  function handleCompleteTask() {
    completeTask(id);
  }

  return(
    <div className={styles.task}>
      { isCompleted ? (
        <button 
          className={styles.checkedCircleContainer}
          onClick={handleCompleteTask}
        >
          <div className={styles.checkedCircle}>
            <Check size={13} />
          </div>
        </button>
      ) : (
        <button 
          className={styles.uncheckedCircleContainer}
          onClick={handleCompleteTask}
        >
          <div className={styles.uncheckedCircle}>
            <div className={styles.uncheckedCircleBackground} />
          </div>
       </button>
      )}
      <p 
        className={isCompleted ? styles.textCompletedContainer : styles.textContainer}
      >
        {task}
      </p>
      <button 
        className={styles.deleteButton} 
        title="Deletar comentário"
        onClick={handleDeleteTask}
      >
        <Trash height={24}  />
      </button>
    </div>
  );
}