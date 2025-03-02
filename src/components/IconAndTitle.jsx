import styled from "styled-components";
import robot from "../images/Robot.png";
import { Link } from "react-router-dom";

function IconAndTitle() {
  return (
    <NavTitle to="/">
      <NavImg src={robot} />
      <NavTxt>Inner views</NavTxt>
    </NavTitle>
  );
}

export default IconAndTitle;
const NavTitle = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
`;

const NavImg = styled.img`
  width: 25px;
  padding-top: 0.35rem;
  @media (max-width: 1024px) {
    width: 21px;
  }
  @media (max-width: 550px) {
    padding-top: 0.25rem;
  }
`;

const NavTxt = styled.p`
  text-transform: uppercase;
  font-size: 1.6rem;
  font-weight: 600;
  font-family: antonio;
  background: linear-gradient(to right, #6a0dad 20%, #af73cf, #f7c5cc);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  display: inline-block;

  @media (max-width: 1024px) {
    font-size: 1.3rem;
  }
`;
