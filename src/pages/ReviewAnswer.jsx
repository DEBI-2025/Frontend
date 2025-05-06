import { useLocation } from "react-router-dom";
import { useState } from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import styled from "styled-components";

export default function ReviewAnswers() {
  const location = useLocation();
  const quizData = location.state?.quizData || [];

  const [currentIndex, setCurrentIndex] = useState(0);
  const currentQuestion = quizData[currentIndex];

  const goNext = () => {
    if (currentIndex < quizData.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const goPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <Wrapper>
      <Header>
        <ProgressBarContainer>
          <ProgressBarFill style={{ width: `${((currentIndex + 1) / quizData.length) * 100}%` }} />
        </ProgressBarContainer>
        <TimerText>24:02</TimerText>
      </Header>

      <Container>
        <Title>Quiz Review</Title>

        {quizData.length === 0 ? (
          <p>No quiz data available</p>
        ) : (
          <>
            <QuestionCard>
              <QuestionText>
                Q{currentIndex + 1}: {currentQuestion.text}
              </QuestionText>

              <StatusText correct={currentQuestion.staus === "correct"}>
                {currentQuestion.staus === "correct" ? (
                  <>
                    <FaCheckCircle /> Correct Answer
                  </>
                ) : (
                  <>
                    <FaTimesCircle /> Incorrect Answer
                  </>
                )}
              </StatusText>

              <AnswerDetail>
                <strong>Correct Answer:</strong> {currentQuestion.correct_label} - {currentQuestion.correct_choice_text}
              </AnswerDetail>
              <AnswerDetail>
                <strong>Reason:</strong> {currentQuestion.answer_reason}
              </AnswerDetail>
            </QuestionCard>

            <Navigation>
              <NavButton onClick={goPrev} disabled={currentIndex === 0}>
                Previous
              </NavButton>
              <PageIndicator>
                {currentIndex + 1} / {quizData.length}
              </PageIndicator>
              <NavButton onClick={goNext} disabled={currentIndex === quizData.length - 1}>
                Next
              </NavButton>
            </Navigation>
          </>
        )}
      </Container>
    </Wrapper>
  );
}

// Styled Components
const Wrapper = styled.div`
  height: 89.6%;
  overflow-y: auto;
  margin-right: 0.2rem;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #8888887d;
    border-radius: 5px;
    margin-bottom: 0.3rem;
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(to bottom, #6a0dad, #af73cf, #f7c5cc);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    cursor: pointer;
    background: linear-gradient(to bottom, #4a077a, #805599, #c0949a);
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  background: linear-gradient(to right, #7b2cbf, #e0aaff);
`;

const ProgressBarContainer = styled.div`
  height: 6px;
  background-color: #ddd;
  flex: 1;
  border-radius: 3px;
  overflow: hidden;
  margin-right: 10px;
`;

const ProgressBarFill = styled.div`
  height: 100%;
  background-color: #c084fc;
  transition: width 0.3s ease-in-out;
`;

const TimerText = styled.div`
  color: white;
  font-weight: bold;
  font-size: 14px;
`;

const Container = styled.div`
  padding: 24px;
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 24px;
`;

const QuestionCard = styled.div`
  margin-bottom: 24px;
  padding: 16px;
  border-radius: 8px;
  background: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
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

const Navigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
`;

const NavButton = styled.button`
  background: #6a0dad;
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease;

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background: #571c9b;
  }
`;

const PageIndicator = styled.div`
  font-weight: 500;
  font-size: 14px;
`;
