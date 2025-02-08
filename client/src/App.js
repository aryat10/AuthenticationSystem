import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./pages/registerPage";
import "./App.css";
import FrontPage from "./FrontPage";
import LoginPage from "./pages/loginPage";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<FrontPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
     
    </>
  );
}

export default App;
