import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"


import SignUp2 from "./pages/Signup2"
import SignIn from "./pages/SignIn"


function App() {
  
 

  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<HomePage/>} />
    <Route path="/signup" element={<SignUp2/>} />
    <Route path="/signin" element={<SignIn/>} />

    

    </Routes>
    </BrowserRouter>
  )
}

export default App
