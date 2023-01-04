import { useState } from 'react'
import glgLogo from '../assets/logo-white.svg';
import '../App.css'

import { Link } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <nav>
        <Link to="/about">about</Link>
      </nav>
      <div>
        <a href="https://reactjs.org" target="_blank">
          <img src={glgLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Aquí estaŕa la web de GLG (esto es una prueba de github actions)</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
