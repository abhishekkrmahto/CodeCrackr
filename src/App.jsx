import { BrowserRouter, Route, Routes } from "react-router-dom"
import LandingPage from "./components/LandingPage/LandingPage"
import '../src/App.css'
import HomePage from "./components/Homepage/HomePage"

const App = () => {
  return (
   <>
    <BrowserRouter>
    <Routes>

      
      <Route path="/" element={<LandingPage></LandingPage>}></Route>
      <Route path="/home" element={<HomePage></HomePage>}></Route>


    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
