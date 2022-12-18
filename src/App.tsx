import { Header } from './components/Header/Header'

import styles from './App.module.css'

function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.container}></div>
    </div>
  )
}

export default App
