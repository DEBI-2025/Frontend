import styled from "styled-components";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";

function Home() {
  return (
    <Wrapper>
      <NavBar />
      <Hero />
    </Wrapper>
  );
}

export default Home;

const Wrapper = styled.div`
  height: 100vh;
`;
