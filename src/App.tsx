import { useState } from 'react'
import Update from './components/Update'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Update />
    </>
  )
}

export default App
