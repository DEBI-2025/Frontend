import { style } from "framer-motion/client";
import styled from "styled-components";
import robot from "../images/Robot.png";
import { NavLink} from "react-router-dom";
import {Person, Phone , Email, Lock ,CalendarToday } from "@mui/icons-material";
import { motion } from "framer-motion";





function SignUp() {
    return (
       <Container
       as={motion.div}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}>
        
        <LeftPanel>
            <Title>
                Hello Friend!
            </Title>
            <SubTitle>
            Please Provide The Information to <br />Register Your Account
                </SubTitle>
                <LinkText>Already Have an Account</LinkText>
                <Button type= "signup" >Sign In</Button>
      

        </LeftPanel>
        <RightPanel>
        <Navwrapper>
        <NavTitle to="/">
        <NavImg src={robot} />
        <NavTxt>Inner views</NavTxt>
      </NavTitle>
        </Navwrapper>
        
      <Title>Register with us !</Title>
      <RowWrapper>
      <InputWrapper>
      <Icon>
        <Person fontSize="small"/>
      </Icon>
      <InputField
       type="text" placeholder="First Name" />
      </InputWrapper>
      
      <InputWrapper>
      <Icon>
      <Person fontSize="small"/>
      </Icon>
        <InputField type="text" placeholder="last Name" />
        </InputWrapper>
      </RowWrapper>
      <InputWrapper>
      <Icon>
        <Email fontSize="small"/>
      </Icon>
      <InputField
       type="email" placeholder="Email Address" />
      </InputWrapper>
      <InputWrapper>
      <Icon>
        <Phone fontSize="small"/>
      </Icon>
      <InputField
       type="tel" placeholder="Phone Number" />
      </InputWrapper>
      <InputWrapper>
      <Icon>
        <CalendarToday  fontSize="small"/>
      </Icon>
      <InputField
       type="date" style={{ color: "gray" }} />
      </InputWrapper>
      <InputWrapper>
      <Icon>
      <Lock fontSize="small"/>
      </Icon>
        <InputField type="password" placeholder="Password" />
        </InputWrapper>
        <InputWrapper>
      <Icon>
      <Lock fontSize="small"/>
      </Icon>
        <InputField type="password" placeholder="Confirm Password " />
        </InputWrapper>
        <LinkText type="forgot">Forgot Password?</LinkText>
        <Button>Sign up</Button>
      
        </RightPanel>
       </Container>
    )
}

export default SignUp
const Container = styled.div`
display:flex;
height:100vh`
;
const LeftPanel = styled.div`
flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to bottom right,  #af73cf, #f7c5cc);
  color: white;
  
  cursor: pointer;
`;
const RightPanel = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: white;
  padding: 2rem;
`;
const Title = styled.h1`
  font-size: 3rem;
  marigin-top:1rem;
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
  margin-top: ${({type})=>(type === "forgot"?"1rem":"6.5rem")};
  color:${({type})=>(type === "forgot"? "#0D1B2A80":"white")};
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
  gap: 30px; 
  width:70%;
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
  right: 0;
  width: 100%; 
 display: flex;
  justify-content: flex-end;
   padding: 1rem 5rem; 
`