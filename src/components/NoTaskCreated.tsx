import clipBoard from '../assets/clipboard.svg'
import styles from './NoTaskCreated.module.css'

export function NoTaskCreated(){
  return(
    <div className={styles.noTaskCreated}>
      <div className={styles.noTaskImg}>
        <img src={clipBoard} alt="ClipBoard ícone" />
      </div>
      <div className={styles.noTaskParagraph}>
        <p>Você ainda não tem tarefas cadastradas</p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  )
}