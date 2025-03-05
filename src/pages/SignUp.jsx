import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Person, Phone, Email, Lock, CalendarToday } from "@mui/icons-material";
import Validation from "../validation"; // Custom validation function
import axios from "axios";
import LeftPanel from "../components/LeftPanel";
import IconAndTitle from "../components/IconAndTitle";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { useSignUp } from "../logic/signUp";

function SignUp() {
  const { values, errors, handleChange, handleSubmit, isLoading } = useSignUp();

  return (
    <Container
    // as={motion.div}
    // initial={{ y: 50, opacity: 0 }}
    // animate={{ y: 0, opacity: 1 }}
    // transition={{ duration: 1, ease: "easeOut" }}
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
        onButtonClick={"/login"}
      />
      <RightPanel>
        <TopRightIcon>
          <IconAndTitle />
        </TopRightIcon>

        <Title>Register with us!</Title>
        <Form onSubmit={handleSubmit}>
          <RowWrapper>
            <InputField
              icon={Person}
              placeholder="First Name"
              name="firstName"
              type="text"
              margin={"1rem"}
              value={values.firstName}
              onChange={handleChange}
            />
            {errors.firstName && <ErrorMsg>{errors.firstName}</ErrorMsg>}
            <InputField
              icon={Person}
              placeholder="Last Name"
              name="lastName"
              type="text"
              margin={"1rem"}
              value={values.lastName}
              onChange={handleChange}
            />
            {errors.lastName && <ErrorMsg>{errors.lastName}</ErrorMsg>}
          </RowWrapper>
          <InputField
            icon={Email}
            placeholder="Email Address"
            name="email"
            type="email"
            margin={"1rem"}
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <ErrorMsg>{errors.email}</ErrorMsg>}
          <InputField
            icon={Phone}
            placeholder="Phone Number"
            name="phone"
            type="tel"
            margin={"1rem"}
            value={values.phone}
            onChange={handleChange}
          />
          {errors.phone && <ErrorMsg>{errors.phone}</ErrorMsg>}
          <InputField
            icon={CalendarToday}
            name="dateOfBirth"
            type="date"
            margin={"1rem"}
            value={values.dateOfBirth}
            onChange={handleChange}
          />
          {errors.dateOfBirth && <ErrorMsg>{errors.dateOfBirth}</ErrorMsg>}

          <InputField
            icon={Lock}
            placeholder="Password"
            name="password"
            type="password"
            margin={"1rem"}
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <ErrorMsg>{errors.password}</ErrorMsg>}

          <InputField
            icon={Lock}
            placeholder="Confirm Password"
            name="confirmPassword"
            type="password"
            margin={"1rem"}
            value={values.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && (
            <ErrorMsg>{errors.confirmPassword}</ErrorMsg>
          )}

          <LinkText type="forgot">Sign up with</LinkText>
          <Button type="submit" disabled={isLoading} width="35rem">
            {isLoading ? "Signing up..." : "Sign Up"}
          </Button>
        </Form>
      </RightPanel>
    </Container>
  );
}

export default SignUp;

const Container = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;
  @media (max-width: 768px) {
  }
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;

const RightPanel = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const TopRightIcon = styled.div`
  position: absolute;
  top: 0rem;
  right: 5rem;
  @media (max-width: 1024px) {
    right: 2rem;
    top: -0.7rem;
  }
  @media (max-width: 768px) {
    right: 1.2rem;
    top: -0.9rem;
  }
  @media (max-width: 550px) {
    top: 0.1rem;
    left: 2rem;
  }
`;
const Title = styled.h1`
  font-size: 2.1rem;
  @media (max-width: 1024px) {
    font-size: 1.9rem;
  }
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const RowWrapper = styled.div`
  display: flex;
  gap: 0.9rem;
  width: 100%;
  @media (max-width: 1024px) {
    width: 93%;
  }
  @media (max-width: 768px) {
    width: 98%;
  }
`;

const ErrorMsg = styled.p`
  font-size: 13px;
  margin: 2px 0 0 0;
  color: red;
`;

const LinkText = styled.p`
  font-size: 1rem;
  margin-top: 1rem;
  color: rgba(13, 27, 42, 0.5);
  @media (max-width: 550px) {
    display: none;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    width: 95%;
  }
  @media (max-width: 550px) {
    width: 83%;
  }
`;
