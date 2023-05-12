import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";

import { useEffect, useState } from 'react'

const LOCAL_SAVE_TASKS = 'key:todotaks'

export interface iTask {
  id: string;
  task: string;
  complete: boolean;
}

export function App() {
  const [tasksObject, setTasksObject] = useState<iTask[]>([]);


  useEffect(() => {
    getLocalTasks()
  },[])
 
  function getLocalTasks(){
    const savedTasks = localStorage.getItem(LOCAL_SAVE_TASKS);
    if(savedTasks) {
      setTasksObject(JSON.parse(savedTasks));
    }

  }
  
  function saveLocalTasks(newTasks: iTask[]){
    setTasksObject(newTasks)
   localStorage.setItem(LOCAL_SAVE_TASKS, JSON.stringify(newTasks));
  }

  function createTaskObject(taskDescription: string){
    saveLocalTasks(
      [...tasksObject, 
        {
          id: crypto.randomUUID(), 
          task: taskDescription, 
          complete: false
        }
      ]
    )
  }

  function deleteTaskObject(taskOnlyDel: iTask){
    const deleteOnlyTask = tasksObject.filter((task) => {
      return task !== taskOnlyDel;
    })
    saveLocalTasks(deleteOnlyTask);    
  }

  function completeTasksObject(taskId: string){
    const newTasks = tasksObject.map((task) => {
      if(task.id === taskId) {
        return {
          ...task,
          complete: !task.complete
        }
      }
      return task;
    });
    saveLocalTasks(newTasks); 
  }

  return (
    <>
      <Header onCreateTaskObject={createTaskObject}/>
      <Tasks 
        tasksObject={tasksObject}
        onDeleteTaskObject={deleteTaskObject}
        onCompleteTasksObject={completeTasksObject}
      />
    </>
  )
}
