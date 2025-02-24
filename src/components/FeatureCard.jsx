import React from "react";
import styled from "styled-components";
import { FaLightbulb } from "react-icons/fa";
import { motion } from "framer-motion";

const Wrapper = styled.div`
  padding: 0 8rem 0 6rem;
`;


const Card = styled.div`
  background: #fceef5;
  padding: 20px;
  border-radius: 15px;
  width: 350px;
  text-align: center;
`;

const IconContainer = styled.div`
  background: #6a0dad;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 15px;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 16px;
  color: #333;
  margin-bottom: 20px;
`;

const Button = styled.button`
  background: #6a0dad;
  color: white;
  border: none;
  padding: 12px 20px;
  font-size: 16px;
  border-radius: 25px;
  cursor: pointer;
  width: 100%;
  font-weight: bold;

  &:hover {
    background: #5c0dbd;
  }
`;

const FeatureCard = () => {
  return (
    <Wrapper>
    <Card as={motion.div}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}>
      <IconContainer>
        <FaLightbulb color="white" size={24} />
      </IconContainer>
      <Title>Interview Tips</Title>
      <Description>
        Ace your next interview with expert tips! From preparation strategies to
        common questions, get the insights you need to succeed.
      </Description>
      <Button>Get Hired!</Button>
    </Card>
    </Wrapper>
  );
};

export default FeatureCard;