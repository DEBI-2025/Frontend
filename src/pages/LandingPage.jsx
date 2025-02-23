import styled from "styled-components";
import LandingText from "../components/LandingText";
import NavBar from "../components/NavBar";
import Features from "../components/Features";

function LandingPage() {
  return (
    <AppContainer>
      <NavBar />
      <LandingText />
      <Features />
    </AppContainer>
  );
}

export default LandingPage;

const AppContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1rem;
`;