import { useState } from "react"
import "../Startpage/Startpage.css"
const Startpage = (props) => {
  const { startGame } = props

  const [settingForm, setsettingForm] = useState({ question: "", difficulty: "", types: "",language:"" })
  globalThis.Formdata=settingForm
  
  function onChangeHandler(ev) {
    setsettingForm((prevstate) => {
      return {
        ...prevstate,
        [ev.target.name]: ev.target.value
      }
    })
  }

  console.log(settingForm)


  function onSubmitHandler(ev){
   ev.preventDefault()
  }


  return (
    <div className="game_setting_container">
      <div className="game_setting_child">
      <h1 className="quiz_heading">Game Setting</h1>
      <form onSubmit={onSubmitHandler}>

        <label  htmlFor="question">Number of Question</label>
        <input className="input_container" type="text" id="question" name="question" value={settingForm.question}
          onChange={onChangeHandler} /><br />

        <label  htmlFor="difficulty">Questions Difficulty</label>
        <select className="input_container" type="text" name="difficulty" id="difficulty" onChange={onChangeHandler} value={settingForm.difficulty}>
  <option value="easy">easy</option>
  <option value="medium">medium</option>
  <option value="hard">hard</option>
</select><br />


<label  htmlFor="types">Type of Questions</label>
<select className="input_container" type="text" name="types" id="types" onChange={onChangeHandler} value={settingForm.types}>
  <option value="mutiple">mutiple</option>
  <option value="boolean">True/False</option>
</select><br />

          <button className="button-86 startgame_btn" role="button" onClick={startGame}>Start Game</button>
      </form>
      </div>
    </div>
  )
}

export default Startpage