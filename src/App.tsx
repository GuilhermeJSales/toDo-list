import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";

import { useState } from 'react'

export interface iTask {
  id: string;
  task: string;
  complete: boolean;
}

export function App() {
  const [tasksObject, setTasksObject] = useState<iTask[]>([]);

  function createTaskObject(taskDescription: string){
    setTasksObject(
      [...tasksObject, 
        {
        id: crypto.randomUUID(), 
        task: taskDescription, 
        complete: false
        }
      ]
    )
  }

  return (
    <>
      <Header onCreateTaskObject={createTaskObject}/>
      <Tasks 
        tasksObject={tasksObject}
      />
    </>
  )
}
