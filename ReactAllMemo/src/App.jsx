// import { useState } from 'react'
import './App.css'
// import { UseMemoHook } from './Components/UseMemoHook';
import { ReactDotMemo } from './Components/ReactDotMemo'

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <ReactDotMemo />

      {/* UseMemoHook */}
{/* 
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
      <UseMemoHook/ > */}
    </>
  )
}

export default App
