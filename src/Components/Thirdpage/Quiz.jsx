import { v4 as uuidv4 } from 'uuid';
import he from "he";
import '../Thirdpage/Quiz.css'
const Quiz = (props) => {
  const{question, alloption, correct_answer, id, selected_option,isClicked,changeShowMode,showAnsMode}=props
  let options=alloption.map((optn)=>{
    // let id=uuidv4()
    let style=optn_styles()
    
    function optn_styles(){
     if(!showAnsMode){
      if(selected_option==optn){
        return {backgroundColor:"#00cccc",color: "white"}
       }
     }
     else{
      if(selected_option==optn && selected_option==correct_answer){
        return {backgroundColor:"#008000"}
      }
      if(selected_option==optn){
        return{backgroundColor:"#ff6666"}
      }
      if(optn===correct_answer){
        return{backgroundColor:"#80ff80"}
      }
     }
    }

    let anotherclass=addclass()

    function addclass(){
      if(!showAnsMode){
        if(selected_option==optn){
          return "select_kar_liya"
         }
       }
    }
  
    return(
      <div key={uuidv4()} style={style} className="options" onClick={()=>isClicked(id,optn)}>
       <p>{he.decode(optn)}</p>
      </div>
    )
  })

  return (
    <>
    <section className="quiz_container">
      <div className="question_div">{question}</div>
      <div className="answer_div">{options}</div>
    </section>
    </>
  )
}

export default Quiz