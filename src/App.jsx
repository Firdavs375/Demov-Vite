import React, { useState } from 'react'
import "./index.css"
// import "./index.js"


const App = () => {

  const p = document.querySelector(".p")

  const [count, setCount] = useState(0)
  if (count < 0) {+
    setCount(0)
  }



  // const a = count % 2 === 0 
  // const b = count % 2 === 1 

  // const a = count % 2
  function JuftToq() {
    if (count % 2 === 0) {
      p.innerHTML += `   ${count}-Juft,`
    } else { 
      p.innerHTML += `   ${count}-Toq,`
    }
  };

  // JuftToq()
  return (
    <center>
      <div>
        <h1>{count}</h1>
        <br /><br />
        <div className="btnDiv">
          <button onClick={() => setCount(count + 1) || JuftToq() }>Incrument</button>
          <button onClick={() => setCount(count - 1) || JuftToq() }>Decrument</button>
        </div>
        <p className='p'></p>
      </div>
    </center>
  )
}

export default App