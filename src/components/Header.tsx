import styles from './Header.module.css'

import toDoLogo from '../assets/toDo-logo.svg'
import { PlusCircle } from '@phosphor-icons/react'

export function Header(){
  return (
    <header className={styles.header}>
      <div className={styles.headerLogo}>
        <img src={toDoLogo} alt="logotipo toDo List" />
        <h1 className={styles.headerTitle}>to<span>do</span></h1>
      </div>

      <form className={styles.headerForm}>
        <input 
          type="text"
          placeholder='Adicione uma nova tarefa'
        />
        <button type='submit'>Criar <PlusCircle color="#F2F2F2" size={20}/> </button>
      </form>
      
    </header>
  )
}