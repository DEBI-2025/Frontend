import styled from "styled-components";
import landingImg from "../assets/Landing.png";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Hero() {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <LeftSide
        as={motion.div}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <LeftTitle>InnerView</LeftTitle>
        <LeftText>
          AI-Powered Job Interview Simulator helps job seekers improve their
          interview skills through realistic simulations, AI-driven feedback,
          and expert tips. Users can practice answering industry-specific
          questions, receive instant evaluations, and enhance their responses
          with AI suggestions.
        </LeftText>
        <LeftButton onClick={() => navigate("/signup")}>
          Start Practicing
        </LeftButton>
      </LeftSide>
      <RightSide
        as={motion.div}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Image src={landingImg} alt="landing image" />
      </RightSide>
    </Wrapper>
  );
}

export default Hero;

const Wrapper = styled.div`
  display: flex;
  height: 80%;
  overflow: hidden;
`;

const LeftSide = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 8rem 0 6rem;
`;

const LeftTitle = styled.h1`
  font-family: 'Poppins', sans-serif;
  letter-spacing: 6px;
  font-weight: 800;
  font-size: 54px;
  margin-bottom: 0.5rem;
  background: linear-gradient(to right, #6a0dad, #af73cf, #f7c5cc 70%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  display: inline-block;
`;

const LeftText = styled.p`
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  font-size: 20px;
  color: #333;
  // line-height: 30px;
  margin-bottom: 2rem;
`;

const LeftButton = styled.button`
  width: 14rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  height: 3.2rem;
  border-radius: 45px;
  cursor: pointer;
  background: linear-gradient(to right, var(--primary), var(--secondary), var(--tertiary));
  border: none;
  color: white;
  font-size: 18px;
  // letter-spacing: 0.5px;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.03);
  }
`;

const RightSide = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 32rem;
`;
