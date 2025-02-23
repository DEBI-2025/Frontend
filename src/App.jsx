import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import PageNotFound from "./pages/PageNotFound";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Tips from "./pages/Tips";
import GlobalStyle from './globalStyles';
import styled from 'styled-components';

function App() {
  return (
    <BrowserRouter>
    <GlobalStyle />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="home" element={<Home />} />
        <Route path="quiz" element={<Quiz />} />
        <Route path="tips" element={<Tips />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;