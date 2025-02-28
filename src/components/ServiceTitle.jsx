import styled, { keyframes } from "styled-components";
import character from "../images/Character.png";

function ServiceTitle() {
  return (
    <ServiceDiv>
      <TitleService>Our Services</TitleService>
      <ImgService src={character} alt="Character Photo" />
    </ServiceDiv>
  );
}

export default ServiceTitle;

const slideIn = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: 0;
    visibility: hidden;
  }
  99% {
    visibility: visible;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
    visibility: visible;
  }
`;

const ServiceDiv = styled.div`
  background-color: #a1d6e24d;
  height: 25%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5rem;
  opacity: 0;
  visibility: hidden;
  animation: ${slideIn} 2.5s ease-in-out 0.5s forwards;
  @media (max-width: 768px) {
    height: 20%;
  }
  @media (max-width: 550px) {
    justify-content: center;
    gap: 5rem;
    height: 15%;
  }
`;

const TitleService = styled.p`
  font-family: "Roboto Slab";
  font-weight: 600;
  font-size: 2.5rem;
  @media (max-width: 1024px) {
    font-size: 2.1rem;
  }
  @media (max-width: 768px) {
    font-size: 1.7rem;
  }
  @media (max-width: 550px) {
    font-size: 1.5rem;
  }
`;

const ImgService = styled.img`
  width: 11.1%;
  @media (max-width: 1024px) {
    width: 14.1%;
  }
  @media (max-width: 768px) {
    width: 16.1%;
  }
  @media (max-width: 550px) {
    width: 38.1%;

    /* display: none; */
  }
`;
