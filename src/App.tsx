import { Header } from './components/Header/Header'
import { Form } from './components/Form/Form'

import styles from './App.module.css'

function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.container}>
        <Form />
      </div>
    </div>
  )
}

export default App
