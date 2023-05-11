
import { iTask } from '../App'
import { NoTaskCreated } from './NoTaskCreated';
import styles from './Tasks.module.css'
import { TasksCreated } from './TasksCreated'

interface TasksProps {
  tasksObject: iTask[];
}

export function Tasks({ tasksObject}: TasksProps){

  return (
    <section className={`${'container'}`}>
      <header className={styles.tasksHeader}>
        <div>
          <span className={styles.taskCreated}>Tarefas criadas <span>0</span></span>
          <span className={styles.completedTasks}>Concluídas <span>0</span></span>
        </div>
      </header>

      {tasksObject.length === 0 && <NoTaskCreated />} <TasksCreated tasksObject={tasksObject}/>
    </section>
  ) 
}