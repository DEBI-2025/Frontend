import { Link } from "react-router-dom";
import LogIn from "../pages/LogIn";
import SignUp from "../pages/SignUp";

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/login" element={<LogIn />}>
            Log In
          </Link>
        </li>
        <li>
          <Link to="/signup" element={<SignUp />}>
            Sign Up
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
