import { Trash } from 'phosphor-react'

import styles from './Todo.module.css'

export function Todo() {
  return (
    <div className={styles.todo}>
      <label className={styles.container}>
        <input type="checkbox" name="done" />
        <div className={styles.checkmark}></div>
      </label>
      <span>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </span>
      <button className={styles.todoDeleteBtn}>
        <Trash size={24} />
      </button>
    </div>
  )
}
