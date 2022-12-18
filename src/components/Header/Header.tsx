import todoLogo from '../../assets/todo.svg'

import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src={todoLogo} alt="Ignite ToDo logotipo" />
    </header>
  )
}
