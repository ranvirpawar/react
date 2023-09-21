// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let counter = 15;
  const addValue = () => {
    counter = counter +1;
    console.log('clicked' , counter)
  }
  

  return (
    <>
     <h1> Ranvir is Working on react</h1>
     <h2> Counter Value : {counter} </h2>
     <button onClick={addValue}>
      Add Value </button>
     <br />
     <button> Decrease Value </button>
     <p> footer : {counter} </p>

     </>
  )
}

export default App
