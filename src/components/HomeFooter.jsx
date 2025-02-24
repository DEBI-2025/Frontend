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
  height: 40%;
  padding: 2rem;
`;

const FooterImg = styled.img`
  height: 100%;
`;

const FooterRight = styled.div`
  width: 60%;
`;

const FooterTitle = styled.p`
  font-family: Roboto Slab;
  font-weight: 600;
  font-size: 3.5rem;
  letter-spacing: 0.2rem;
  margin: 2rem 0;
`;

const FooterDescription = styled.p`
  font-size: 1.5rem;
`;
