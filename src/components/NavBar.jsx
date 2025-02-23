import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSignUpClick = () => {
    navigate('/signup');
  };

  const handleSignInClick = () => {
    navigate('/signin');
  };

  return (
    <Nav>
      <Logo>InnerView</Logo>
      <HamburgerMenu onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </HamburgerMenu>
      <NavLinks $isOpen={isOpen}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/quiz">Quiz</NavLink>
        <NavLink to="/tips">Tips</NavLink>
      </NavLinks>
      <ButtonsContainer>
      <Button onClick={handleSignUpClick}>Sign Up</Button>
      <Button $primary onClick={handleSignInClick}>Sign In</Button>
      </ButtonsContainer>
    </Nav>
  );
};

export default Navbar;


const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: transparent;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem;
  }
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-right: 2rem;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 1rem;
  }
`;

const NavLinks = styled.div`
  font-size: 1rem;
  display: flex;
  gap: 2rem;
  font-weight: 600;
  align-items: center;
  margin-right: auto;

  @media (max-width: 768px) {
    display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
    flex-direction: column;
    width: 100%;
    gap: 1rem;
    margin-right: 0;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #333;
  &:hover {
    color: #666;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    margin-top: 1rem;
  }
`;

const Button = styled.button`
  padding: 0.5rem 1.5rem;
  border-radius: 20px;
  border: none;
  font-size: 0.8rem;
  cursor: pointer;
  font-weight: 500;
  background: ${props => props.$primary ? '#333' : 'transparent'};
  border: ${props => props.$primary ? '' : '2px solid #C2C2C2'};
  color: ${props => props.$primary ? 'white' : '#333'};

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const HamburgerMenu = styled.div`
  display: none;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
`;