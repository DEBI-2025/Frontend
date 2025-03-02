import styled from "styled-components";
import { motion } from "framer-motion";
import Button from "./Button";

function LandingText({ title, description, buttonText, rightImg }) {
  return (
    <Wrapper>
      <LeftSide
        as={motion.div}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <LeftTitle>{title}</LeftTitle>
        <LeftText>{description}</LeftText>
        <Button onClick={"/signup"}>{buttonText}</Button>
      </LeftSide>
      <RightSide
        as={motion.div}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Image src={rightImg} alt="landing image" />
      </RightSide>
    </Wrapper>
  );
}

export default LandingText;
const Wrapper = styled.div`
  display: flex;
  height: 100%;
  overflow: hidden;
  @media (max-width: 1024px) {
    height: 97%;
  }
  @media (max-width: 768px) {
    height: 100%;
  }
  @media (max-width: 550px) {
    height: 93%;
    flex-direction: column-reverse;
    justify-content: flex-end;
    padding-top: 3rem;
    gap: 2.4rem;
  }
`;

const LeftSide = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 8rem 0 5rem;

  @media (max-width: 1024px) {
    padding: 0 3rem 0 3rem;
  }
  @media (max-width: 550px) {
    padding: 0;
    align-items: center;
  }
`;

const LeftTitle = styled.h1`
  font-family: Roboto Slab;
  letter-spacing: 10px;
  font-size: 3.5rem;
  background: linear-gradient(to right, #6a0dad, #af73cf, #f7c5cc 70%);
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

const LeftText = styled.p`
  /* font-family: Literata; */
  /* font-family: Roboto Slab; */
  /* font-family: antonio; */

  font-size: 20px;
  line-height: 30px;
  margin-bottom: 3.5rem;

  @media (max-width: 1024px) {
    font-size: 17px;
    line-height: 25px;
    margin-bottom: 1.5rem;
  }
  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 23px;
    margin-bottom: 2.5rem;
  }
  @media (max-width: 550px) {
    display: none;
  }
`;

const RightSide = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 30rem;

  @media (max-width: 1024px) {
    width: 25rem;
  }
  @media (max-width: 768px) {
    width: 19rem;
  }
  @media (max-width: 550px) {
    width: 100%;
    padding-left: 4rem;
  }
`;
