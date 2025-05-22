import styled from "styled-components";
import HrOrBehavioral from "../components/HrOrBehavioral";
import QuestionList from "../components/QuestionList";
import { useState } from "react";

function HrBank() {

  const [category ,setCategory]= useState("");
  return (
    <Wrapper>
      <HrOrBehavioral 
      selectedCategory={category}
      onCategoryChange={setCategory}/>
      <hr
        style={{ width: "90%", borderColor: "#6A0DAD4D", borderWidth: "1.5px" }}
      />
      <QuestionList endpoint={"http://127.0.0.1:8000/api/hr/questions/"}
        category={category} />
    </Wrapper>
  );
}

export default HrBank;
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
