import { useState, useEffect } from "react";
import styled from "styled-components";
import ProgressSection from "../components/ProgressBar";
import QuizNavigation from "../components/quizNavigation";
import QuizCard from "../components/QuizCard";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [totalQuestions, setTotalQuestions] = useState(25);
  const [response, setResponse] = useState("");
  const [timeLeft, setTimeLeft] = useState(1800);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion(currentQuestion - 1);
      setResponse("");
    }
  };

  const goToNext = () => {
    if (currentQuestion < totalQuestions) {
      setCurrentQuestion(currentQuestion + 1);
      setResponse("");
    }
  };

  const handleSubmit = () => {
    console.log("Submitted answer:", response);
    goToNext();
  };

  const progressPercentage = (currentQuestion / totalQuestions) * 100;

  return (
    <Container>
     <ProgressSection progressPercentage={progressPercentage} timeLeft={timeLeft} />
      <QuizCard
    questionText={`${currentQuestion} - What is React.js?`}
    choices={["A library for UI", "A backend framework", "A database", "An operating system"]}
    selectedChoice={response}
    onChoiceChange={setResponse}
    onSubmit={handleSubmit}
  />
      <QuizNavigation
  currentQuestion={currentQuestion}
  totalQuestions={totalQuestions}
  onPrevious={goToPrevious}
  onNext={goToNext}
/>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  font-family: Arial, sans-serif;
  background-color: #f9fafb;
`;





export default Quiz;
