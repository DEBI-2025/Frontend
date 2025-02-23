import styled from "styled-components";
import LandingText from "../components/LandingText";
import NavBar from "../components/NavBar";

function LandingPage() {
  return (
    <AppContainer>
      <NavBar />
      <LandingText />
    </AppContainer>
  );
}

export default LandingPage;

const AppContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1rem;
`;