import styled from "styled-components";
import LandingText from "../components/LandingText";
import NavBar from "../components/NavBar";

function LandingPage() {
  return (
    <Wrapper>
      <NavBar />
      <LandingText />
    </Wrapper>
  );
}

export default LandingPage;

const Wrapper = styled.div`
  height: 100vh;
`;
