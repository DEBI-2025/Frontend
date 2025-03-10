import { useState } from "react";
import styled from "styled-components";

function Levels() {
  const [selectedLevel, setSelectedLevel] = useState("Entry-Level");

  const handleLevelClick = (level) => {
    setSelectedLevel(level);
    console.log("Selected Level:", level);
  };

  return (
    <Ul>
      {["Entry-Level", "Junior", "Mid-Level", "Senior"].map((level) => (
        <Li
          key={level}
          onClick={() => handleLevelClick(level)}
          $isSelected={selectedLevel === level}
        >
          {level}
        </Li>
      ))}
    </Ul>
  );
}

export default Levels;

const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* width: 60rem; */
  gap: 7rem;
  font-size: 1.4rem;
  padding: 0;
  margin: 0.5rem 0;
  list-style: none;
  /* background-color: red; */
`;

const Li = styled.li`
  color: ${({ $isSelected }) => ($isSelected ? "#6a0dad" : "#af73cf")};
  text-decoration: ${({ $isSelected }) => ($isSelected ? "underline" : "none")};
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  cursor: pointer;
  transition: color 0.2s;
  text-underline-offset: 3px;

  &:hover {
    color: #6a0dad;
    text-decoration: underline;
  }
`;
