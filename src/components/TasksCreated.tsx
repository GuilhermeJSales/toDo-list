import { Trash } from '@phosphor-icons/react'
import styles from './TasksCreated.module.css'
import { iTask } from '../App';

interface TasksCreatedProps {
  tasksObject: iTask[];

}


export function TasksCreated({tasksObject}: TasksCreatedProps){



  return(
    <ul className={styles.checkTaskUl}>
      {tasksObject.map(task => (
        <li key={task.id} className={styles.checkTaskLi}>
          <div>
            <button className={styles.checkBox}/> 
            <p>{task.task}</p>  
          </div>      
          <button 
            className={styles.DeleteTask} 
            title="deletar tarefa"
          >
            <Trash size={24}/>
          </button>
        </li>
        )
      )}
    </ul>
  )
}