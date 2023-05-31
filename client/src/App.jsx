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
        {/* ...Other routes... */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
