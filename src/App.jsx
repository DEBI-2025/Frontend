import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import PageNotFound from "./pages/PageNotFound";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Tips from "./pages/Tips";
import QuestionBank from "./pages/QuestionBank";
import RateCV from "./pages/RateCV";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<LogIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="quiz" element={<Quiz />} />
        <Route path="tips" element={<Tips />} />
        <Route path="questionbank" element={<QuestionBank />} />
        <Route path="rateyourcv" element={<RateCV />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
