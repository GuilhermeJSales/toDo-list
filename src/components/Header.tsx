import styles from './Header.module.css'

import toDoLogo from '../assets/toDo-logo.svg'
import { PlusCircle } from '@phosphor-icons/react'

import { ChangeEvent, FormEvent, useState } from 'react'

interface HeaderProps {
  onCreateTaskObject: (createTaskObject: string) => void;
}

export function Header({onCreateTaskObject}: HeaderProps){
  const [newTaskDescription, setNewTaskDescription] = useState('');

  function handleCreateNewTask(event: FormEvent){
    event.preventDefault();
    onCreateTaskObject(newTaskDescription);
    setNewTaskDescription('');
  }

  function handleNewTaskDescription(event: ChangeEvent<HTMLInputElement>){
    setNewTaskDescription(event.target.value);
  }

  return (
    <header className={styles.header}>
        <div className={styles.headerLogo}>
          <img src={toDoLogo} alt="logotipo toDo List" />
          <h1 className={styles.headerTitle}>to<span>do</span></h1>
        </div>

        <form onSubmit={handleCreateNewTask} className={styles.headerForm}>
          <input 
            type="text"
            placeholder='Adicione uma nova tarefa'
            value={newTaskDescription}
            onChange={handleNewTaskDescription}
          />
          <button type='submit'>Criar <PlusCircle color="#F2F2F2" size={20}/></button>
        </form>
      
    </header>
  )
}