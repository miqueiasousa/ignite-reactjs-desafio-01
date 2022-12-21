import { useContext } from 'react'
import { Trash } from 'phosphor-react'

import { Store } from '../../contexts/StoreCtx'
import { ITodo } from '../../types'

import styles from './Todo.module.css'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface TodoProps extends ITodo {}

export function Todo({ id, description, isDone }: TodoProps) {
  const { dispatch } = useContext(Store)

  function handleDone() {
    dispatch({
      type: 'done',
      payload: {
        id,
        description,
        isDone
      }
    })
  }

  function handleDelete() {
    dispatch({
      type: 'delete',
      payload: {
        id,
        description,
        isDone
      }
    })
  }

  return (
    <div className={styles.todo}>
      <label className={styles.container}>
        <input
          type="checkbox"
          name="done"
          checked={isDone}
          onChange={handleDone}
        />
        <div className={styles.checkmark}></div>
      </label>
      <span>{description}</span>
      <button className={styles.todoDeleteBtn} onClick={handleDelete}>
        <Trash size={24} />
      </button>
    </div>
  )
}
