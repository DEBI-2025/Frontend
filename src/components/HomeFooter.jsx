import styled from "styled-components";
import chatbot from "../images/chatbot.png";
function HomeFooter() {
  return (
    <Footer>
      <FooterImg src={chatbot}></FooterImg>
      <FooterRight>
        <FooterTitle>Coming Soon!</FooterTitle>
        <FooterDescription>
          Our smart chatbot is on its way! Get ready for instant interview tips,
          career advice, personalized feedback, resume enhancements, mock
          interview simulations, and expert guidance to help you land your dream
          job with confidence!
        </FooterDescription>
      </FooterRight>
    </Footer>
  );
}

export default HomeFooter;

const Footer = styled.div`
  background-color: #a1dbe24d;
  display: flex;
  justify-content: space-around;
  height: 35%;
  padding: 2rem;
  @media (max-width: 1024px) {
    height: 33%;
  }
  @media (max-width: 768px) {
    height: 28%;
  }
  @media (max-width: 550px) {
    height: 20%;
  }
`;

const FooterImg = styled.img`
  height: 100%;
`;

const FooterRight = styled.div`
  width: 60%;
  @media (max-width: 550px) {
    width: 40%;
  }
`;

const FooterTitle = styled.p`
  font-family: Roboto Slab;
  font-weight: 600;
  font-size: 2.5rem;
  letter-spacing: 0.2rem;
  margin: 2rem 0;
  @media (max-width: 1024px) {
    font-size: 2.5rem;
    margin: 1.1rem 0;
  }
  @media (max-width: 768px) {
    font-size: 2.2rem;
    margin: 1.1rem 0;
  }
  @media (max-width: 550px) {
    font-size: 1.9rem;
  }
`;

const FooterDescription = styled.p`
  font-size: 1.3rem;
  line-height: 2rem;
  @media (max-width: 1024px) {
    font-size: 1.03rem;
    line-height: 1.3rem;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    line-height: 1.2rem;
  }

  @media (max-width: 550px) {
    display: none;
  }
`;
