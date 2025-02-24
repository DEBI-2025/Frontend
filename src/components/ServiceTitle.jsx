import styled from "styled-components";
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

const ServiceDiv = styled.div`
  background-color: #a1d6e24d;
  /* background-color: #C3A2F380; */
  height: 25%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5rem;
`;

const TitleService = styled.p`
  font-family: Roboto Slab;
  font-weight: 600;
  font-size: 2.5rem;
`;
const ImgService = styled.img`
  width: 11.1%;
`;
