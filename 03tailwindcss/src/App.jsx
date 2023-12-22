
import './App.css'
import Card from './components/card'

function App() {
  

  return (
    <>
      <h1 className="bg-green-400 text-black rounded-xl mb-4 ">tailwind css props </h1>
      <Card username="Ranvir" btnText='View Profile'/>
      <br/>
      <Card username="Tyler" btnText='watch me'/>
    </>
  )
}

export default App
