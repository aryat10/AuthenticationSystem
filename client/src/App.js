import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./pages/registerPage";
import "./App.css";
import FrontPage from "./FrontPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<FrontPage />} />
        </Routes>
      </Router>
     
    </>
  );
}

export default App;
