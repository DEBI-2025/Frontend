import { useState } from "react";
import styled from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";
import { Person, Phone, Email, Lock, CalendarToday } from "@mui/icons-material";
import { motion } from "framer-motion";
import Validation from "../validation"; // Custom validation function
import axios from "axios";
import robot from "../images/Robot.png";
import LeftPanel from "../components/LeftPanel";

function SignUp() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const newObj = { ...values, [event.target.name]: event.target.value };
    setValues(newObj);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(Validation(values)); // Validate input

    if (Object.keys(errors).length === 0) {
      // Only proceed if no errors
      setIsSubmitting(true);

      try {
        const requestBody = {
          first_name: values.firstName,
          last_name: values.lastName,
          email: values.email,
          phone: values.phone,
          date_of_birth: values.dateOfBirth,
          password: values.password,
          re_password: values.confirmPassword, // Assuming `re_password` is for confirming password
        };

        // Make the POST request to the server to create the user
        const response = await axios.post(
          "http://localhost:8000/auth/users/", // Replace with your API endpoint
          requestBody,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.status === 201) {
          // Successfully created user, navigate to login page
          alert("Sign up successful! Please login.");
          navigate("/login");
        }
      } catch (error) {
        console.error("Error signing up:", error);
        alert("An error occurred during sign up. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <Container
      as={motion.div}
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <LeftPanel
        title="Hello Friend!"
        subtitle={
          <>
            Please Provide The Information to
            <br /> Register Your Account
          </>
        }
        linkText="Already Have an Account?"
        buttonText="Sign In"
        onButtonClick={() => navigate("/login")}
      />
      <RightPanel>
        <Navwrapper>
          <NavTitle to="/">
            <NavImg src={robot} />
            <NavTxt>Inner views</NavTxt>
          </NavTitle>
        </Navwrapper>

        <Title>Register with us!</Title>
        <Form onSubmit={handleSubmit}>
          <RowWrapper>
            <FieldWrapper>
              <InputWrapper>
                <Icon>
                  <Person fontSize="small" />
                </Icon>
                <InputField
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                />
              </InputWrapper>
              {errors.firstName && <ErrorMsg>{errors.firstName}</ErrorMsg>}
            </FieldWrapper>
            <FieldWrapper>
              <InputWrapper>
                <Icon>
                  <Person fontSize="small" />
                </Icon>
                <InputField
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                />
              </InputWrapper>
              {errors.lastName && <ErrorMsg>{errors.lastName}</ErrorMsg>}
            </FieldWrapper>
          </RowWrapper>

          <InputWrapper>
            <Icon>
              <Email fontSize="small" />
            </Icon>
            <InputField
              type="email"
              placeholder="Email Address"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
          </InputWrapper>
          {errors.email && <ErrorMsg>{errors.email}</ErrorMsg>}

          <InputWrapper>
            <Icon>
              <Phone fontSize="small" />
            </Icon>
            <InputField
              type="tel"
              placeholder="Phone Number"
              name="phone"
              value={values.phone}
              onChange={handleChange}
            />
          </InputWrapper>
          {errors.phone && <ErrorMsg>{errors.phone}</ErrorMsg>}

          <InputWrapper>
            <Icon>
              <CalendarToday fontSize="small" />
            </Icon>
            <InputField
              type="date"
              name="dateOfBirth"
              value={values.dateOfBirth}
              onChange={handleChange}
              style={{ color: "gray" }}
            />
          </InputWrapper>
          {errors.dateOfBirth && <ErrorMsg>{errors.dateOfBirth}</ErrorMsg>}

          <InputWrapper>
            <Icon>
              <Lock fontSize="small" />
            </Icon>
            <InputField
              type="password"
              placeholder="Password"
              name="password"
              value={values.password}
              onChange={handleChange}
            />
          </InputWrapper>
          {errors.password && <ErrorMsg>{errors.password}</ErrorMsg>}

          <InputWrapper>
            <Icon>
              <Lock fontSize="small" />
            </Icon>
            <InputField
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              value={values.confirmPassword}
              onChange={handleChange}
            />
          </InputWrapper>
          {errors.confirmPassword && (
            <ErrorMsg>{errors.confirmPassword}</ErrorMsg>
          )}

          <LinkText type="forgot">Sign up with</LinkText>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Signing up..." : "Sign Up"}
          </Button>
        </Form>
      </RightPanel>
    </Container>
  );
}

export default SignUp;

// Styled components...
const Container = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;
  padding: 0;
  margin: 0;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const RightPanel = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: white;
  padding: 2rem;
  margin: 0;
`;

const Title = styled.h1`
  font-size: 2.1rem;
  margin-top: 0;
  padding-top: 2rem;
`;

const RowWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
`;

const InputField = styled.input`
  color: gray;
  justify-content: space-between;
  width: 100%;
  border: none;
  margin-left: 10px;
  &:focus {
    outline: none;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  width: 70%;
  padding: 8px;
  border: 1px solid #d8b4fe;
  border-radius: 25px;
  outline: none;
  text-indent: 15px;
  margin-top: 1rem;
`;

const Icon = styled.div`
  left: 10px;
  color: gray;
  display: flex;
  align-items: center;
  font-size: 10px;
`;

const ErrorMsg = styled.p`
  font-size: 13px;
  margin: 2px 0 0 0;
  color: red;
`;

const Button = styled.button`
  width: 80%;
  font-family: Literata;
  padding: 12px;
  background: linear-gradient(to right, #6a0dad, #af73cf, #f7c5cc);
  color: white;
  border: 1px solid white;
  border-radius: 25px;
  font-weight: 600;
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
  font-size: 1rem;
  font-weight: 600;
  font-family: antonio;
  background: linear-gradient(to right, #6a0dad 20%, #af73cf, #f7c5cc);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  display: inline-block;
`;

const Navwrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 0.5rem 1rem;
  @media (max-width: 768px) {
    display: none;
  }
`;

const LinkText = styled.p`
  font-size: 1rem;
  margin-top: 1rem;
  color: rgba(13, 27, 42, 0.5);
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
