import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";

function LeftPanel({ title, subtitle, linkText, buttonText, onButtonClick }) {
  const navigate = useNavigate();

  return (
    <Container>
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
      <LinkText>{linkText}</LinkText>
      <Button
        type={"transparent"}
        width={"32rem"}
        fontSize={"1rem"}
        onClick={() => navigate(onButtonClick)}
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
`;

const Title = styled.h1`
  /* font-family: Roboto Slab; */
  font-size: 3rem;
  letter-spacing: 1.2px;
`;

const SubTitle = styled.p`
  /* margin-top: -10px; */
  font-size: 1.2rem;
  padding-bottom: 7.1rem;
  letter-spacing: 1px;
`;

const LinkText = styled.p`
  font-size: 1.2rem;
  padding-bottom: 1rem;
`;
