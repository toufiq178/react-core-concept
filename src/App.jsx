import { useState } from 'react'

import './App.css'

function App() {
  
  function handlerClick() {
    
    alert ("im clicked")
  }

  function handlerClick2(params) {
    
    alert ("im click 2 = " + (params + 10))
  }


  const handlerClick3 = () => alert("im click 3")
  const handlerClick4 = (param) => alert("im click 4 = " + (param * 8))

  return (
    <>
      
      <h1>Vite + React</h1>
      
      <button onClick={handlerClick}>Click me</button>
      <button onClick={() => handlerClick2(7)}>Click me 2</button>
      <button onClick={handlerClick3}>Click me 3</button>
      <button onClick={() => handlerClick4 (9)}>Click me 4</button>


      <button onClick={function handlerClick5() { 
        alert("i am btn 5")
      }}
      >Click Me 5</button>
      
    </>
  )
}

export default App
