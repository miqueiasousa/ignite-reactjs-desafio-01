import { useContext } from 'react'
import { ClipboardText } from 'phosphor-react'

import { Store } from '../../contexts/StoreCtx'
import { Todo } from '../Todo/Todo'

import styles from './Tasks.module.css'

export function Tasks() {
  const { state } = useContext(Store)
  const isEmpty = state.length === 0
  const totalDone = state.filter(todo => todo.isDone).length

  return (
    <div className={styles.tasks}>
      <div className={styles.info}>
        <div className={`${styles.infoBox} ${styles.created}`}>
          <strong>Tarefas criadas</strong>
          <span className={styles.counter}>{state.length}</span>
        </div>
        <div className={`${styles.infoBox} ${styles.done}`}>
          <strong>Concluídas</strong>
          <span className={styles.counter}>
            {totalDone > 0 ? `${totalDone} de ${state.length}` : totalDone}
          </span>
        </div>
      </div>
      {isEmpty ? (
        <div className={styles.empty}>
          <ClipboardText size={56} />
          <div className={styles.emptyText}>
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </div>
        </div>
      ) : (
        <div className={styles.list}>
          {state.map(({ id, description, isDone }) => (
            <Todo key={id} id={id} description={description} isDone={isDone} />
          ))}
        </div>
      )}
    </div>
  )
}
