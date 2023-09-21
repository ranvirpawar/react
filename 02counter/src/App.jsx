import { useState } from 'react'

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // creating a hooks using state function 
  let [counter, setCounter] = useState(15)

  // creating a function {addValue} for add value button
  const addValue = () => {
    if( counter >= 20){
      return
    }
    setCounter(counter +1)
   // console.log('clicked' , counter)
  }

  // creating  a fuction to decrease {subtract} 

  const subtract =()=>{
    if(counter <= 0){
      return 
    }
    setCounter (counter -1)
  }

  const reset = ()=> {
    setCounter(15)
  }

  return (
    <>
     <div id = "div">
      <h1> Ranvir is Working on react</h1>
     <h2> Counter Value : {counter} </h2>
     <button id = "addbutton" onClick={addValue}>
      Add Value </button>
     <br />
     <button id = "subbutton" onClick={subtract}> Decrease Value </button>
     <br />
     <button id="resetbutton"  onClick={reset}> Reset to Original </button>
      </div>
     </>
  )
}

export default App
