import { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";
import IconAndTitle from "./IconAndTitle";
import { isAuthenticated } from "../utils/isAuth";

function NavBar() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  // console.log(isAuthenticated());

  return (
    <Nav>
      <IconAndTitle />
      <MenuIcon onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </MenuIcon>
      <Ul className={menuOpen ? "open" : ""}>
        <Li>
          <NavLinkStyled to="/" className={isActive("/") ? "active" : ""}>
            Home
          </NavLinkStyled>
        </Li>
        <Li>
          <NavLinkStyled
            to="/quiz"
            className={isActive("/quiz") ? "active" : ""}
          >
            Quiz
          </NavLinkStyled>
        </Li>
        <Li>
          <NavLinkStyled
            to="/tips"
            className={isActive("/tips") ? "active" : ""}
          >
            Tips
          </NavLinkStyled>
        </Li>
      </Ul>
      {!isAuthenticated() ? (
        <SignButton onClick={() => navigate("/login")}>Sign In</SignButton>
      ) : (
        <DivAlt/>
      )}
    </Nav>
  );
}

export default NavBar;

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

  @media (max-width: 1024px) {
    gap: 10rem;
  }
  @media (max-width: 768px) {
    gap: 7rem;
    padding: 0.5rem 0.9rem;
  }
  @media (max-width: 550px) {
  }
`;

const MenuIcon = styled.div`
  display: none;

  @media (max-width: 550px) {
    display: block;
    font-size: 1.9rem;
    cursor: pointer;
    color: #6a0dad;
  }
`;

const Ul = styled.ul`
  margin: 0rem;
  padding: 0;
  display: flex;
  justify-content: space-around;
  gap: 7rem;
  list-style: none;
  font-size: 1.4rem;
  @media (max-width: 1024px) {
    gap: 5rem;
    font-size: 1.25rem;
  }
  @media (max-width: 768px) {
    gap: 4rem;
    font-size: 1.15rem;
  }
  @media (max-width: 550px) {
    flex-direction: column;
    position: absolute;
    top: 3.5rem;
    left: 0;
    width: 100%;
    background: #ffffff;
    text-align: center;
    border-radius: 0 0 1rem 1rem;
    overflow: hidden;
    visibility: hidden;
    gap: 2rem;
    /* list-style: disc; */
  }

  &.open {
    max-height: 15rem;
    /* opacity: 1; */
    visibility: visible;
    padding: 1rem 0;
  }
`;

const Li = styled.li`
  text-underline-offset: 3px;
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
  width: 6.5rem;
  height: 2.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  color: #af73cf;
  cursor: pointer;
  transition: background-color 0.2s, transform 0.2s;
  border-radius: 50px;
  background: linear-gradient(white, white) padding-box,
    linear-gradient(to right, #6a0dad, #af73cf, #f7c5cc) border-box;
  border: 3px solid transparent;

  &:hover {
    background: #6a0dad;
    color: white;
    transform: scale(1.07);
  }

  @media (max-width: 1024px) {
    width: 6.5rem;
    height: 2.3rem;
    font-size: 1.1rem;
  }
  @media (max-width: 768px) {
    width: 5.5rem;
    height: 2.2rem;
    font-size: 1.05rem;
  }
  @media (max-width: 550px) {
    display: none;
  }
`;

const DivAlt = styled.div`
  width: 6.5rem;
  @media (max-width: 550px) {
    display: none;
  }
`;
