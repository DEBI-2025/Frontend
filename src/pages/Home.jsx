import styled from "styled-components";
import LandingText from "../components/LandingText";
import landingImg from "../images/Landing.png";
import ServiceTitle from "../components/ServiceTitle";
import ServicesContainer from "../components/ServicesContainer";
import HomeFooter from "../components/HomeFooter";


function Home() {
  return (
    <Wrapper>
      <LandingText title={"Inner Views"} description={"AI-Powered Job Interview Simulator helps job seekers improve their interview skills through realistic simulations, AI-driven feedback,and expert tips. Users can practice answering industry-specific questions, receive instant evaluations, and enhance their responses with AI suggestions."} buttonText={"Start Practicing"} rightImg={landingImg}/>
      <ServiceTitle />
      <ServicesContainer />
      <HomeFooter />
    </Wrapper>
  );
}

export default Home;

const Wrapper = styled.div`
  height:89.6%;
  overflow-y: auto;
  margin-right: 0.2rem;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #8888887d;
    border-radius: 5px;
    margin-bottom: 0.3rem;
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
