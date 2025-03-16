import styled from "styled-components";
import DependentDropDowns from "../components/DependentDropDowns";
import Levels from "../components/Levels";
import QuestionList from "../components/QuestionList";
import { useState } from "react";

function TechBank() {
  const [selectedField, setSelectedField] = useState(null);
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [selectedLevel, setSelectedLevel] = useState(null);

  return (
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
        style={{ width: "90%", borderColor: "#6A0DAD4D", borderWidth: "1.5px" }}
      />
      <LevelWrapper>
        <Levels onLevelChange={(level) => setSelectedLevel(level)} />
      </LevelWrapper>
      <hr
        style={{ width: "90%", borderColor: "#6A0DAD4D", borderWidth: "1.5px" }}
      />
      <LevelWrapper>
        <QuestionList
          endpoint={"http://localhost:8000/api/questions/"}
          field={selectedField?.value}
          topics={selectedTopics.map((topic) => topic.value)}
          level={selectedLevel?.id}
        />
      </LevelWrapper>
    </Wrapper>
  );
}

export default TechBank;

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
