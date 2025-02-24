import { NavLink, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import robot from "../assets/Robot.png";
function NavBar() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  const navigate = useNavigate();

  return (
    <Nav>
      <NavTitle to="/">
        <NavImg src={robot} />
        <NavTxt>InnerView</NavTxt>
      </NavTitle>
      <Ul>
        <li>
          <NavLinkStyled
            to="/"
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
      <LoginButton onClick={() => navigate("/login")}>Login</LoginButton>
    </Nav>
  );
}

export default NavBar;


const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 10rem;
  height: 4.5rem;
  padding: 0.7rem;
  border-radius: 0 0 1.7rem 1.7rem;
  border: 2px solid transparent;
  background: linear-gradient(white, white) padding-box,
  linear-gradient(to right, var(--primary), var(--secondary), var(--tertiary)) border-box;
  font-family: 'Poppins', sans-serif;
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
  font-size: 1.7rem;
  font-weight: 900;
  font-family: antonio;
  background: linear-gradient(to right, var(--primary) 20%, var(--secondary), var(--tertiary));
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  display: inline-block;
`;

const Ul = styled.ul`
  margin: 0rem;
  display: flex;
  justify-content: space-around;
  gap: 5rem;
  list-style: none;
  font-size: 20px;
`;

const NavLinkStyled = styled(NavLink)`
  color: var(--secondary);
  text-decoration: none;
  font-weight: 500;
  display: inline-block;
  // transition: transform 0.2s ease-in-out, color 0.2s ease-in-out;
  &::after {
    content: "";
    display: block;
    width: 3px;
    height: 3px;
    background: transparent;
    transition: width 0.5s;
  }
  &:hover::after {
    width: 100%;
    background: var(--secondary);
  }
`;

const LoginButton = styled.button`
  width: 6.5rem;
  height: 2.5rem;
  font-size: 16px;
  font-weight: 600;
  color:var(--secondary) ;
  cursor: pointer;
  transition: background-color 0.2s, transform 0.2s;
  border: none;
  border-radius: 50px;
  background: linear-gradient(white, white) padding-box,
    linear-gradient(to right, var(--primary), var(--secondary), var(--tertiary)) border-box;
  border: 3px solid transparent;
  transition: transform 0.5s ease-in-out, color 0.3s ease-in-out;
  

  &:hover {
    color: white;
    background: linear-gradient(to right, var(--primary), var(--secondary), var(--tertiary));
    transform: scale(1.05);
    border: none;
  }
`;
