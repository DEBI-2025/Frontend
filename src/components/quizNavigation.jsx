
import React from "react";
import styled from "styled-components";
import { ChevronLeft, ChevronRight } from "lucide-react";

const QuizNavigation = ({ currentQuestion, totalQuestions, onPrevious, onNext }) => {
  return (
    <NavigationContainer>
      <NavArrow onClick={onPrevious} disabled={currentQuestion === 1}>
        <ChevronLeft size={24} color="#8B5CF6" />
      </NavArrow>
      <QuestionCounter>
        Question {currentQuestion} ({totalQuestions - currentQuestion + 1} remaining)
      </QuestionCounter>
      <NavArrow onClick={onNext} disabled={currentQuestion === totalQuestions}>
        <ChevronRight size={24} color="#8B5CF6" />
      </NavArrow>
    </NavigationContainer>
  );
};

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

export default QuizNavigation;
