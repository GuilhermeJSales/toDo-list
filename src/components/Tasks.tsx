import styles from './Tasks.module.css'

import { iTask } from '../App'
import { NoTaskCreated } from './NoTaskCreated';
import { TasksCreated } from './TasksCreated'

interface TasksProps {
  tasksObject: iTask[];
  onDeleteTaskObject: (taskOnlyDel: iTask) => void;
  onCompleteTasksObject: (taskId: string) => void;
}

export function Tasks({ tasksObject, onDeleteTaskObject, onCompleteTasksObject}: TasksProps){
  const taskQuantity = tasksObject.length;
  const taskCompleteds = tasksObject.filter(task => task.complete).length;

  return (
    <section className={`${'container'}`}>
      <header className={styles.tasksHeader}>
        <div>
          <span className={styles.taskCreated}>Tarefas criadas <span>{taskQuantity}</span></span>
          <span className={styles.completedTasks}>Concluídas <span>{taskCompleteds === 0 ? '0' : `${taskCompleteds} de ${taskQuantity}`}</span></span>
        </div>
      </header>

      {tasksObject.length === 0 && <NoTaskCreated />} <TasksCreated tasksObject={tasksObject} onDeleteTaskObject={onDeleteTaskObject} onCompleteTasksObject={onCompleteTasksObject}/>
    </section>
  ) 
}