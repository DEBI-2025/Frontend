import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Email, Lock } from "@mui/icons-material";
import robot from "../images/Robot.png";

function LogIn() {
    return (
        <Container>
            <LeftPanel>
                <Title>Hello Friend!</Title>
                <SubTitle>Please Provide The Information to SignIn</SubTitle>
                <LinkText>Don't Have an Account?</LinkText>
                <Button type="signup">Sign Up</Button>
            </LeftPanel>
            <RightPanel>
                <NavWrapper>
                    <NavTitle to="/">
                        <NavImg src={robot} />
                        <NavTxt>InnerView</NavTxt>
                    </NavTitle>
                </NavWrapper>
                <Title>Sign In To Your Account</Title>
                <InputWrapper>
                    <Icon>
                        <Email />
                    </Icon>
                    <InputField type="email" placeholder="Email Address" />
                </InputWrapper>
                <InputWrapper>
                    <Icon>
                        <Lock />
                    </Icon>
                    <InputField type="password" placeholder="Password" />
                </InputWrapper>
                <LinkText type="forgot">Forgot Password?</LinkText>
                <Button>Sign In</Button>
            </RightPanel>
        </Container>
    );
}

export default LogIn;

const Container = styled.div`
display: flex;
height: 100vh;
`;

const LeftPanel = styled.div`
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background: linear-gradient(to bottom right, #af73cf, #f7c5cc);
color: white;
cursor: pointer;
`;

const Logo = styled.div`
font-size: 1.5rem;
font-weight: bold;
margin-right: 2rem;
color: black;

@media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 1rem;
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
`;

const Title = styled.h1`
font-size: 3rem;
`;

const SubTitle = styled.p`
margin-top: -10px;
font-size: 19px;
padding-right: 2rem;
`;

const LinkText = styled.p`
font-size: ${({ type }) => (type === "forgot" ? "1.2rem" : "0.9rem")};
cursor: pointer;
margin-top: 6rem;
color: ${({ type }) => (type === "forgot" ? "#0D1B2A80" : "white")};
`;

const Button = styled.button`
width: 80%;
font-family: Literata;
padding: 12px;
background: ${({ type }) =>
        type === "signup"
            ? "none"
            : "linear-gradient(to right, #6a0dad  , #af73cf , #f7c5cc )"};
color: white;
border: 1px solid white;
border-radius: 25px;
margin-top: 15px;
font-weight: 600;
transition: transform 100ms ease-in-out;
&:hover {
    transform: scale(1.04);
    cursor: pointer;
}
`;

const NavTitle = styled(NavLink)`
display: flex;
align-items: center;
gap: 0.5rem;
text-decoration: none;
`;

const InputField = styled.input`
width: 80%;
border: none;
margin-left: 10px;
&:focus {
    outline: none;
}
`;

const InputWrapper = styled.div`
display: flex;
width: 80%;
padding: 8px;
margin: 10px 0;
border: 1px solid #d8b4fe;
border-radius: 25px;
outline: none;
text-indent: 15px;
margin-top: 1rem;
`;

const Icon = styled.div`
color: var(--color-secondary);
display: flex;
align-items: center;
color: #6a0dad;
`;

const NavImg = styled.img`
width: 25px;
padding-top: 0.35rem;
`;
const NavTxt = styled.p`
text-transform: uppercase;
font-size: 1.7rem;
font-weight: 900;
font-family: antonio;
background: linear-gradient(to right, #6a0dad 20%, #af73cf, #f7c5cc);
background-clip: text;
-webkit-background-clip: text;
color: transparent;
display: inline-block;
`;

const NavWrapper = styled.div`
position: absolute;
top: 0;
right: 0;
width: 100%;
display: flex;
justify-content: flex-end;
padding: 1rem 5rem;
`;