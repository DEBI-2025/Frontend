import { useState, useEffect } from "react";
import styled from "styled-components";
import ProgressSection from "../components/ProgressBar";
import QuizNavigation from "../components/quizNavigation";
import QuizCard from "../components/QuizCard";

import DependentDropDowns from "../components/DependentDropDowns";
import Levels from "../components/Levels";
import QuestionList from "../components/QuestionList";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [totalQuestions, setTotalQuestions] = useState(25);
  const [response, setResponse] = useState("");
  const [timeLeft, setTimeLeft] = useState(1800);

  const [selectedField, setSelectedField] = useState(null);
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [selectedLevel, setSelectedLevel] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion(currentQuestion - 1);
      setResponse("");
    }
  };

  const goToNext = () => {
    if (currentQuestion < totalQuestions) {
      setCurrentQuestion(currentQuestion + 1);
      setResponse("");
    }
  };

  const handleSubmit = () => {
    console.log("Submitted answer:", response);
    goToNext();
  };

  const progressPercentage = (currentQuestion / totalQuestions) * 100;

  return (
    <Container>
      <ProgressSection
        progressPercentage={progressPercentage}
        timeLeft={timeLeft}
      />

      <Wrapper>
        <DependentDropDowns
          onSelectionChange={({ field, topics }) => {
            setSelectedField(field);
            setSelectedTopics(topics);
          }}
          selectedField={selectedField}
          selectedTopics={selectedTopics}
        />
        <hr
          style={{
            width: "90%",
            borderColor: "#6A0DAD4D",
            borderWidth: "1.5px",
          }}
        />
        <LevelWrapper>
          <Levels
            onLevelChange={(level) => {
              setSelectedLevel(level);
            }}
          />
        </LevelWrapper>
        <hr
          style={{
            width: "90%",
            borderColor: "#6A0DAD4D",
            borderWidth: "1.5px",
          }}
        />
        <LevelWrapper>
          <QuestionList
            endpoint={"http://localhost:8000/api/questions/"}
            field={selectedField?.label}
            topics={selectedTopics.map((topic) => topic.label)}
            level={selectedLevel?.name}
          />
        </LevelWrapper>
      </Wrapper>

      <QuizCard
        questionText={`${currentQuestion} - What is React.js?`}
        choices={[
          "A library for UI",
          "A backend framework",
          "A database",
          "An operating system",
        ]}
        selectedChoice={response}
        onChoiceChange={setResponse}
        onSubmit={handleSubmit}
      />
      <QuizNavigation
        currentQuestion={currentQuestion}
        totalQuestions={totalQuestions}
        onPrevious={goToPrevious}
        onNext={goToNext}
      />
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  font-family: Arial, sans-serif;
  background-color: #f9fafb;
`;

const Wrapper = styled.div`
  overflow-y: auto;
  max-height: 89vh;
  margin-right: 0.2rem;

  &::-webkit-scrollbar {
    width: 5px;
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

const LevelWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export default Quiz;
