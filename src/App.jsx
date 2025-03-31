import { useState } from 'react'
import './App.css'

function App() {
  //Con use state lo manejamos con hooks
  const [count, setCount] = useState(0)

  //<> ,fragmento
  return (
    <>

      <h1>Vite + React</h1>
      <div className="card">

        <button onClick={() => setCount((count) => count + 1)}>
          El contador es {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

    </>
  )
}

export default App
