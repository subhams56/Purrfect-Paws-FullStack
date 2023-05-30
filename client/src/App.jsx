import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"


import SignUp2 from "./pages/Signup2"
import SignIn from "./pages/SignIn"
import Feed from "./pages/Feed"
import { AboutUs } from "./pages/AboutUs"
import Services from "./pages/Services"
import { Pricing } from "./pages/Pricing"
import Account from "./pages/Account"
import TestData from "./pages/TestData"
import CatPage from "./components/CatPage"


function App() {
  
 

  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<HomePage/>} />
    <Route path="/signup" element={<SignUp2/>} />
    <Route path="/signin" element={<SignIn/>} />
    <Route path="/feed" element={<Feed/>} />
    <Route path="/aboutus" element={<AboutUs/>} />
    <Route path="/services" element={<Services/>} />
    <Route path="/pricing" element={<Pricing/>} />
    <Route path="/account" element={<Account/>} />
    <Route path="/test" element={<TestData/>} />
    <Route path="/cat/:id" element={<CatPage/>} />

    

    </Routes>
    </BrowserRouter>
  )
}

export default App
