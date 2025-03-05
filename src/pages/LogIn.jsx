import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Email, Lock } from "@mui/icons-material";
import axios from "axios";
import IconAndTitle from "../components/IconAndTitle";
import LeftPanel from "../components/LeftPanel";
import InputField from "../components/InputField";
import Button from "../components/Button";

function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const loginData = {
      email,
      password,
    };

    try {
      // Send a POST request to the /jwt/create/ endpoint using Axios
      const response = await axios.post(
        "http://127.0.0.1:8000/auth/jwt/create/",
        loginData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // If login is successful, store the token and redirect
      if (response.status === 200) {
        localStorage.setItem("access_token", response.data.access); // Store the access token
        localStorage.setItem("refresh_token", response.data.refresh); // Optionally, store the refresh token
        alert("Login successful!");
        navigate("/");
      }
    } catch (error) {
      // Handle error (e.g., wrong credentials)
      if (error.response && error.response.status === 401) {
        alert("Invalid credentials, please try again.");
      } else {
        // console.error("Login failed:", error);
        alert("An error occurred during login. Please try again.");
      }
    }
  };

  return (
    <Container>
      <SignInSection>
        <TopLeftIcon>
          <IconAndTitle />
        </TopLeftIcon>

        <Title>Sign In To Your Account</Title>
        <form onSubmit={handleLogin}>
          <InputField
            icon={Email}
            placeholder="Email Address"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <InputField
            icon={Lock}
            placeholder="Password"
            type="password"
            value={password}
            id={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <ForgotText>Forgot Password?</ForgotText>
          <Button
            // onButtonClick={"/"}
            type="submit"
            width={"32rem"}
            fontSize={"1rem"}
          >
            Sign In
          </Button>
        </form>
      </SignInSection>
      <LeftPanel
        title={"Welcome Back!"}
        subtitle={
          "Please sign into your account with the given details to continue."
        }
        linkText={"Don’t Have an account ? Sign Up"}
        buttonText={"Sign Up"}
        onButtonClick={"/signup"}
      />
    </Container>
  );
}

export default LogIn;

const Container = styled.div`
  display: flex;
  height: 100vh;
  @media (max-width: 550px) {
    flex-direction: column-reverse;
  }
`;

const TopLeftIcon = styled.div`
  position: absolute;
  top: 1rem;
  left: 8rem;
  @media (max-width: 1024px) {
    left: 2rem;
  }
  @media (max-width: 768px) {
    left: 1.2rem;
    top: 2.5rem;
  }
  @media (max-width: 550px) {
    top: 0.4rem;
  }
`;

const SignInSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  padding-bottom: 1rem;
  cursor: default;
  @media (max-width: 1024px) {
    font-size: 2.7rem;
  }
  @media (max-width: 768px) {
    font-size: 2.1rem;
  }
`;

const ForgotText = styled.p`
  font-size: 1.2rem;
  cursor: default;
  text-align: center;
  color: #0d1b2a80;

  @media (max-width: 550px) {
    margin-top: 0;
  }
`;
