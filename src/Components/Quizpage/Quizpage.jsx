import axios from "axios"
import { useEffect, useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import he from "he";
import { FidgetSpinner } from  'react-loader-spinner'
import Quiz from "../Thirdpage/Quiz";
import './Quizpage.css'

const Quizpage = () => {
	const [questionAnswer, setquestionAnswer] = useState([])
	const [showAnsMode,setshowAnsMode]=useState(false)
	const [isLoading, setIsLoading] = useState(false);


	useEffect(() =>
		fetching_Data()
		, [])

		function fetching_Data() {
		setIsLoading(true)
		axios.get(`https://opentdb.com/api.php?amount=${globalThis.Formdata.question || 10}&difficulty=${globalThis.Formdata.difficulty || "easy"}&type=${globalThis.Formdata.types || "multiple"}`)
			.then((data) => MakeQuestionSet(data))
			.finally(() => {
				setIsLoading(false);
			  })
	}

	function changeShowMode(){
		setshowAnsMode(true)
	}


	function MakeQuestionSet(daata) {
		let arr = []
		const { data } = daata
		const { results } = data
		for (let i = 0; i < results.length; i++) {
			const { question, incorrect_answers, correct_answer } = results[i]
			let alloption = []
			alloption = incorrect_answers
			alloption.splice(Math.floor(Math.random() * 4), 0, correct_answer)

			arr.push({
				question: he.decode(question),
				alloption,
				correct_answer,
				id: uuidv4(),
				selected_option: "",
			})
		}

		setquestionAnswer(arr)
	}

	function handleClick(id, clicked_option) {
		setquestionAnswer((prev) =>
		   prev.map((obj) => {
			if (id === obj.id) {
			  return {
				...obj,
				selected_option: clicked_option
			  }
			} else {
			  return obj;
			}
		  })
		)
	  }




	let allQuiz = questionAnswer.map((obj) =>{
const { question, alloption, correct_answer, id, selected_option } = obj

		return (
			<Quiz
				question={question}
				alloption={alloption}
				correct_answer={correct_answer}
				id={id}
				key={id}
				selected_option={selected_option}
				isClicked={handleClick}
				changeShowMode={changeShowMode}
				showAnsMode={showAnsMode}
			/>
		)
		})


	return (
		<>
		<div className="quizpage_container">
		{isLoading ? (
	 
	 <div className="loader_spinner" >
		 <FidgetSpinner
	 visible={true}
	 height="150"
	 width="200"
	 ariaLabel="dna-loading"
	 wrapperStyle={{}}
	 wrapperClass="dna-wrapper"
	 ballColors={['#ff0000', '#00ff00', '#0000ff']}
	 backgroundColor="#F4442E"
   />
	   </div>
    ) : (
		<section className="quiz_section">
		<div className="allquiz">
{allQuiz}
		</div>
		<div className="showAns_parent">
		<button className="button-86 showAns_btn" onClick={changeShowMode}>show Ans</button>
		</div>
	</section>
    )}
		</div>
		</>
	)
}

export default Quizpage