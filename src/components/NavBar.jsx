import { Link } from "react-router-dom";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";
import Quiz from "../pages/Quiz";
import Tips from "../pages/Tips";
import styled from "styled-components";

function NavBar() {
  return (
    <Nav>
      <span>Inner views</span>
      <Ul>
        <li>
          <Link to="/home" element={<Home />}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/quiz" element={<Quiz />}>
            Quiz
          </Link>
        </li>
        <li>
          <Link to="/tips" element={<Tips />}>
            Tips
          </Link>
        </li>
      </Ul>
      <Link to="/signup" element={<SignUp />}>
        Sign Up
      </Link>
    </Nav>
  );
}

export default NavBar;

const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-around;
  gap: 20rem;
  margin: 0rem;
  padding: 1rem 0rem;
  border: 1px solid #ccc;
`;

const Ul = styled.ul`
  margin: 0rem;
  padding: 0rem;
  display: flex;
  justify-content: space-around;
  gap: 7rem;
  list-style: none;
`;
