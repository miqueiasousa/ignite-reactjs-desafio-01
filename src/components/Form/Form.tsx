import { ChangeEvent, FormEvent, useContext, useState } from 'react'
import { PlusCircle } from 'phosphor-react'

import { Store } from '../../contexts/StoreCtx'

import styles from './Form.module.css'

function uniqueId() {
  return Math.round(Date.now() * Math.random()).toString()
}

export function Form() {
  const [description, setDescription] = useState('')
  const { dispatch } = useContext(Store)

  function handleDescriptionChange(event: ChangeEvent<HTMLInputElement>) {
    setDescription(event.target.value)
  }

  function handleCreate(event: FormEvent) {
    event.preventDefault()

    if (description === '') {
      return
    }

    dispatch({
      type: 'add',
      payload: {
        id: uniqueId(),
        isDone: false,
        description
      }
    })
    setDescription('')
  }

  return (
    <form className={styles.form} onSubmit={handleCreate}>
      <input
        className={styles.field}
        type="text"
        placeholder="Adicione uma nova tarefa"
        name="description"
        value={description}
        onChange={handleDescriptionChange}
      />
      <button className={styles.createButton} type="submit">
        <span>Criar</span>
        <PlusCircle size={20} />
      </button>
    </form>
  )
}
