import { BrowserRouter, Routes, Route } from "react-router-dom" 
import LoginPage from "./views/LoginPage.jsx"
import AbuotPage from "./views/AbuotPage.jsx"
import HomePage from "./views/HomePage.jsx"
import RegisterPage from "./views/RegisterPage.jsx"
import ContactPage from "./views/ContactPage.jsx"

function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<HomePage />} />
        <Route path="/about" element={<AbuotPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contact" element={<ContactPage />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
