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
      <ServiceTitle />
      <ServicesContainer />
      <HomeFooter />
    </Wrapper>
  );
}

export default Home;

const Wrapper = styled.div`
  height: 100vh;
  overflow-y: auto;
  margin-right: 0.2rem;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #8888887d;
    border-radius: 5px;
    margin: 4.5rem;
    /* width: 5px; */
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(to bottom, #6a0dad, #af73cf, #f7c5cc);
    border-radius: 10px;
    /* width: 8px;  */
  }

  &::-webkit-scrollbar-thumb:hover {
    /* width: 10px; */
    cursor: pointer;
    background: linear-gradient(to bottom, #4a077a, #805599, #c0949a);
  }
`;
