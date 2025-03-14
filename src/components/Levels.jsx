import { useEffect, useState } from "react";
import styled from "styled-components";
import Cookies from "js-cookie";
function Levels() {
  const [levels, setLevels] = useState([]);
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLevels = async () => {
      try {
        const token = Cookies.get("innerViews-access-token"); 
  
        if (!token) {
          throw new Error("No access token found. Please log in.");
        }
  
        const response = await fetch("http://localhost:8000/api/levels/", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `JWT ${token}`,
          },
        });
  
        if (!response.ok)
          throw new Error(`HTTP error! Status ${response.status}`);
  
        const data = await response.json();
  
        if (Array.isArray(data)) {
          setLevels(data);
          setSelectedLevel(data.length > 0 ? data[0].name : null);
        } else {
          throw new Error("Unexpected API response format");
        }
      } catch (err) {
        setError("Failed to load levels. Please try again.");
      }
    };
  
    fetchLevels();
  }, []);
  
  const handleLevelClick = (level) => {
    setSelectedLevel(level);
    console.log("Selected Level:", level);
  };
  if (error) return <p>{error}</p>;

  return (
    <Ul>
      {levels.length > 0 ? (
        levels.map((level) => (
          <Li
            key={level.id}
            onClick={() => handleLevelClick(level.name)}
            $isSelected={selectedLevel === level.name}
          >
            {level.name}
          </Li>
        ))
      ) : (
        <p>Loading levels...</p>
      )}
    </Ul>
  );
}

export default Levels;

const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* width: 60rem; */
  gap: 7rem;
  font-size: 1.4rem;
  padding: 0;
  margin: 0.5rem 0;
  list-style: none;
  /* background-color: red; */
`;

const Li = styled.li`
  color: ${({ $isSelected }) => ($isSelected ? "#6a0dad" : "#af73cf")};
  text-decoration: ${({ $isSelected }) => ($isSelected ? "underline" : "none")};
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  cursor: pointer;
  transition: color 0.2s;
  text-underline-offset: 3px;

  &:hover {
    color: #6a0dad;
    text-decoration: underline;
  }
`;
