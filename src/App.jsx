import { useState } from 'react'
import './App.css'
import {
  ChevronDown,
  ChevronsDown,
  ChevronUp,
  ChevronsUp,
  Hash,
  RotateCcw
} from 'react-feather'

function App() {
  const [count, setCount] = useState(0)

  const incrementCount = () => {
    setCount(current => current += 1)
  }

  const decrementCount = () => {
    if (count > 0) {
      setCount(current => current -= 1)
    }
  }

  const reset = () => {
    setCount(current => current = 0)
  }

  const randomCount = () => {
    setCount(current =>
      current = Math.floor(Math.random() * 100)
    )
  }

  const decrementCountBy10 = () => {
    if (count > 10) {
     setCount(current => current -= 10)
    }
  }

  const incrementCountBy10 = () => {
    setCount(current => current += 10)
  }

  return (
    <div className='container'>
      <h3>Counter</h3>
      <h1>{count}</h1>
      <div className="buttons">
        <button onClick={incrementCount}>
          <ChevronUp />
        </button>
        <button onClick={incrementCountBy10}>
          <ChevronsUp />
        </button>
        <button onClick={reset}>
          <RotateCcw />
        </button>
        <button onClick={randomCount}>
          <Hash />
        </button>
        <button onClick={decrementCountBy10}>
          <ChevronsDown />
        </button>
        <button onClick={decrementCount}>
          <ChevronDown />
        </button>
      </div>
    </div>
  )
}

export default App
