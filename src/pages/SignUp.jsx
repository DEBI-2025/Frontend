import { style } from "framer-motion/client";
import styled from "styled-components";
import robot from "../images/Robot.png";
import { NavLink,useNavigate} from "react-router-dom";
import {Person, Phone , Email, Lock ,CalendarToday, Password } from "@mui/icons-material";
import { motion } from "framer-motion";
import Validation from "../validation";
import { useState } from "react";
import LeftPanel from "../components/LeftPanel";



function SignUp() {
  const navigate = useNavigate();
const [values ,setValues] = useState({
  firstName:"",
  lastName:"",
  email:"",
  phone:"",
  dateOfBirth:"",
  password:"",
  confirmPassword:"",
});
const [errors ,setErrors]= useState({});
const handleChange =(event)=>{
  const newObj ={...values,[event.target.name]:event.target.value};
  setValues(newObj);
};
const handleSubmit =(e)=>{
  e.preventDefault();
  setErrors(Validation(values));
 
};
    return (
      
       <Container
       as={motion.div}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}>
       
      
        <LeftPanel
        title="Hello Friend!"
        subtitle={
          <>
            Please Provide The Information to<br /> Register Your Account
          </>
        }
        linkText="Already Have an Account"
        buttonText="sign in"
        onButtonClick={() => navigate("/login")}
         />
        <RightPanel>
        <Navwrapper>
        <NavTitle to="/">
        <NavImg src={robot} />
        <NavTxt>Inner views</NavTxt>
      </NavTitle>
        </Navwrapper>
        
      <Title>Register with us !</Title>
      <Form onSubmit={handleSubmit}>
      <RowWrapper>
      <FieldWrapper>
      <InputWrapper>
      <Icon>
        <Person fontSize="small"/>
      </Icon>
      <InputField
       type="text" placeholder="First Name" 
        name="firstName"
       value={values.firstName}
       onChange={handleChange}/>
      </InputWrapper>
     {errors.firstName && <ErrorMsg>
        {
        errors.firstName }
      </ErrorMsg> }
      </FieldWrapper>
      <FieldWrapper>

      
      <InputWrapper>
      <Icon>
      <Person fontSize="small"/>
      </Icon>
        <InputField type="text" placeholder="last Name" 
         name="lastName"
        value={values.lastName}
        onChange={handleChange}/>
        
        </InputWrapper>
        {errors.lastName && <ErrorMsg>
        {
        errors.lastName }
      </ErrorMsg> }
        </FieldWrapper>
      </RowWrapper>
      
      
      <InputWrapper>
      <Icon>
        <Email fontSize="small"/>
      </Icon>
      <InputField
       type="email" placeholder="Email Address"
        name="email"
       value={values.email}
       onChange={handleChange} />
      </InputWrapper>
      {errors.email &&  <ErrorMsg> {
        errors.email }</ErrorMsg>}
      <InputWrapper>
      <Icon>
        <Phone fontSize="small"/>
      </Icon>
      <InputField
       type="tel" placeholder="Phone Number"
       name="phone"
       value={values.phone}
       onChange={handleChange} />
      </InputWrapper>
      {errors.phone &&  <ErrorMsg> {
        errors.phone }</ErrorMsg>}
      <InputWrapper>
      <Icon>
        <CalendarToday  fontSize="small"/>
      </Icon>
      <InputField
       type="date" style={{ color: "gray" }}
       name="dateOfBirth"
       value={values.dateOfBirth}
       onChange={handleChange} />
      </InputWrapper>
      {errors.dateOfBirth &&  <ErrorMsg>{
        errors.dateOfBirth }</ErrorMsg>}
      <InputWrapper>
      <Icon>
      <Lock fontSize="small"/>
      </Icon>
        <InputField type="password" placeholder="Password"
         name="password"
         value={values.password}
         onChange={handleChange} />
        </InputWrapper>
        {errors.password && <ErrorMsg>{errors.password}</ErrorMsg>}
        <InputWrapper>
      <Icon>
      <Lock fontSize="small"/>
      </Icon>
        <InputField type="password" placeholder="Confirm Password " 
        name="confirmPassword"
         value={values.confirmPassword}
         onChange={handleChange} />
        </InputWrapper>
        {errors.confirmPassword && <ErrorMsg>{errors.confirmPassword}</ErrorMsg>}

        <LinkText type="forgot"> sign up with </LinkText>
        <Button type ='Submit'>Sign up</Button>
      </Form>
      
      
        </RightPanel>
       </Container>
    )
}

export default SignUp

const Container = styled.div`
display:flex;
height:100vh;
overFlow:hidden;
padding:0;
margin:0;
 @media (max-width: 768px) {
    flex-direction: column; 
  }
`
;

const RightPanel = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: white;
  padding: 2rem;
  margin:0;
`;
const Title = styled.h1`
  font-size: 2.1rem;
 margin-top: 0;
padding-top: 2rem;

  `
  ;
  const SubTitle = styled.p`
    font-family: Literata; 
  /* font-family: Roboto Slab; */
  /* font-family: antonio; */
  margin-top:-10px;
  font-size:19px;
  paddig-right: 2rem;
   letter-spacing: 1px;
  
  `;
  const LinkText =styled.p`
  font-size:1rem;
  margin-top: "1rem";
color: rgba(13, 27, 42, 0.5); 

  `;
  const Button = styled.button`
  width: 80%;
font-family: Literata; 
  padding: 12px;
  background: ${({type})=>(type === "signup"? "none":"linear-gradient(to right, #6a0dad  , #af73cf , #f7c5cc )")};
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
const RowWrapper = styled.div`
 display: flex;
  justify-content: space-between; 
  width: 80%;
`;
const InputField = styled.input`
color: gray;
  justify-content: space-between;
  width:100%;
  border:none;
  margin-left:10px;
  &:focus {
       outline: none;
  }
       
  

`;
const InputWrapper = styled.div`
display:flex;
width:70%;
  padding: 8px;
  border: 1px solid #d8b4fe;
  border-radius: 25px;
  outline: none;
  text-indent: 15px;
  margin-top:1rem;
`;
const Icon = styled.div`
  left: 10px;
  color: gray;
  display: flex;
  align-items: center;
  font-size:10px;
  
`;
const Navwrapper = styled.div`
 position: absolute;
 top: 0;
  left: 0;
   padding: 0.5rem 1rem; 
   @media (max-width: 768px) {
    display:none; 
  }

`;
const ErrorMsg = styled.p`
  font-size: 13px;
  margin: 2px 0 0 0;
  color: red;
   align-self: ${({ type }) => (type === "text" ? "center" : "flex-start")};
  margin-left: ${({ type }) => (type === "text" ? "rem" : "5.6rem")};

 

`;
const Form = styled.form`
 width:100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`
const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
   align-items: center;
  justify-content: center;
`;