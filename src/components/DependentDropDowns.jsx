import { useState, useEffect } from "react";
import Select from "react-select";
import styled from "styled-components";
import Cookies from "js-cookie";

function DependentDropDowns() {
  const [fields, setFields] = useState([]);
  const [topics, setTopics] = useState([]);
  const [selectedField, setSelectedField] = useState(null);
  const [selectedTopics, setSelectedTopics] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = Cookies.get("innerViews-access-token");

        if (!token) {
          throw new Error("No access token found. Please log in.");
        }

        const response = await fetch("http://localhost:8000/api/fields/", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `JWT ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setFields(
          data.map((field) => ({
            value: field.id,
            label: field.name,
          }))
        );
      } catch (error) {
        console.error("Error fetching fields:", error);
      }
    };

    fetchData();
  }, []);

  const handleFieldChange = (selectedOption) => {
    setSelectedField(selectedOption);
    setSelectedTopics([]);

    if (selectedOption) {
      const fetchTopics = async () => {
        try {
          const token = Cookies.get("innerViews-access-token");

          if (!token) {
            throw new Error("No access token found. Please log in.");
          }

          const response = await fetch(
            `http://localhost:8000/api/topics?field=${selectedOption.value}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: `JWT ${token}`,
              },
            }
          );
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          setTopics(
            data.map((topic) => ({
              value: topic.id,
              label: topic.name,
            }))
          );
        } catch (error) {
          console.error("Error fetching topics:", error);
        }
      };
      fetchTopics();
    } else {
      setTopics([]);
    }
  };

  const handleTopicChange = (selectedOptions) => {
    setSelectedTopics(selectedOptions);
  };

  return (
    <Wrapper>
      <SelectDiv>
        <SelectLabel>Select Field:</SelectLabel>
        <Select
          options={fields}
          value={selectedField}
          onChange={handleFieldChange}
          isClearable
        />
      </SelectDiv>

      <SelectDiv>
        <SelectLabel>Select Topics:</SelectLabel>
        <Select
          options={topics}
          value={selectedTopics}
          onChange={handleTopicChange}
          isMulti
          isClearable
          isDisabled={!selectedField}
        />
      </SelectDiv>
    </Wrapper>
  );
}

export default DependentDropDowns;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 1rem;
  margin-top: 2rem;
`;
const SelectDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;
const SelectLabel = styled.label`
  color: #6a0dad;
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: 0.5px;
`;
