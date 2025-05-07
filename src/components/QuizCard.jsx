import styled from "styled-components";

const QuizCard = ({ questionText, choices = [], selectedChoice, onChoiceChange, onSubmit }) => {
  const handleOptionClick = (choice) => {
    onChoiceChange(choice);
  };

  return (
    <Content>
      <Card>
        <Question>{questionText}</Question>
        {choices.map((choice, index) => (
          <Option
            key={index}
            onClick={() => handleOptionClick(choice)}
            selected={selectedChoice === choice}
          >
            {choice}
          </Option>
        ))}
        <SubmitButton onClick={onSubmit}
        disabled={!selectedChoice}>Submit Answer</SubmitButton>
      </Card>
    </Content>
  );
};

const Content = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
`;

const Card = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  max-width: 450px;
  width: 100%;
  padding: 30px;
`;

const Question = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 24px;
  color: #333;
  text-align: center;
`;

const Option = styled.div`
  padding: 12px 16px;
  margin-bottom: 12px;
  background-color: ${(props) => (props.selected ? "#8b5cf6" : "#f3f4f6")};
  color: ${(props) => (props.selected ? "white" : "#444")};
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 16px;
  &:hover {
    background-color: ${(props) => (props.selected ? "#7c3aed" : "#e5e7eb")};
  }
`;

const SubmitButton = styled.button`
  width: 180px;
  padding: 12px;
  background: ${(props) =>
    props.disabled
      ? "#d1d5db"
      : "linear-gradient(to right, #8b5cf6, #ec4899)"};
  color: ${(props) => (props.disabled ? "#9ca3af" : "white")};
  border: none;
  border-radius: 9999px;
  font-weight: 500;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  font-size: 16px;
  display: block;
  margin: 0 auto;
  transition: background 0.3s;
`;

export default QuizCard;
