import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";

function NavBar() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <Nav>
      <Title to="/">Inner views</Title>
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
      <Button to="/signup">Sign Up</Button>
    </Nav>
  );
}

export default NavBar;

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 20rem;
  /* margin: 0.1rem 0.1rem; */
  margin-bottom: 1rem;
  padding: 0.7rem;
  border: 0.2rem solid transparent;
  border-image: linear-gradient(to right, #6a0dad, #c3a2f3, #f7c5cc) 1;
  border-radius: 0 0 0.7rem 0.7rem;
`;

const Title = styled(NavLink)`
  text-transform: uppercase;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 600;
  background: linear-gradient(to right, #6a0dad, #c3a2f3, #f7c5cc);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
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
  color: #c3a2f3;
  text-decoration: none;
  font-weight: 600;
  display: inline-block;
  transition: transform 0.1s ease-in-out, color 0.1s ease-in-out;

  &:hover,
  &.active {
    transform: scale(1.1);
    text-decoration: underline;
    color: #6a0dad;
  }
`;

const Button = styled.button`
  padding: 0.7rem 1rem;
  font-size: 1.1rem;
  font-weight: 600;
  background-color: transparent;
  color: #c3a2f3;
  /* border: none; */
  border-radius: 50rem;
  cursor: pointer;
  transition: background-color 0.2s, transform 0.2s;

  &:hover {
    background-color: #6a0dad;
    color: white;
    transform: scale(1.1);
  }
`;
