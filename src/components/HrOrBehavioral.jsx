import styled from "styled-components";

function HrOrBehavioral({selectedCategory  ,onCategoryChange }) {
  return (
    <Wrapper>
      <Ul>
        <Li
         $isSelected ={selectedCategory === "HR"}
        onClick={()=> onCategoryChange("HR")}>HR</Li>
        <Li
        $isSelected ={selectedCategory === "Behavioral"}
        onClick={()=> onCategoryChange("Behavioral")}>Behavioral</Li>
      </Ul>
    </Wrapper>
  );
}

export default HrOrBehavioral;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0.5rem 0;
  /* padding-left: 8rem; */
`;

const Ul = styled.ul`
  display: flex;
  width: 30%;
  justify-content: space-between;
  align-items: center;
  font-size: 1.4rem;
  padding: 0;
  margin: 0.5rem 0;
  list-style: none;
  @media (max-width: 600px) {
    width: 100%;
    font-size: 1.1rem;
    justify-content: center;
    gap: 2rem; 
  }
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
