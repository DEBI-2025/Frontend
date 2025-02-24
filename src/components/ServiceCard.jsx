import { Link } from "react-router-dom";
import styled from "styled-components";

function ServiceCard({ icon, title, description, button, bgColor, link }) {
  return (
    <CardDiv bgColor={bgColor}>
      <CardIcon src={icon} alt="icon" />
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
      <CardButton to={link}>{button}</CardButton>
    </CardDiv>
  );
}

export default ServiceCard;
const CardDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 45%;
  height: 90%;
  background-color: ${({ bgColor }) => bgColor || "#f7c5cc59"};
  border-radius: 10px;
  padding: 30px;
  transition: transform 0.2s;
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.268);
  &:hover {
    transform: scale(1.03);
  }
`;

const CardIcon = styled.img`
  width: 15%;
`;

const CardTitle = styled.p`
  font-family: Roboto Slab;
  font-weight: 700;
  font-size: 1.5rem;
  margin: 1rem 0 0 0;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  line-height: 1.4rem;
  margin-bottom: 2rem;
`;

const CardButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  width: 95%;
  height: 2.5rem;
  font-size: 1.1rem;
  color: white;
  cursor: pointer;
  border-radius: 50px;
  background: #6a0dad;
`;
