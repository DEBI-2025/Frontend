import  { useEffect, useState } from "react";
import styled from "styled-components";
import { FaUser, FaEnvelope, FaPhone, FaBirthdayCake, FaStar } from "react-icons/fa";
import { getUser } from "../API/profileFetch";
import { getQuizResult } from "../API/quizResult"; 
import userImg from '../images/user.png';

const ProfilePage = () => {

  const [user ,setUser]=useState(null);

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
            {/* <ResponsiveIcon><FaPhone /></ResponsiveIcon> */}
            {user?.last_name || "-"}</Value></Item>
            <Item><Label>Phone</Label><Value>
            <ResponsiveIcon><FaPhone /></ResponsiveIcon>
            {user?.phone || "-"}</Value></Item>
            <Item><Label>Date of Birth</Label><Value>
            <ResponsiveIcon><FaBirthdayCake /></ResponsiveIcon>
            {user?.date_of_birth || "-"}</Value></Item>
            <Item><Label>Level</Label><Value>
            <ResponsiveIcon><FaStar /></ResponsiveIcon>
            {user?.level || "-"}</Value></Item>
          </Grid>
        </Details>
      </Content>
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
  @media (max-width: 768px) {
    margin: 0 auto;
     width: 70%;
  }
`;

const  ResponsiveIcon = styled.span`
display :none;
margin-right:0.5rem;
color: #6a0dad;
@media (max-width: 768px) {
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
  font-size: 0.85rem;
  color: #6b7280;
`;

const Value = styled.span`
  font-size: 1rem;
  color: #111827;
  font-weight: 500;
  margin-top: 0.25rem;
`;
