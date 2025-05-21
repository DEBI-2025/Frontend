import styled from "styled-components";

const QuizCard = ({
  questionText,
  choices = [],
  selectedChoice,
  onChoiceChange,
  onSubmit,
}) => {
  const handleOptionClick = (choice) => {
    onChoiceChange(choice);
  };

  // Check if the submit button should be disabled
  const isSubmitDisabled = !selectedChoice;

  return (
    <Content>
      <Card>
        <Question>{questionText}</Question>
        <OptionsContainer>
          {choices.map((choice, index) => (
            <Option
              key={index}
              onClick={() => handleOptionClick(choice)}
              selected={selectedChoice && selectedChoice.label === choice.label}
            >
              <OptionLabel>{choice.label}</OptionLabel>
              <OptionText>{choice.text}</OptionText>
            </Option>
          ))}
        </OptionsContainer>
        <SubmitButton onClick={onSubmit} disabled={isSubmitDisabled}>
          Submit Answer
        </SubmitButton>
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
  max-width: 650px;
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

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 24px;
`;

const Option = styled.div`
  padding: 12px 16px;
  background-color: ${(props) => (props.selected ? "#8b5cf6" : "#f3f4f6")};
  color: ${(props) => (props.selected ? "white" : "#444")};
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 16px;
  display: flex;
  align-items: center;

  &:hover {
    background-color: ${(props) => (props.selected ? "#7c3aed" : "#e5e7eb")};
  }
`;

const OptionLabel = styled.div`
  font-weight: bold;
  margin-right: 12px;
  min-width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${(props) => (props.selected ? "#ffffff" : "#8b5cf6")};
  color: ${(props) => (props.selected ? "#8b5cf6" : "#ffffff")};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px;
`;

const OptionText = styled.div`
  flex: 1;
`;

const SubmitButton = styled.button`
  width: 180px;
  padding: 12px;
  background: ${(props) =>
    props.disabled ? "#d1d5db" : "linear-gradient(to right, #8b5cf6, #ec4899)"};
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
