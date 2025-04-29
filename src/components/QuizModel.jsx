import styled from "styled-components";


function QuizModel (props){
    const {isPassed , score} = props;
    return (
        <Card>
            <Title>
            {isPassed
          ? "Congratulations, You Passed! ✅"
          : "Try Again, You Failed The Quiz! 😔"}
            </Title>
            <Score>
        <Correct>✅ {score.correct} Correct</Correct> &nbsp;
        <Incorrect>❌ {score.incorrect} Incorrect</Incorrect>
      </Score>

      <Icon>{isPassed ? "🎉" : "❌"}</Icon>

      <Button>Review Answers</Button>
        </Card>
    )
}
export default QuizModel;
const Card = styled.div`
max-width:400px;
padding: 24px;
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  background: linear-gradient(135deg, #ffffff, #f3e8ff);
  text-align: center;
`
const Title = styled.p`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 12px;
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
