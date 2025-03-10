import { useState } from "react";
import styled from "styled-components";

function Question({ question }) {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleShowAnswer = () => {
    setShowAnswer(true);
  };

  return (
    <>
      <QuestionDiv>
        <QuestionTitle>
          {question.id}. {question.questionText}
        </QuestionTitle>
        <AnswerContainer>
          {!showAnswer && (
            <BlurDiv>
              <ShowAnswerButton onClick={handleShowAnswer}>
                View Answer
              </ShowAnswerButton>
            </BlurDiv>
          )}
          <AnswerText>- {question.answer}</AnswerText>
        </AnswerContainer>
      </QuestionDiv>
      <hr
        style={{ width: "90%", borderColor: "#6A0DAD4D", borderWidth: "1.5px" }}
      />
    </>
  );
}

export default Question;

const QuestionDiv = styled.div`
  margin: 2rem 0 2rem 4.8rem;
`;

const QuestionTitle = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
`;

const AnswerContainer = styled.div`
  position: relative;
`;

const AnswerText = styled.p`
  font-size: 1.02rem;
  color: #333;
  margin-left: 1rem;
  max-width: 90%;
  line-height: 1.5;
`;

const BlurDiv = styled.div`
  position: absolute;
  top: 0;
  /* left: 1rem; */
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.334);
  backdrop-filter: blur(3px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ShowAnswerButton = styled.button`
  background: linear-gradient(to right, #6a0dad, #af73cf, #f7c5cc 120%);
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: #4a077a;
  }
`;
