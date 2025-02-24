import styled from "styled-components";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import FeatureCard from "../components/FeatureCard";

function Home() {
  return (
    <Wrapper>
      <NavBar />
      <Hero />
      <FeatureCard />
    </Wrapper>
  );
}

export default Home;

const Wrapper = styled.div`
  height: 100vh;
`;
