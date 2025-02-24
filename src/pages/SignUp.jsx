import { style } from "framer-motion/client";
import styled from "styled-components";
import robot from "../assets/Robot.png";
import { NavLink} from "react-router-dom";
import { Email, Lock } from "@mui/icons-material";





function SignUp() {
    return (
       <Container>
        <LeftPanel>
            <Title>
                Hello Friend!
            </Title>
            <SubTitle>
            Please Provide The Information to <br />Register Your Account
                </SubTitle>
                <LinkText>Already Have an Account? Sign In</LinkText>
                <Button type= "signup" >Sign In</Button>
      

        </LeftPanel>
        <RightPanel>
        <Navwrapper>
        <NavTitle to="/">
        <NavImg src={robot} />
        <NavTxt>Inner views</NavTxt>
      </NavTitle>
        </Navwrapper>
        
      <Title>Sign In To Your Account</Title>
      <InputWrapper>
      <Icon>
        <Email/>
      </Icon>
      <InputField
       type="email" placeholder="Email Address" />
      </InputWrapper>
      <InputWrapper>
      <Icon>
      <Lock/>
      </Icon>
        <InputField type="password" placeholder="Password" />
        </InputWrapper>
        <LinkText type="forgot">Forgot Password?</LinkText>
        <Button>Sign In</Button>
      
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
  font-size:${({type})=>(type === "forgot"?"1.2rem" :"0.9rem")};
  cursor:pointer;
  margin-top:6rem;
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
  margin-top: 15px;
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
const InputField = styled.input`
  width: 80%;
  border:none;
  margin-left:10px;
  &:focus {
       outline: none;
  }
       
  

`;
const InputWrapper = styled.div`
display:flex;
 width: 80%;
  padding: 8px;
  margin: 10px 0;
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