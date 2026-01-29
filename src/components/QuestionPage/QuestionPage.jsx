import React, { useContext, useEffect, useState } from 'react'
import { QuestionContext } from '../../App';
import { useInRouterContext, useParams } from 'react-router-dom';

const QuestionPage = () => {
  const [showAnswer, setShowAnswer] = useState("hidden")
  const [questionArray, setQuestionArray] = useState([])

  //param fetching
  const {questionPageName} = useParams();

  const showAnswerHandler =(e)=>{
    e.preventDefault();
    if(showAnswer == "none"){
      setShowAnswer("hidden")
    }else if(showAnswer == "hidden"){
      setShowAnswer("none")
    }
  }

  const useQuestionsContext = useContext(QuestionContext);
  console.log(questionArray)

useEffect(() => {
  const questionObject = useQuestionsContext.find(
    (item) => item.pageLink === questionPageName
  );

  if (questionObject) {
    setQuestionArray(questionObject.questions);
  }
}, [questionPageName, useQuestionsContext]);


  
  return (
    <div>
      <div className="container">
        <div className="top text-center font-extrabold tracking-widest text-2xl w-fit justify-self-center mt-2 p-3 rounded-2xl">
          <h1>FRONT END INTERVIEW QUESTIONS</h1>
        </div>

        <div className="questions-box w-screen h-fit flex flex-col justify-center items-center mt-3 gap-2 ">
{/* ------------------------------questionBox---------------- */}
          <div className="question-box w-[1500px] border-2 h-fit flex flex-col justify-center rounded-2xl">

            <div className="question m-2 w-fit h-fit">
              Q. what do you mean by LPA
            </div>
            {showAnswer == "none"?<div className="answer m-2 w-fit h-fit">
              A.
            </div>:null}
            <div className="buttons m-2 w-fit h-fit">
              <button onClick={(e)=>{showAnswerHandler(e)}} className='bg-teal-700 p-1 w-[100px] h-[30px] rounded-2xl text-xs cursor-pointer'>{showAnswer == "none"?"Hide Answer":"Show Answer"}</button>
            </div>

          </div>
{/* ---------------------------questionBox--------------------- */}
        </div>
      </div>
    </div>
  )
}

export default QuestionPage
