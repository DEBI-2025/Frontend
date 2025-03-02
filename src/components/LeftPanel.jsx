import styled from "styled-components";
import Button from "./Button";
import vector from "../images/V.png";

function LeftPanel({ title, subtitle, linkText, buttonText, onButtonClick }) {
  return (
    <Container>
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
      <LinkText>{linkText}</LinkText>
      <Button
        type={"transparent"}
        width={"32rem"}
        fontSize={"1rem"}
        onClick={onButtonClick}
      >
        {buttonText}
      </Button>
    </Container>
  );
}

export default LeftPanel;

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to bottom right, #af73cf, #f7c5cc);
  color: white;
  cursor: default;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url(${vector});
    background-repeat: no-repeat;
    background-size: contain;
    pointer-events: none;
  }
  @media (max-width: 550px) {
    flex: 0.7;
  }
`;

const Title = styled.h1`
  /* font-family: Roboto Slab; */
  font-size: 3rem;
  letter-spacing: 1.2px;
  @media (max-width: 1024px) {
    font-size: 2.7rem;
  }
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  @media (max-width: 550px) {
    font-size: 2rem;
    padding-bottom: 0.5rem;
  }
`;

const SubTitle = styled.p`
  font-size: 1.2rem;
  padding-bottom: 7.1rem;
  letter-spacing: 1px;
  text-align: center;
  @media (max-width: 1024px) {
    font-size: 1.1rem;
    padding-bottom: 2.5rem;
  }
  @media (max-width: 768px) {
    padding-bottom: 2.3rem;
  }
  @media (max-width: 550px) {
    display: none;
  }
`;

const LinkText = styled.p`
  font-size: 1.2rem;
  padding-bottom: 1rem;
  @media (max-width: 768px) {
    padding-bottom: 0rem;
  }
  @media (max-width: 550px) {
    font-size: 1.1rem;
  }
`;
