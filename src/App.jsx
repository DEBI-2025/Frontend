import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import PageNotFound from "./pages/PageNotFound";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Tips from "./pages/Tips";
import HrPage from "./pages/Hrpage";
import QuestionBank from "./pages/QuestionBank";
import RateCV from "./pages/RateCV";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
 import Activate from "./pages/auth/Activate";
// import ResetPassword from "./pages/auth/ResetPassword";
// import ResetPasswordConfirm from "./pages/auth/ResetPasswordConfirm";
import AppLayout from "./components/AppLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import PrivateRoute from "./components/PrivateRoute";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route
              path="quiz"
              element={
                <PrivateRoute>
                  <Quiz />
                </PrivateRoute>
              }
            />
            <Route path="/activate/:uid/:token"  element={<Activate />} />

            <Route path="tips" element={<Tips />} />
            <Route path="hrPage" element={<HrPage />} />
            <Route
              path="questionbank"
              element={
                <PrivateRoute>
                  <QuestionBank />
                </PrivateRoute>
              }
            />
            <Route path="rateyourcv" element={<RateCV />} />
          </Route>
          <Route path="login" element={<LogIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "#fff",
            color: "#222",
          },
        }}
      />
      <ToastContainer />
    </QueryClientProvider>
  );
}

export default App;
