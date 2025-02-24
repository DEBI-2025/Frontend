import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from './globalStyles';
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Quiz from "./pages/Quiz";
import Tips from "./pages/Tips";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="login" element={<LogIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="/" element={<Home />} />
        <Route path="quiz" element={<Quiz />} />
        <Route path="tips" element={<Tips />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
