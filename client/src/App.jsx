import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import ProtectedRoute from "./middlewares/ProtectedRoute"



import SignUp2 from "./pages/Signup2"
import SignIn from "./pages/SignIn"
import Feed from "./pages/Feed"
import { AboutUs } from "./pages/AboutUs"
import Services from "./pages/Services"
import { Pricing } from "./pages/Pricing"
import Account from "./pages/Account"
import TestData from "./pages/TestData"
import CatPage from "./components/CatPage"
import { Unauthorized } from "./pages/Unauthorized"
import AddCat from "./pages/AddCat"
import Adopt from "./pages/Adopt"
import AdoptionManage from "./pages/AdoptionManage"
import AdoptionStatus from "./pages/AdoptionStatus"


function App() {
  
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp2 />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route
          path="/account"
          element={<ProtectedRoute component={Account} />}
        />
        <Route path="/test" element={<TestData />} />
        <Route path="/cat/:id" element={<CatPage />} />
        <Route path="/addcat" element={<AddCat />} />
        <Route path="/adopt" element={<Adopt />} />
        <Route path="/adoptionManage" element={<AdoptionManage />} />
        <Route path="/adoptionStatus/:catId" element={<AdoptionStatus/>} />
        {/* ...Other routes... */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
