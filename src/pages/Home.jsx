import styled from "styled-components";
import LandingText from "../components/LandingText";
import NavBar from "../components/NavBar";
import ServiceTitle from "../components/ServiceTitle";
import ServicesContainer from "../components/ServicesContainer";
import HomeFooter from "../components/HomeFooter";

function Home() {
  return (
    <Wrapper>
      <NavBar />
      <LandingText />
      <ServiceTitle/>
      <ServicesContainer/>
      <HomeFooter/>
    </Wrapper>
  );
}

export default Home;
const Wrapper = styled.div`
  height: 100vh;
`;
