import { NavLink, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import robot from "../images/Robot.png";
function NavBar() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  const navigate = useNavigate();

  return (
    <Nav>
      <NavTitle to="/">
        <NavImg src={robot} />
        <NavTxt>Inner views</NavTxt>
      </NavTitle>
      <Ul>
        <li>
          <NavLinkStyled
            to="/home"
            className={isActive("/home") ? "active" : ""}
          >
            Home
          </NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled
            to="/quiz"
            className={isActive("/quiz") ? "active" : ""}
          >
            Quiz
          </NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled
            to="/tips"
            className={isActive("/tips") ? "active" : ""}
          >
            Tips
          </NavLinkStyled>
        </li>
      </Ul>
      <SignButton onClick={() => navigate("/login")}>Log In</SignButton>
    </Nav>
  );
}

export default NavBar;

/* margin: 0.1rem 0.1rem; */
const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 15rem;
  height: 2.8rem;
  padding: 0.7rem;
  border-radius: 0 0 1.7rem 1.7rem;
  border: 3px solid transparent;
  background: linear-gradient(white, white) padding-box,
    linear-gradient(to right, #6a0dad, #af73cf, #f7c5cc) border-box;

`;

const NavTitle = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
`;

const NavImg = styled.img`
  width: 25px;
  padding-top: 0.35rem;
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
`;

const Ul = styled.ul`
  margin: 0rem;
  display: flex;
  justify-content: space-around;
  gap: 7rem;
  list-style: none;
  font-size: 1.4rem;
`;

const NavLinkStyled = styled(NavLink)`
  color: #af73cf;
  text-decoration: none;
  font-weight: 600;
  display: inline-block;
  transition: transform 0.2s ease-in-out, color 0.2s ease-in-out;

  &:hover,
  &.active {
    transform: scale(1.1);
    text-decoration: underline;
    color: #6a0dad;
  }
`;

const SignButton = styled.button`
  /* font-family: Literata; */
  /* padding: 0.7rem 1.4rem; */
  width: 6.5rem;
  height: 2.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  color: #af73cf;
  cursor: pointer;
  transition: background-color 0.2s, transform 0.2s;
  border: none;
  border-radius: 50px;
  background: linear-gradient(white, white) padding-box,
    linear-gradient(to right, #6a0dad, #af73cf, #f7c5cc) border-box;
  border: 3px solid transparent;
  

  &:hover {
    background: #6a0dad;
    color: white;
    transform: scale(1.07);
  }
`;
