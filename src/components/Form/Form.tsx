import { PlusCircle } from 'phosphor-react'

import styles from './Form.module.css'

export function Form() {
  return (
    <form className={styles.form}>
      <input
        className={styles.field}
        type="text"
        placeholder="Adicione uma nova tarefa"
        name="description"
      />
      <button className={styles.createButton} type="submit">
        <span>Criar</span>
        <PlusCircle size={20} />
      </button>
    </form>
  )
}
