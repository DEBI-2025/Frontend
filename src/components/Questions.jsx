import { useState } from "react";
import styled from "styled-components";
import { IoMdArrowDropdown  } from "react-icons/io";

function Question({
  // key,
  questionText,
  answer,
  field,
  topic,
  level,
  thought
  // isFlagged,
}) {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleShowAnswer = () => {
    setShowAnswer(true);
  };
  return (
    <>
      <QuestionDiv>
        <QuestionTitle>{questionText}</QuestionTitle>
        <Metadata>
          {field && (
            <span>
              <b>Field: </b>
              {field}
            </span>
          )}
          {topic && (
            <span>
              <b>Topic: </b>
              {topic}
            </span>
          )}
          {level && (
            <span>
              <b>Level: </b>
              {level}
            </span>
          )}
        </Metadata>

        <AnswerContainer>
          
                    
          <BlurredAnswer show={showAnswer}>
            
             { thought && (
     <ThoughtWrapper>
      <ThoughtTitle>Thought Process : </ThoughtTitle>
    <AnswerReason>{thought}</AnswerReason>
    <ThoughtTitle>Sample Example : </ThoughtTitle>
  </ThoughtWrapper>
      
  )}
            - {answer}</BlurredAnswer>
          
  
          {!showAnswer && (
            <ButtonWrapper>
              <ShowAnswerButton onClick={handleShowAnswer}>
                <IconWrapper>
                  <IoMdArrowDropdown  />
                </IconWrapper>
                View Answer
              </ShowAnswerButton>
            </ButtonWrapper>
          )}
        </AnswerContainer>
        
      </QuestionDiv>
      <hr style={{ borderColor: "#6A0DAD4D", borderWidth: "1.5px" }} />
    </>
  );
}
export default Question;

const QuestionDiv = styled.div`
  margin: 2rem 0;
`;

const QuestionTitle = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
`;

const Metadata = styled.div`
  display: flex;
  font-size: 0.7rem;
  padding-top: 0.3rem;
  color: #777;
  gap: 0.5rem;
`;

const AnswerContainer = styled.div`
  position: relative;
  min-height: 50px;
  padding-left: 1rem
`;
const TextContent = styled.p`
  font-size: 0.9rem;
  color: #333;
  line-height: 1.5;
  margin:0;


 
`;
const BlurredAnswer = styled(TextContent)`
  
  max-width: 90%;
  
  filter: ${({ show }) => (show ? "none" : "blur(4px)")};
  transition: filter 0.3s ease-in-out;
  position: relative;
  z-index: 1;
   
  
`;

const ButtonWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`;

const ShowAnswerButton = styled.button`
  background: linear-gradient(to right, #6a0dad, #af73cf, #f7c5cc 120%);
  color: white;
  display: flex;
  gap: 5px;
  align-items: center;
  padding: 12px 20px 12px 12px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: #4a077a;
  }
`;
const IconWrapper = styled.span`
  display: flex;
  font-size: 20px;
`;
const ThoughtWrapper = styled.div`
   padding-left: 0.5rem;
   
  
`;

const ThoughtTitle = styled.h4`
padding:0.4rem;
color: #6a0dad;
margin: 0;

`;

const AnswerReason = styled(TextContent)``;


