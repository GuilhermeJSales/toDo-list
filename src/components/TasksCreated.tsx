import { Check, Trash } from '@phosphor-icons/react'
import styles from './TasksCreated.module.css'
import { iTask } from '../App';

interface TasksCreatedProps {
  tasksObject: iTask[];
  onDeleteTaskObject: (taskIndex: iTask) => void;
  onCompleteTasksObject: (taskId: string) => void;
}


export function TasksCreated({tasksObject, onDeleteTaskObject, onCompleteTasksObject}: TasksCreatedProps){


  function handleDeleteTask(task: iTask){
    onDeleteTaskObject(task)
  }

  function completeTask(taskId: string){
    onCompleteTasksObject(taskId)
  }


  return(
    <ul className={styles.checkTaskUl}>
      {tasksObject.map((task) => (
        <li key={task.id} className={styles.checkTaskLi}>
          <div>
            <button 
              className={styles.checkBox}
              onClick={() => completeTask(task.id)}
            > 
            {task.complete ? <div className={styles.active}> <Check size={14} className={styles.active} /> </div> : <div/>} 
            </button> 
            <p className={`${task.complete && styles.completeTask}`}>{task.task}</p>  
          </div>      
          <button 
            className={styles.DeleteTask} 
            title="deletar tarefa"
            onClick={() => handleDeleteTask(task)}
          >
            <Trash size={24}/>
          </button>
        </li>
        )
      )}
    </ul>
  )
}