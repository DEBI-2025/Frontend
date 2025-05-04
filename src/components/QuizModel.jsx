import styled from "styled-components";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { useNavigate } from "react-router-dom";
import useQuizLogic from "../logic/quiz/useQuizLogic";

function QuizModel ({data}){
  const isPassed = data.result === 'Pased'; 
  const percentage = parseFloat(data.Score.replace('%', ''));
  const navigate = useNavigate();
  const { scoreData } = useQuizLogic();

    return (
    <Wrapper>
<Card>
           
            <ProgressWrapper>
  <div style={{ position: "relative", width: "100%", height: "100%" }}>
    <CircularProgressbar
      value={percentage}
      text=""
      styles={buildStyles({
        pathColor: percentage < 70 ? "#dc2626" : "#16a34a",
        trailColor: "#f3e8ff",
        pathTransitionDuration: 0.5,
      })}
    />
    <PercentageText>{percentage.toFixed(0)}%</PercentageText>
  </div>
</ProgressWrapper>


<Title>

            {isPassed
          ? "Congratulations, You Passed! ✅"
          : "Try Again, You Failed The Quiz! 😔"}
            </Title>
            <Score>

      </Score>

      
      <Button
      
      onClick={()=>navigate("/review-answers" , {state:{quizData :data.answers }})}
      >Review Answers</Button>
        </Card>
    </Wrapper>
        
    )
}
export default QuizModel;
const Wrapper = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.3); /* dark transparent overlay */
  backdrop-filter: blur(6px);     /* blur effect */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;
const Card = styled.div`
  max-width: 600px;
  width: 90%;
  padding: 24px;
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  background: linear-gradient(135deg, #ffffff, #f3e8ff);
  text-align: center;

  /* Media query for smaller devices */
  @media (max-width: 768px) {
    max-width: 90%;
    padding: 16px;
  }

  @media (max-width: 480px) {
    max-width: 100%;
    padding: 12px;
  }
`;

const Title = styled.div`
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 12px;
  margin-top: 1rem;

  /* Media query for smaller devices */
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const Score = styled.p`
  font-size: 1rem;
  color: #444;
  margin-bottom: 16px;
`;

const Button = styled.button`
  background-color: #d8b4fe;
  color: #fff;
  font-weight: 600;
  padding: 10px 20px;
  border: none;
  border-radius: 14px;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background-color: #c084fc;
  }

  /* Media query for smaller devices */
  @media (max-width: 768px) {
    padding: 8px 16px;
  }

  @media (max-width: 480px) {
    padding: 6px 14px;
  }
`;

const ProgressWrapper = styled.div`
  width: 120px;
  height: 120px;
  margin: 0 auto;

  /* Media query for smaller devices */
  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }

  @media (max-width: 480px) {
    width: 80px;
    height: 80px;
  }
`;

const PercentageText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 18px;
  font-weight: bold;
  color: #6b21a8;

  /* Media query for smaller devices */
  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;