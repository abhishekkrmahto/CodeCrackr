import { BrowserRouter, Route, Routes } from "react-router-dom"
import LandingPage from "./components/LandingPage/LandingPage"
import '../src/App.css'
import HomePage from "./components/Homepage/HomePage"
import LoginPage from "./components/LoginPage/LoginPage"

const App = () => {
  return (
   <>
    <BrowserRouter>
    <Routes>

      
      <Route path="/" element={<LandingPage></LandingPage>}></Route>
      <Route path="/home" element={<HomePage></HomePage>}></Route>
      <Route path="/loginPage" element={<LoginPage></LoginPage>}></Route>


    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
