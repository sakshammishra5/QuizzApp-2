import { useState } from "react"
import Quizpage from "./Components/Quizpage/Quizpage"
import Startpage from "./Components/Startpage/Startpage"
import './app.css'
const App = () => {

const [gameHas_Started,setgameHas_Started]=useState(false)

function startGame(){
setgameHas_Started(true)
}

  return (
    <div className="app_container">
    {gameHas_Started?<Quizpage/>:<Startpage startGame={startGame}/>}
    </div>
  )
}

export default App