import styled, { keyframes } from "styled-components";

function SectionTitle({ title, bgColor }) {
  return (
    <Wrapper>
      <Center bgColor={bgColor}>
        <Title>{title}</Title>
      </Center>
    </Wrapper>
  );
}

export default SectionTitle;

var Wrapper = styled.div`
  display: flex;
  height: 25%;
  overflow: hidden;
  @media (max-width: 1024px) {
    height: 20%;
  }
  @media (max-width: 768px) {
    height: 20%;
  }
  @media (max-width: 550px) {
    height: 20%;
    flex-direction: column-reverse;
    justify-content: flex-end;
    padding-top: 3rem;
    gap: 2.4rem;
  }
`;

const slideIn = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: 0;
    visibility: hidden;
  }
  99% {
    visibility: visible;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
    visibility: visible;
  }
`;

const Center = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${(props) => props.bgColor};
  padding: 0 8rem 0 5rem;
  animation: ${slideIn} 2.5s ease-in-out 0.5s forwards;
  @media (max-width: 1024px) {
    padding: 0 3rem 0 3rem;
  }
  @media (max-width: 550px) {
    padding: 0;
    align-items: center;
  }
`;
const Title = styled.h1`
  font-family: Roboto Slab;
  letter-spacing: 10px;
  font-size: 3.5rem;
  text-align: center;
  background: black;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  display: inline-block;

  @media (max-width: 1024px) {
    font-size: 3rem;
    letter-spacing: 8px;
    margin-bottom: 0rem;
  }
  @media (max-width: 768px) {
    font-size: 2.4rem;
    letter-spacing: 4px;
    margin-bottom: 1.1rem;
  }
  @media (max-width: 550px) {
    font-size: 2.5rem;
    margin-bottom: 1.9rem;
  }
`;
