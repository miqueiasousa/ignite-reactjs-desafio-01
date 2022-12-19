import { ClipboardText } from 'phosphor-react'

import styles from './Tasks.module.css'

export function Tasks() {
  return (
    <div className={styles.tasks}>
      <div className={styles.info}>
        <div className={`${styles.infoBox} ${styles.created}`}>
          <strong>Tarefas criadas</strong>
          <span className={styles.counter}>0</span>
        </div>
        <div className={`${styles.infoBox} ${styles.done}`}>
          <strong>Concluídas</strong>
          <span className={styles.counter}>0</span>
        </div>
      </div>
      <div className={styles.empty}>
        <ClipboardText size={56} />
        <div className={styles.emptyText}>
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <span>Crie tarefas e organize seus itens a fazer</span>
        </div>
      </div>
    </div>
  )
}
