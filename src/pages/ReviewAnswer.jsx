import { useLocation } from "react-router-dom";
import styled from "styled-components";
 
export default function ReviewAnswers(){
  const location = useLocation();
  const quizData = location.state?.quizData || [];
  return (
    <Wrapper>
<Container>
      <Title>
        Quiz Review
      </Title>
      {quizData.length === 0 ?(
        <p>No quiz data available </p>
      ):(
        quizData.map((item ,index)=>(
          <QuestionCard key ={index}>
            <QuestionText>
              Q{index+1}:{item.text}
            </QuestionText>
            <StatusText correct= {item.staus === "correct"}>
              Your answer was :{item.staus}
            </StatusText>
            
            <AnswerDetail><strong>Correct Answer:</strong> {item.correct_label} - {item.correct_choice_text}</AnswerDetail>
            <AnswerDetail><strong>Reason:</strong> {item.answer_reason}</AnswerDetail>
            </QuestionCard>
        ))
      )
      }
    </Container>
    
    </Wrapper>
    
  )
  
}

const Container = styled.div`
padding:24px;
max-width:800px;
margin:0 auto;
overflow-y: auto;
`;
const Title = styled.h1`
font-size:2rem;
font-weight:bold;
margin-bottom:24px`
;
const QuestionCard = styled.div`
margin-bottom: 24px;
  padding: 16px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background-color: #f9fafb;
`;
const QuestionText = styled.p`
font-weight: 600;
  margin-bottom: 8px;
`;
const StatusText =  styled.p.attrs(() => ({
  // prevent 'correct' from going to DOM
}))`
color:${(props)=> (props.correct ? "#16a34a" : "#dc2626")};
 margin-bottom: 4px;
`;

const AnswerDetail = styled.p`
  margin: 4px 0;
`;
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
    /* width: 5px; */
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(to bottom, #6a0dad, #af73cf, #f7c5cc);
    border-radius: 10px;
    /* width: 8px;  */
  }

  &::-webkit-scrollbar-thumb:hover {
    /* width: 10px; */
    cursor: pointer;
    background: linear-gradient(to bottom, #4a077a, #805599, #c0949a);
  }
`;





