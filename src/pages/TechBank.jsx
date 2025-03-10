import styled from "styled-components";
import DependentDropDowns from "../components/DependentDropDowns";
import Levels from "../components/Levels";
import QuestionList from "../components/QuestionList";

function TechBank() {
  return (
    <>
      <DependentDropDowns />
      <hr
        style={{ width: "90%", borderColor: "#6A0DAD4D", borderWidth: "1.5px" }}
      />
      <Wrapper>
        <Levels />
      </Wrapper>
      <hr
        style={{ width: "90%", borderColor: "#6A0DAD4D", borderWidth: "1.5px" }}
      />
      <QuestionList />
    </>
  );
}

export default TechBank;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;
