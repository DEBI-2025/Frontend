import React from "react";
import styled from "styled-components";


const LeftPanel = ({ title, subtitle, linkText, buttonText, onButtonClick }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
      <LinkText>{linkText}</LinkText>
      <Button type="signup" onClick={onButtonClick}>{buttonText}</Button>
    </Container>
  );
};

export default LeftPanel;


const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to bottom right, #af73cf, #f7c5cc);
  color: white;
  cursor: pointer;
  padding-bottom: 10px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
`;

const SubTitle = styled.p`
  font-family: Literata;
  margin-top: -10px;
  font-size: 19px;
  padding-right: 2rem;
  letter-spacing: 1px;
`;

const LinkText = styled.p`
  font-size: 1rem;
  margin-top: "6.5rem";
  color: "white";
`;

const Button = styled.button`
  width: 80%;
  font-family: Literata;
  padding: 12px;
  background: ${({ type }) =>
    type === "signup" ? "none" : "linear-gradient(to right, #6a0dad , #af73cf , #f7c5cc )"};
  color: white;
  border: 1px solid white;
  border-radius: 25px;
  font-weight: 600;
`;
