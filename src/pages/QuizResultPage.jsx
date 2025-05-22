import React from "react";
import styled from "styled-components";
import { CheckCircle, XCircle } from "lucide-react";

const QuizResultPage = ({ results, onRetake }) => {
  const { result, Score, answers } = results;

  const totalQuestions = answers.length;
  const correctAnswers = answers.filter(
    (answer) => answer.staus === "correct"
  ).length;
  const wrongAnswers = totalQuestions - correctAnswers;
  const scorePercentage = parseFloat(Score.replace("%", ""));
  const isPassed =  result === "Passed"; // Typo in API

  const roundedScore = scorePercentage.toFixed(2) + "%";


  return (
    <ResultContainer>
      <ResultCard>
        <ResultHeader isPassed={isPassed}>
          <ResultIcon>
            {isPassed ? <CheckCircle size={40} /> : <XCircle size={40} />}
          </ResultIcon>
          <ResultTitle>Quiz {isPassed ? "Passed" : "Failed"}</ResultTitle>
          <ResultScore>{roundedScore}</ResultScore>
        </ResultHeader>

        <StatsSection>
          <StatItem>
            <StatLabel>Total Questions</StatLabel>
            <StatValue>{totalQuestions}</StatValue>
          </StatItem>
          <StatItem>
            <StatLabel>Correct Answers</StatLabel>
            <StatValue color="#10b981">{correctAnswers}</StatValue>
          </StatItem>
          <StatItem>
            <StatLabel>Wrong Answers</StatLabel>
            <StatValue color="#ef4444">{wrongAnswers}</StatValue>
          </StatItem>
        </StatsSection>

        <AnswersSection>
          <SectionTitle>Your Answers</SectionTitle>

          {answers.map((answer, index) => (
            <AnswerItem key={index} isCorrect={answer.staus === "correct"}>
              <AnswerNumber>{index + 1}</AnswerNumber>
              <AnswerContent>
                <AnswerQuestion>{answer.text}</AnswerQuestion>
                <AnswerDetails>
                  {answer.staus === "correct" ? (
                    <CorrectAnswer>
                      <CheckCircle size={16} />
                      Correct: {answer.correct_choice_text} (
                      {answer.correct_label})
                    </CorrectAnswer>
                  ) : (
                    <WrongAnswer>
                      <XCircle size={16} />
                      Your answer was wrong. Correct:{" "}
                      {answer.correct_choice_text} ({answer.correct_label})
                    </WrongAnswer>
                  )}
                </AnswerDetails>
                <AnswerReason>{answer.answer_reason}</AnswerReason>
              </AnswerContent>
            </AnswerItem>
          ))}
        </AnswersSection>
      </ResultCard>

      <RetakeButton onClick={onRetake}>Take Another Quiz</RetakeButton>
    </ResultContainer>
  );
};

// Styles
const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  width: 100%;
  font-family: Arial, sans-serif;
  background-color: #f9fafb;
  padding: 2rem;
  box-sizing: border-box;
`;

const ResultCard = styled.div`
  width: 100%;
  max-width: 800px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin-bottom: 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ResultHeader = styled.div`
  background: ${(props) =>
    props.isPassed
      ? "linear-gradient(135deg, #10b981, #059669)"
      : "linear-gradient(135deg, #ef4444, #dc2626)"};
  color: white;
  padding: 2rem;
  text-align: center;
`;

const ResultIcon = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;

const ResultTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const ResultScore = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
`;

const StatsSection = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 1.5rem;
  background-color: #f8fafc;
  border-bottom: 1px solid #e2e8f0;
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatLabel = styled.div`
  font-size: 0.875rem;
  color: #64748b;
  margin-bottom: 0.5rem;
`;

const StatValue = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${(props) => props.color || "#1e293b"};
`;

const AnswersSection = styled.div`
  padding: 1.5rem;
  overflow-y: auto;
  flex: 1;
`;

const SectionTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #1e293b;
  border-bottom: 1px solid #e2e8f0;
  padding-bottom: 0.75rem;
`;

const AnswerItem = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
  padding: 1rem;
  border-radius: 8px;
  background-color: ${(props) =>
    props.isCorrect ? "rgba(16, 185, 129, 0.1)" : "rgba(239, 68, 68, 0.1)"};
`;

const AnswerNumber = styled.div`
  width: 32px;
  height: 32px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin-right: 1rem;
  flex-shrink: 0;
`;

const AnswerContent = styled.div`
  flex: 1;
`;

const AnswerQuestion = styled.div`
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

const AnswerDetails = styled.div`
  margin-bottom: 0.5rem;
`;

const CorrectAnswer = styled.div`
  color: #10b981;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const WrongAnswer = styled.div`
  color: #ef4444;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const AnswerReason = styled.div`
  font-size: 0.875rem;
  color: #64748b;
  background-color: white;
  padding: 0.75rem;
  border-radius: 6px;
  margin-top: 0.5rem;
`;

const RetakeButton = styled.button`
  display: block;
  width: 300px;
  margin: 10px 1.5rem 2rem;
  padding: 0.75rem;
  background: linear-gradient(
    to right,
    rgb(173, 13, 13),
    rgb(213, 60, 60),
    rgb(216, 38, 62)
  );
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
  }

  position: sticky;
  bottom: 1rem;
`;

export default QuizResultPage;
