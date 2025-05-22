import  { useEffect, useState } from "react";
import styled from "styled-components";
import { FaUser, FaEnvelope, FaPhone,  FaRegCalendarAlt, FaStar  ,FaUserTag ,FaClipboardList ,FaMedal ,FaChartLine,FaCheckCircle ,FaArrowRight } from "react-icons/fa";
import { getUser } from "../API/profileFetch";
import { getQuizResult } from "../API/quizResult"; 
import userImg from '../images/user.png';
import { Link } from "react-router-dom";

const ProfilePage = () => {

  const [user ,setUser]=useState(null);
  const [quizResult, setQuizResult] = useState(null);

  useEffect (()=>{
    const fetchData = async ()=>{
      const response = await getUser();
      if (response.success){
        setUser(response.user);
      
      }else{
        console.error(response.message);
      }
      const quizResponse = await getQuizResult();
      if (quizResponse.success){
        
     setQuizResult(quizResponse.user); 
      console.log("Quiz Result:", quizResponse.user);
      }else{
         console.error("Quiz fetch error:", quizResponse.message);
      }
    };
    fetchData();
  },[]);
  return (
    <FullPageContainer >
<Wrapper>
      <TopBar>
        <h1>My Profile</h1>
      </TopBar>

      <Content>
        <ProfileCard>
          <Avatar src={userImg} alt="User" />
          <h2>
          
          {user?.first_name} {user?.last_name}</h2>
          <span>
            <ResponsiveIcon><FaEnvelope /></ResponsiveIcon>
            {user?.email}</span>
        </ProfileCard>

        <Details>
          <SectionTitle>Personal Information</SectionTitle>
          <Grid>
            <Item><Label>First Name</Label><Value>
            <ResponsiveIcon><FaUser /></ResponsiveIcon>
            {user?.first_name || "-"}</Value></Item>
            <Item><Label>Last Name</Label><Value>
            <ResponsiveIcon><FaUserTag /></ResponsiveIcon> 
            {user?.last_name || "-"}</Value></Item>
            <Item><Label>Phone</Label><Value>
            <ResponsiveIcon><FaPhone /></ResponsiveIcon>
            {user?.phone || "-"}</Value></Item>
            <Item><Label>Date of Birth</Label><Value>
            <ResponsiveIcon><FaRegCalendarAlt /></ResponsiveIcon>
            {user?.date_of_birth || "-"}</Value></Item>
            <Item><Label>Level</Label><Value>
            <ResponsiveIcon><FaStar /></ResponsiveIcon>
            {user?.level || "-"}</Value></Item>
          </Grid>
        </Details>

      </Content>
   <QuizSection>
      <Sectionh1>Quiz Summary</Sectionh1>

      {quizResult ? (
        <QuizGrid>

          <QuizCard accentColor="#4338ca">
  <IconWrapper iconBg="#c7d2fe" iconColor="#4338ca">
    <FaClipboardList />
  </IconWrapper>
  <StatsContent style={{ flex: 1 }}>
    <StatValue color="#3730a3">
      {typeof quizResult.highestGrade === "number"
        ? quizResult.highestGrade.toFixed(2)
        : "N/A"}
    </StatValue>
    <StatLabel>Highest Grade</StatLabel>
    <ProgressBarWrapper>
      <ProgressBar
        progress={
          typeof quizResult.highestGrade === "number"
            ? quizResult.highestGrade / 100
            : 0
        }
      />
    </ProgressBarWrapper>
  </StatsContent>
</QuizCard>

          <QuizCard accentColor="#15803d">
            <IconWrapper iconBg="#bbf7d0" iconColor="#15803d">
              <FaMedal />
            </IconWrapper>
            <StatsContent>
              <StatValue color="#166534">{quizResult.passedQuizzes ?? 0}</StatValue>
              <StatLabel>Passed Quizzes</StatLabel>
            </StatsContent>
          </QuizCard>

          <QuizCard accentColor="#b45309">
            <IconWrapper iconBg="#fed7aa" iconColor="#b45309">
              <FaChartLine />
            </IconWrapper>
            <StatsContent>
              <StatValue color="#92400e">{(quizResult.successRate).toFixed(1)}%
</StatValue>
              <StatLabel>Success Rate</StatLabel>
            </StatsContent>
            <ProgressRingWrapper>
              <Svg viewBox="0 0 60 60" aria-label="Success Rate">
                <CircleBackground cx="30" cy="30" r="24" />
                <CircleProgress cx="30" cy="30" r="24" progress={quizResult.successRate } />
                <RingText x="30" y="32">{(quizResult.successRate ).toFixed(0)}%</RingText>
              </Svg>
            </ProgressRingWrapper>
          </QuizCard>

          <QuizCard accentColor="#2563eb">
            <IconWrapper iconBg="#bfdbfe" iconColor="#2563eb">
              <FaCheckCircle  />
            </IconWrapper>
            <StatsContent>
              <StatValue color="#1e40af">{quizResult.takenQuizzes ?? 0}</StatValue>
              <StatLabel>Quizzes Taken</StatLabel>
            </StatsContent>
          </QuizCard>

        </QuizGrid>
      ) : (
        <NoQuizMessage>Please rate yourself with us.
          <LinkButton to="/quiz">
    Go to Quiz <FaArrowRight />
  </LinkButton>
        </NoQuizMessage>
      )}
    </QuizSection>
    </Wrapper>
    </FullPageContainer>
    
  
  );
};

export default ProfilePage;
const FullPageContainer = styled.div`
  height: 100vh;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #8888887d;
    border-radius: 5px;
    margin-bottom: 0.3rem;
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(to bottom, #6a0dad, #af73cf, #f7c5cc);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    cursor: pointer;
    background: linear-gradient(to bottom, #4a077a, #805599, #c0949a);
  }

@media (max-width: 500px) {
    height:auto
  }
`;
const Wrapper = styled.div`
  font-family: "Inter", sans-serif;
  background: #f9fafb;
  min-height: 100vh;
  padding: 2rem;
  @media (max-width: 500px) {
    padding: 1rem;
  }
`;


const TopBar = styled.div`
  margin-bottom: 2rem;
  h1 {
    font-size: 1.8rem;
    font-weight: 600;
     background: linear-gradient(to bottom, #6a0dad, #af73cf, #f7c5cc); 
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  background-clip: text;
  color: transparent;
  }
`;
const Content = styled.div`
  display: flex;
  gap: 2rem;
  align-items: stretch;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }
`;


const ProfileCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.05);
  text-align: center;
  width: 90%;
  max-width: 300px;

  h2 {
    font-size: 1.25rem;
    margin: 1rem 0 0.5rem;
  }

  span {
    color: #6b7280;
    font-size: 0.95rem;
  }

  @media (max-width: 768px) {
    max-width: 70%;
    margin: 0 auto;
  }
`;


const Avatar = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  object-fit: cover;
`;

const Details = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.05);
  flex: 1;
  @media (max-width: 800px) {
    margin: 0 auto;
     width: 80%;
  }
  @media (max-width: 768px) {
    margin: 0 auto;
     width: 70%;
  }
`;

const  ResponsiveIcon = styled.span`

margin-right:0.5rem;
color: #6a0dad;
@media (max-width: 820px) {
    display: inline-block;
  }
`
const SectionTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
  color: #374151;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.span`
  font-size: 1rem;
  color: #6b7280;
`;

const Value = styled.span`
  font-size: 1.01rem;
  color: #111827;
  font-weight: 500;
  margin-top: 0.30rem;

`;
const QuizSection = styled.section`
  
  margin: 2rem auto;
  padding: 1.5rem;
  background: #fafafa;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgb(0 0 0 / 0.1);
`;


const Sectionh1 = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
  background: linear-gradient(to left, #6a0dad, #af73cf); 
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  background-clip: text;
  color: transparent;
  text-align: center;
`;


const QuizGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (min-width: 640px) {
    gap: 2rem;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;

// Individual Card
const QuizCard = styled.div`
  background: white;
  border-radius: 10px;
  box-shadow: 0 6px 16px rgb(0 0 0 / 0.07);
  display: flex;
  align-items: center;
  padding: 1.25rem 1.5rem;
  border-left: 6px solid ${({ accentColor }) => accentColor || "#4f46e5"};
  flex: 1;
  min-width: 0; 

  &:hover {
    box-shadow: 0 8px 24px rgb(0 0 0 / 0.15);
  }
   @media (min-width: 768px) {
    flex: 1 1 calc(50% - 1rem);
  }

  @media (min-width: 1024px) {
    flex: 1 1 calc(10% - 1rem);
  }
`;

// Icon Container
const IconWrapper = styled.div`
  background: ${({ iconBg }) => iconBg || "#c7d2fe"};
  color: ${({ iconColor }) => iconColor || "#4338ca"};
  border-radius: 50%;
  padding: 0.75rem;
  font-size: 1.75rem;
  margin-right: 1.25rem;
  flex-shrink: 0;
`;

const StatsContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StatValue = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${({ color }) => color || "#1e40af"};
  line-height: 1;
`;

const StatLabel = styled.div`
  font-size: 0.85rem;
  text-transform: uppercase;
  font-weight: 600;
  color: #6b7280; 
  letter-spacing: 0.05em;
  margin-top: 0.25rem;
`;

const ProgressRingWrapper = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
  margin-left: auto;
  flex-shrink: 0;
`;


const Svg = styled.svg`
  transform: rotate(-90deg);
  width: 60px;
  height: 60px;
`;


const CircleBackground = styled.circle`
  fill: none;
  stroke: #e5e7eb;
  stroke-width: 6;
`;


const CircleProgress = styled.circle`
  fill: none;
  stroke: #f59e0b; 
  stroke-width: 6;
  stroke-linecap: round;
  transition: stroke-dashoffset 0.5s ease;
  stroke-dasharray: 151.8;
  stroke-dashoffset: ${({ progress }) => 151.8 - (progress * 151.8)};
`;


const RingText = styled.text`
  font-size: 1rem;
  fill: #92400e; 
  font-weight: 700;
  text-anchor: middle;
  dominant-baseline: middle;
`;
const ProgressBarWrapper = styled.div`
  width: 100%;
  height: 10px;
  background-color: #e5e7eb; 
  border-radius: 5px;
  margin-top: 0.5rem;
`;

const ProgressBar = styled.div`
  height: 100%;
  background-color: #4338ca; 
  border-radius: 5px;
  width: ${({ progress }) => `${Math.min(progress * 100, 100)}%`};
  transition: width 0.4s ease;
`;

const NoQuizMessage = styled.p`
  text-align: center;
  font-style: italic;
  color:rgb(113, 118, 128);
  font-size: 1.125rem;
  margin-top: 3rem;
`;
const LinkButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  margin-top: 0.75rem;
  
  font-weight: 600;
  color:rgb(33, 32, 46);
  text-decoration: none;
  font-size: 1.01rem;

  svg {
    margin-left: 0.4rem;
    transition: transform 0.2s;
  }

  &:hover svg {
    transform: translateX(4px);
    color:rgb(67, 61, 158);
  }

  &:hover {
    text-decoration: underline;
    color:rgb(67, 61, 158);
  }
`;
