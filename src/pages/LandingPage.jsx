import styled from "styled-components";
import LandingText from "../components/Hero";
import NavBar from "../components/NavBar";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";

function LandingPage() {
  return (
    <AppContainer>
      <NavBar />
      <LandingText />
      <Features />
      <HowItWorks />
    </AppContainer>
  );
}

export default LandingPage;

const AppContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1rem;
`;