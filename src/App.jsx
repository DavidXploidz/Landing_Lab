import { useState } from 'react'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <main className='section container' id='nosotros'>
        <h1>Nosotros 2.13</h1>
      </main>
    </>
  )
}

export default App
