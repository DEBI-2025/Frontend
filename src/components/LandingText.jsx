import styled from "styled-components";
import heroImg from '../assets/hero.png';
import backgroundSvg from '../assets/background.svg'; 
import { useNavigate } from "react-router-dom";

function LandingText() {
  const navigate = useNavigate();

  return (
    <HeroSection>
      <Title>Ace Every Interview with AI-Powered Insights</Title>
      <Subtitle>
        Get personalized feedback from AI-driven mock interviews to sharpen your answers, improve your
        communication, and ace every interview.
      </Subtitle>
      <InterviewButton>
        Interview Now!
      </InterviewButton>
      <DashboardImage>
        <img 
          src={heroImg} alt="hero image"
        />
      </DashboardImage>
    </HeroSection>
  );
}

export default LandingText;

const HeroSection = styled.section`
  text-align: center;
  padding: 4rem 2rem;
  position: relative;
  background-image: url(${backgroundSvg}); 
  background-position: center; 
  background-size: 150%; 
  background-repeat: no-repeat; 
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  max-width: 800px;
  margin: 0 auto;
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: #666;
  max-width: 800px;
  margin: 1rem auto 2rem;
`;

const InterviewButton = styled.button`
  padding: 1rem 2rem;
  font-size: 1rem;
  background: #333;
  color: white;
  border: none;
  border-radius: 28px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0 auto;
  
  &:hover {
    background: #444;
  }
`;

const DashboardImage = styled.div`
  margin-top: 0.1rem;
  position: relative;
  img {
    display: block;
    margin: 0 auto;
    width: 100%;
    padding: 0px 0px 0px 80px;
  }
`;