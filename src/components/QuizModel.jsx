import styled from "styled-components";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";


function QuizModel (props){
    const {isPassed , score} = props;
    const total = score.correct + score.incorrect;
    const percentage = total > 0 ? Math.round((score.correct / total) * 100) : 0;
    return (
    <Wrapper>
<Card>
            <Title>
            <ProgressWrapper>
  <div style={{ position: "relative", width: "100%", height: "100%" }}>
    <CircularProgressbar
      value={percentage}
      text=""
      styles={buildStyles({
        pathColor: percentage < 50 ? "#dc2626" : "#16a34a",
        trailColor: "#f3e8ff",
        pathTransitionDuration: 0.5,
      })}
    />
    <PercentageText>{percentage}%</PercentageText>
  </div>
</ProgressWrapper>




            {isPassed
          ? "Congratulations, You Passed! ✅"
          : "Try Again, You Failed The Quiz! 😔"}
            </Title>
            <Score>
        <Correct>✅ {score.correct} Correct</Correct> &nbsp;
        <Incorrect>❌ {score.incorrect} Incorrect</Incorrect>
      </Score>

      
      <Button>Review Answers</Button>
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
max-width:600px;
width:90%;
padding: 24px;
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  background: linear-gradient(135deg, #ffffff, #f3e8ff);
  text-align: center;
`
const Title = styled.p`
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 12px;
   margin-top: 24px;
`;
const Score = styled.p`
  font-size: 1rem;
  color: #444;
  margin-bottom: 16px;
`;
const Correct = styled.span`
  color: #16a34a;
  font-weight: 500;
`;
const Incorrect = styled.span`
  color: #dc2626;
  font-weight: 500;
`;

const Icon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 20px;
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
`;
const ProgressWrapper = styled.div`
  width: 120px;
  height: 120px;
  margin: 0 auto;
`;
const PercentageText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 18px;
  font-weight: bold;
  color: #6b21a8;
`;
