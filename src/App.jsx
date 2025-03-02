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
import Activate from "./pages/auth/Activate";
import ResetPassword from "./pages/auth/ResetPassword";
import ResetPasswordConfirm from "./pages/auth/ResetPasswordConfirm";
import AppLayout from "./components/AppLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="quiz" element={<Quiz />} />
          <Route path="tips" element={<Tips />} />
          <Route path="questionbank" element={<QuestionBank />} />
          <Route path="rateyourcv" element={<RateCV />} />
        </Route>

        <Route path="activate/:uid/:token" element={<Activate />} />
        <Route path="reset-password" element={<ResetPassword />} />
        <Route
          path="password/reset/confirm/:uid/:token"
          element={<ResetPasswordConfirm />}
        />

        <Route path="login" element={<LogIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
