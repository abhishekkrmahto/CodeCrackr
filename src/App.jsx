import { BrowserRouter, Route, Routes } from "react-router-dom"
import LandingPage from "./components/LandingPage/LandingPage"
import '../src/App.css'
import HomePage from "./components/Homepage/HomePage"
import LoginPage from "./components/LoginPage/LoginPage"
import QuestionPage from "./components/QuestionPage/QuestionPage"
import { createContext, useEffect, useState } from "react"
import { questionData } from "./data/QuestionData"


export const QuestionContext = createContext(null);

const App = () => { 
  const [questionsArray, setQuestionsArray] = useState([]);
  
  useEffect(() => {
    const onload = ()=>{
      setTimeout(() => {
        setQuestionsArray(questionData);
      }, 500);
    }

    onload();
  }, [])

  

  return (
   <>
   <QuestionContext.Provider value = {questionsArray}>
    <BrowserRouter>
    <Routes>

      
      <Route path="/" element={<LandingPage></LandingPage>}></Route>
      <Route path="/loginPage" element={<LoginPage></LoginPage>}></Route>
      <Route path="/home" element={<HomePage></HomePage>}></Route>
      <Route path="questions/:questionPageName" element={<QuestionPage></QuestionPage>}></Route>
      


    </Routes>
    </BrowserRouter>
    </QuestionContext.Provider>
    
    </>
  )
}

export default App
