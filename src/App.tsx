import { Header } from './components/Header/Header'
import { Form } from './components/Form/Form'
import { Tasks } from './components/Tasks/Tasks'

import styles from './App.module.css'

function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.container}>
        <Form />
        <Tasks />
      </div>
    </div>
  )
}

export default App
