import { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import ProgressSection from "../components/ProgressBar";
import QuizNavigation from "../components/quizNavigation";

export default function ReviewAnswers() {
  const location = useLocation();
  const quizData = location.state?.quizData || [];
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentQuestion = quizData[currentIndex];

  const handleNext = () => {
    if (currentIndex < quizData.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };
  const progressPercentage = ((currentIndex + 1) / quizData.length) * 100;
const timeLeft = null;

  return (
    <Wrapper>
      <ProgressSection progressPercentage={progressPercentage} timeLeft={timeLeft} />

    <Fill/>
        {quizData.length === 0 ? (
          <p>No quiz data available</p>
        ) : (
          <QuestionCard>
            <QuestionText>Q{currentIndex + 1}: {currentQuestion.text}</QuestionText>

            <StatusText correct={currentQuestion.status === "correct"}>
              {currentQuestion.status === "correct" ? (
                <><FaCheckCircle /> Correct Answer</>
              ) : (
                <><FaTimesCircle /> Incorrect Answer</>
              )}
            </StatusText>

            <AnswerDetail><strong>Correct Answer:</strong> {currentQuestion.correct_label} - {currentQuestion.correct_choice_text}</AnswerDetail>
            <AnswerDetail><strong>Reason:</strong> {currentQuestion.answer_reason}</AnswerDetail>
            
            
          </QuestionCard>
        )}
      <QuizNavigation
  currentQuestion={currentIndex}
  totalQuestions={quizData.length}
  onPrevious={handlePrevious}
  onNext={handleNext}
/>
    </Wrapper>
  );

  
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  font-family: Arial, sans-serif;
  background-color: #f9fafb;

`;

const Fill = styled.div`
background: linear-gradient(to right, #8b5cf6, #ec4899);
  padding: 20px;
  display: flex;
  height:1rem;
  `;
const QuestionCard = styled.div`
  background-color: white;
  box-shadow: 0px 4px 20px rgba(0,0,0,0.1);
  padding: 4rem;
  width: 40%;
  margin: -20px auto 0 auto;
  position: relative;
  z-index: 1;
`;

const QuestionText = styled.p`
  font-weight: 600;
  margin-bottom: 12px;
`;

const StatusText = styled.div`
  font-size: 16px;
  font-weight: 500;
  margin: 8px 0;
  color: ${(props) => (props.correct ? "#28a745" : "#dc3545")};
  display: flex;
  align-items: center;
  gap: 8px;
`;

const AnswerDetail = styled.p`
  margin-top: 8px;
  font-size: 15px;
`;


