import  { useEffect, useState } from "react";
import styled from "styled-components";
import { getUser } from "../API/profileFetch";

const ProfilePage = () => {

  const [user ,setUser]=useState(null);

  useEffect (()=>{
    const fetchUser = async ()=>{
      const response = await getUser();
      if (response.success){
        setUser(response.user);
      
      }else{
        console.error(response.message);
      }
    };
    fetchUser();
  },[]);
  return (
    <Container>
      <Card>
        <Title>User Profile</Title>
        {user ? (
          <>
            <ProfileImageWrapper>
              <ProfileImage src="https://via.placeholder.com/150" alt="User Profile" />
            </ProfileImageWrapper>
            <Details>
              <Row>
                <Label>Full Name:</Label>
                <Value>{user.first_name} {user.last_name}</Value>
              </Row>
              <Row>
                <Label>Email:</Label>
                <Value>{user.email}</Value>
              </Row>
              <Row>
                <Label>Phone:</Label>
                <Value>{user.phone}</Value>
              </Row>
              <Row>
                <Label>Date of Birth:</Label>
                <Value>{user.date_of_birth}</Value>
              </Row>
              <Row>
                <Label>User Level:</Label>
                <Value>{user.level}</Value>
              </Row>
            </Details>
          </>
        ) : (
          <Loading>Loading...</Loading>
        )}
      </Card>
    </Container>
  );
};

export default ProfilePage;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f4f8;
  overflow-y: auto;
  margin-right: 0.2rem;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #8888887d;
    border-radius: 5px;
    margin-bottom: 0.3rem;
    /* width: 5px; */
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(to bottom, #6a0dad, #af73cf, #f7c5cc);
    border-radius: 10px;
    /* width: 8px;  */
  }

  &::-webkit-scrollbar-thumb:hover {
    /* width: 10px; */
    cursor: pointer;
    background: linear-gradient(to bottom, #4a077a, #805599, #c0949a);
  }

`;

const Card = styled.div`
  padding: 3rem;
  background-color: #ffffff;
  border-radius: 1.5rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  min-width: 320px;
  width: 100%;
  max-width: 600px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.2rem;
  color: #333;
  margin-bottom: 2rem;
`;

const ProfileImageWrapper = styled.div`
  margin-bottom: 2rem;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
  object-fit: cover;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  font-size: 1.2rem;
`;

const Label = styled.span`
  font-weight: 600;
  color: #6a0dad;
`;

const Value = styled.span`
  color: #333;
  font-weight: 500;
`;

const Loading = styled.p`
  text-align: center;
  font-size: 1.5rem;
  color: #999;
`;
