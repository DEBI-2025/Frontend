import { useState, useEffect } from "react";
import styled from "styled-components";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProgressSection from "../components/ProgressBar";

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


      <Content>
        <Card>
          <Question>
            {currentQuestion}- What is React.js?
          </Question>
          <ResponseArea
            placeholder="Enter Your Response Here"
            value={response}
            onChange={(e) => setResponse(e.target.value)}
          />
          <SubmitButton onClick={handleSubmit}>Submit Answer</SubmitButton>
        </Card>
      </Content>

      <NavigationContainer>
        <NavArrow onClick={goToPrevious} disabled={currentQuestion === 1}>
          <ChevronLeft size={24} color="#8B5CF6" />
        </NavArrow>
        <QuestionCounter>
          Question {currentQuestion} ({totalQuestions - currentQuestion + 1} remaining)
        </QuestionCounter>
        <NavArrow onClick={goToNext} disabled={currentQuestion === totalQuestions}>
          <ChevronRight size={24} color="#8B5CF6" />
        </NavArrow>
      </NavigationContainer>
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
const Content = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
`;

const Card = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  max-width: 450px;
  width: 100%;
  padding: 30px;
`;

const Question = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 24px;
  color: #333;
  text-align: center;
`;

const ResponseArea = styled.textarea`
  width: 100%;
  padding: 15px;
  border: 1px solid #8b5cf6;
  border-radius: 8px;
  margin-bottom: 24px;
  min-height: 100px;
  font-family: inherit;
  resize: none;
  box-sizing: border-box;
  outline: none;
`;

const SubmitButton = styled.button`
  width: 180px;
  padding: 12px;
  background: linear-gradient(to right, #8b5cf6, #ec4899);
  color: white;
  border: none;
  border-radius: 9999px;
  font-weight: 500;
  cursor: pointer;
  font-size: 16px;
  display: block;
  margin: 0 auto;
`;

const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  max-width: 600px;
  margin: 0 auto 100px auto;
  width: 100%;
`;

const NavArrow = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

const QuestionCounter = styled.div`
  color: #6b7280;
  font-size: 14px;
`;


export default Quiz;
