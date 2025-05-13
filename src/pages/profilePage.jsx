import React from "react";
import styled from "styled-components";

const ProfilePage = () => {
  return (
    <Container>
      <Card>
       <h1>hello</h1>
        
      </Card>
    </Container>
  );
};

export default ProfilePage;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  background-color: #f9f9f9;
`;

const Card = styled.div`
  padding: 2rem;
  background-color: white;
  border-radius: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  min-width: 300px;
`;

